// Static export for GitHub Pages. PAGES_BASE_PATH is set by the deploy
// workflow (e.g. "/website"); it is empty locally or with a custom domain.
const basePath = process.env.PAGES_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
