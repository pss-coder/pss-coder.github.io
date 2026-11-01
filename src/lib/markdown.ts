import rehypePrism from '@mapbox/rehype-prism'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import { withBasePath } from '@/lib/assetPath'

export async function markdownToHtml(markdown: string) {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism as any)
    .use(rehypeStringify)
    .process(markdown)

  // Images inserted via the CMS are stored as "/uploads/...".
  return String(processed).replace(
    /(src|href)="(\/uploads\/[^"]*)"/g,
    (_, attr, url) => `${attr}="${withBasePath(url)}"`,
  )
}
