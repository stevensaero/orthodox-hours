import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import editServerPlugin from './tools/vite-edit-plugin.mjs'

export default defineConfig({
  plugins: [react(), tailwindcss(), editServerPlugin()],
  base: '/orthodox-hours/',     // ← This line is very important
})