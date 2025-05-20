export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "static",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/tailwindcss"],
  experimental: {
    payloadExtraction: false,
  },
  tailwindcss: {
    viewer: true,
  },
});
