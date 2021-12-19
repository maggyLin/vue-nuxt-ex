export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myapp1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy:true,
  },
  proxy:{
    '/ajax':{
      target:"http://m.maoyan.com",
      changeOrigin:true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  
  //如果 /pages 資料夾中沒有index.vue,可以使用middleware或是extendRoutes,重新指向進入網頁
  router:{
    middleware:'redirect',
    extendRoutes(routes){
      routes.push({
        path:"/",
        redirect:'/film/nowplaying'
      })
    }
  }
}
