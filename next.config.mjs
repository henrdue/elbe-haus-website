// Für GitHub Pages "Deploy from a branch":
// repo = Name Ihres GitHub-Repositories (bei einem User-Repo "nutzername.github.io" beide Zeilen basePath/assetPrefix entfernen)
const repo = 'elbe-haus-website';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/' + repo,
  assetPrefix: '/' + repo,
  images: { unoptimized: true },
};
export default nextConfig;
