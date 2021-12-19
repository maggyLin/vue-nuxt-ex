### 安裝 nuxt
$ npm install -g create-nuxt-app

### 建立專案
$ create-nuxt-app [project name]

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## 本專案要安裝
### axois
1. 安裝
```
npm install @nuxtjs/axios
```
2.nuxt.config.js 要註冊
```
modules: [
    '@nuxtjs/axios'
  ],
```

### proxy : /film/comingsoon 要使用,解決前端CORS跨網域問題
1. 安裝
```
npm i @nuxtjs/proxy ‐D
```
2. nuxt.config.js 要註冊
```
modules: [
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy:true
  },
  proxy:{
    '/ajax':{
      target:"http://m.maoyan.com",
      changeOrigin:true
    }
  },
```






