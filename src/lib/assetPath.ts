/**
 * Prefix a site-relative asset path (e.g. "/uploads/foo.jpg") with the
 * deployment base path. next/image does not do this for string sources.
 */
export function withBasePath(src: string) {
  if (!src.startsWith('/') || src.startsWith('//')) {
    return src
  }

  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`
}
