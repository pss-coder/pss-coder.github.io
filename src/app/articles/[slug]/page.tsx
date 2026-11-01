import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticleLayout } from '@/components/ArticleLayout'
import { getAllArticles, getArticlePage } from '@/lib/articles'

export const dynamicParams = false

export async function generateStaticParams() {
  const articles = await getAllArticles()

  // Static export fails on an empty list, so emit a placeholder that 404s.
  if (articles.length === 0) {
    return [{ slug: '_' }]
  }

  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const articlePage = await getArticlePage(slug)

  if (!articlePage) {
    return {}
  }

  return {
    title: articlePage.article.title,
    description: articlePage.article.description,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const articlePage = await getArticlePage(slug)

  if (!articlePage) {
    notFound()
  }

  return (
    <ArticleLayout article={articlePage.article}>
      <div dangerouslySetInnerHTML={{ __html: articlePage.html }} />
    </ArticleLayout>
  )
}
