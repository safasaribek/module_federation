import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { dependencies } from './package.json';

export default defineConfig({
  server: {
    port: 3003,
  },
  moduleFederation: {
    options: {
      name: 'basket',
      exposes: {
        './Basket': './src/Basket',
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
