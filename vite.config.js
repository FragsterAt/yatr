import { resolve, dirname } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://rubenr.dev/en/pwa-vite/
import { VitePWA } from "vite-plugin-pwa"
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**')
    }),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.js",
      includeAssets: ["/favicon.ico"],
      strategies: "injectManifest",
      manifest: {
        name: "Yet Another Twister Roulette",
        short_name: "Twister Roulette",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "icons/icon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "icons/icon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "icons/icon-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
