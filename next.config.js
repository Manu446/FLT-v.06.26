/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'FLT-v.06.26';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
