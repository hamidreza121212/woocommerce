// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icons'
    ],
    css: [
        '~/assets/css/style.css',
        '~/assets/vendors/awesome/css/fontawesome-all.min.css'
      ]
});

