const pkg = require('./package')

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: `/${pkg.name}/`
        }
      }
    : {}

module.exports = {
  mode: 'spa',
  ...routerBase,
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  loading: { color: '#FFFFFF' },
  css: ['~/css/main.css'],
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  axios: {
    baseURL: 'https://api.github.com'
  },
  build: {
    publicPath: '/nuxt/',
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vue-awesome', '~/plugins/axios']
}
