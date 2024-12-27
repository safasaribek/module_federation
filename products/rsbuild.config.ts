import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { dependencies } from './package.json';

export default defineConfig({
  server: {
    port: 3002,
  },
  moduleFederation: {
    options: {
      name: 'products',
      exposes: {
        './ProductList': './src/ProductList',
      },
      filename: 'remoteEntry.js',
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies['react'] },
        'react-dom': { singleton: true, requiredVersion: dependencies['react-dom'] },
      },
    },
  },
  plugins: [pluginReact()],
});