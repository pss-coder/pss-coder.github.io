import { readFile } from 'fs/promises'
import path from 'path'

import glob from 'fast-glob'
import matter from 'gray-matter'

import { markdownToHtml } from '@/lib/markdown'

export interface Article {
  title: string
  description: string
  author: string
  date: string
  draft?: boolean
  coverImage?: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

const articlesDirectory = path.join(process.cwd(), 'content', 'posts')

function formatFrontmatterDate(value: unknown) {
  // YAML parses unquoted dates (2026-11-01) into Date objects.
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10)
  }

  return String(value ?? '')
}

async function readArticle(slug: string) {
  let source: string

  try {
    source = await readFile(path.join(articlesDirectory, `${slug}.md`), 'utf8')
  } catch {
    return null
  }

  const { data, content } = matter(source)

  return {
    article: {
      slug,
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      author: String(data.author ?? ''),
      date: formatFrontmatterDate(data.date),
      draft: Boolean(data.draft),
      coverImage: data.coverImage ? String(data.coverImage) : undefined,
    } satisfies ArticleWithSlug,
    body: content.trim(),
  }
}

export async function getAllArticles() {
  const filenames = await glob('*.md', { cwd: articlesDirectory })

  const articles = await Promise.all(
    filenames.map((filename) => readArticle(filename.replace(/\.md$/, ''))),
  )

  return articles
    .filter((entry) => entry !== null && !entry.article.draft)
    .map((entry) => entry!.article)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export async function getArticlePage(slug: string) {
  const entry = await readArticle(slug)

  if (!entry || entry.article.draft) {
    return null
  }

  return {
    article: entry.article,
    html: await markdownToHtml(entry.body),
  }
}
