import { presetAttributify, presetIcons, presetUno } from 'unocss'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components(),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    UnoCSS({
      shortcuts: {
        'border-base': 'border-gray/20 dark:border-gray/15',
        'bg-base': 'bg-white dark:bg-truegray-700',
        'bg-canvas': 'bg-gray:15 dark:bg-truegray-800',
        'icon-btn': 'op30 hover:op100 m--1px select-none',
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
  ],
})
