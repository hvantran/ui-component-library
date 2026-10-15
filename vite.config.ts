import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import pkg from './package.json';

const isStorybook =
  process.argv.some((arg) => arg.includes('storybook')) ||
  process.env.STORYBOOK === 'true';

export default defineConfig({
  define: {
    __LIB_VERSION__: JSON.stringify(pkg.version),
  },
  plugins: [
    react(),
    !isStorybook && {
      name: 'externalize-media-in-lib-build',
      enforce: 'pre' as const,
      load(id: string) {
        if (id.endsWith('.mp4') || id.includes('.mp4?')) {
          const filename = id.split('/').pop()?.split('?')[0];
          return `export default ${JSON.stringify('./assets/skills/' + filename)};`;
        }
      },
    },
    dts({
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 0,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UIComponentLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.js'),
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /\.mp4$/,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name || '';
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

