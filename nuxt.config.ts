// export default defineNuxtConfig({
//   extends: 'content-wind',
//   routeRules: {
//     '/blog': { prerender: true }
//   },
//   compatibilityDate: '2024-08-24',
//   modules: ['@nuxt/image'],
//   // content: {
//   //   highlight: {
//   //     // Theme used in all color schemes.
//   //     // theme: 'github-light'
//   //     // OR
//   //     theme: {
//   //       // Default theme (same as single string)
//   //       default: 'github-light',
//   //       // Theme used if `html.dark`
//   //       dark: 'monokai',
//   //     }
//   //   }
//   // }
// })

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: 'content-wind',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content', 
    '@nuxt/image'
  ],
  routeRules: {
    '/': { prerender: true },
  },
  compatibilityDate: '2024-08-24',
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light'
    }
  }
});
