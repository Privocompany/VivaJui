import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lp_jui: resolve(__dirname, 'assets/lp_jui.html'),
      }
    }
  }
})
