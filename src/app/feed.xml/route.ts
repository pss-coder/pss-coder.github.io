import { Feed } from 'feed'

import { getAllArticles, getArticlePage } from '@/lib/articles'

export const dynamic = 'force-static'

export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Pawandeep Singh Sekhon',
    email: 'pawandeepse@me.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Writing on software, products, and building useful things.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  const articles = await getAllArticles()

  for (const article of articles) {
    const publicUrl = `${siteUrl}/articles/${article.slug}/`
    const content = (await getArticlePage(article.slug))?.html

    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      description: article.description,
      content: content ?? article.description,
      author: [{ name: article.author || author.name }],
      contributor: [{ name: article.author || author.name }],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
