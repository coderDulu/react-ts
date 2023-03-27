import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), viteCompression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      'antd/dist/reset.css': path.join(__dirname, 'node_modules/antd/dist/reset.css'),  // <-- add this
      antd: path.join(__dirname, 'node_modules/antd/dist/antd.js'),
      '@ant-design/icons': path.join(__dirname, 'node_modules/@ant-design/icons/dist/index.umd.js'),
    }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      cache: true,
      treeshake: true,
    }
  }
})
