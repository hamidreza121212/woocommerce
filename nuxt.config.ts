// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    fontMetrics: {
        fonts: [
            'Inter', 
            {
                family: 'Some Custom Font', src: '~/ass',
            }
        ]
    }

    // fontMetrics: {   fonts: ['Inter', { family: 'Some Custom Font', src: '/path/to/custom/font.woff2' }],  // },
});

