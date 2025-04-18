// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiHost: 'api.demo.com',
      apiPort: 3001
    }
  },
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: [
    '@element-plus/nuxt',
  ],
  plugins: [
    '~/plugins/element-plus.ts',
  ],
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css'
  ],
})
