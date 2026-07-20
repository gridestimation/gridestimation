const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repository.endsWith('.github.io');
const basePath = process.env.GITHUB_ACTIONS && !isUserSite ? `/${repository}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath }
};

export default nextConfig;
