import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Packages with native/wasm or dynamic Node loaders need to stay in the Node runtime.
  serverExternalPackages: ['@ancestral/ingest', '@ancestral/store-fs', '@vscode/tree-sitter-wasm', 'unpdf'],
  experimental: {
    serverActions: {
      bodySizeLimit: '25mb',
    },
  },
};

export default nextConfig;
