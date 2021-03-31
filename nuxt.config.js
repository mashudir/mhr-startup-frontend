export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MHR Startup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' 
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/guide/setup#installation
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:'http://localhost:9000',
  },
  auth: {
  strategies: {
    local: {
      token: {
        property: 'data.token',
        // required: true,
        // type: 'Bearer'
      },
      user: {
        property: 'data',
        // autoFetch: true
      },
      endpoints: {
        login: { url: '/api/v1/sessions', method: 'post' },
        logout: false,
        user: { url: '/api/v1/users/fetch', method: 'get' }
      }
    }
  }
},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // fix loading stuck in homepage
  //https://stackoverflow.com/questions/66325582/nuxt-js-cannot-find-module-babel-preset-env-lib-utils
  build: {
    babel: {
    presets({isServer}) {
      const targets = isServer ? { node: 'current' } : { ie: 11 }
      return [
        [ require.resolve("@babel/preset-env"), { targets }  ]
      ]
    },
    plugins: [
      "@babel/syntax-dynamic-import",
      "@babel/transform-runtime",
      "@babel/transform-async-to-generator"
    ]
  }
  }
}
