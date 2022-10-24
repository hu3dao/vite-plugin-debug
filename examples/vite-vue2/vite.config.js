import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [createVuePlugin(), debug()]
})