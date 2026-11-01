import { readFile } from 'fs/promises'
import path from 'path'

import glob from 'fast-glob'
import matter from 'gray-matter'

import { markdownToHtml } from '@/lib/markdown'

export interface Project {
  slug: string
  title: string
  summary: string
  techStack: string[]
  repoUrl?: string
  liveUrl?: string
  featured: boolean
  sortOrder: number
  coverImage?: string
  logo?: string
  /** Longer description shown when the project card is expanded. */
  bodyHtml?: string
}

const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

async function readProject(filename: string): Promise<Project> {
  const source = await readFile(path.join(projectsDirectory, filename), 'utf8')
  const { content, data } = matter(source)
  const body = content.trim()

  return {
    slug: filename.replace(/\.md$/, ''),
    title: String(data.title ?? ''),
    summary: String(data.summary ?? ''),
    techStack: Array.isArray(data.techStack)
      ? data.techStack.map((item) => String(item))
      : [],
    repoUrl: data.repoUrl ? String(data.repoUrl) : undefined,
    liveUrl: data.liveUrl ? String(data.liveUrl) : undefined,
    featured: Boolean(data.featured),
    sortOrder: Number(data.sortOrder ?? 999),
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    logo: data.logo ? String(data.logo) : undefined,
    bodyHtml: body ? await markdownToHtml(body) : undefined,
  }
}

export async function getAllProjects() {
  const filenames = await glob('*.md', { cwd: projectsDirectory })
  const projects = await Promise.all(filenames.map(readProject))

  return projects.sort((a, b) => {
    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured)
    }

    if (a.sortOrder !== b.sortOrder) {
      return a.sortOrder - b.sortOrder
    }

    return a.title.localeCompare(b.title)
  })
}
