import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your repo is named "suchi-portfolio", keep this base.
// If you later rename to username.github.io, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
