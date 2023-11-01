import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const defaultConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
};

const prodConfig = {
  base: '/oig.wax.io/'
};

export default defineConfig(({ mode }) => {
  return {
    ...defaultConfig,
    ...(mode === 'production' && prodConfig)
  };
});
