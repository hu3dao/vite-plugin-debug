import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import debug from 'vite-plugin-debug'

export default defineConfig({
  plugins: [
    vue(),
    debug()
  ]
})
