import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    allowedHosts: ['8ca2-2401-4900-8899-9604-7c4c-7f78-fa67-325d.ngrok-free.app'],
    // Enable compression
    compress: true,
  },
  
  // SEO and Performance optimizations
  build: {
    // Enable source maps for better debugging
    sourcemap: false,
    
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          antd: ['antd'],
          utils: ['aos', 'swiper']
        }
      }
    },
    
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'antd', 'aos', 'swiper']
  }
})
