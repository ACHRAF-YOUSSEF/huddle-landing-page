import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/huddle-landing-page-with-a-single-ntroductory-section-frontend-mentor/'
})
