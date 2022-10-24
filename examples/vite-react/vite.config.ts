import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import debug from 'vite-plugin-debug';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), debug()]
})
