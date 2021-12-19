<template>
  <div v-if="filminfo">
    detail id : {{$route.params.myid}}
    <br>
    <img :src="filminfo.poster"/>
    <br>
    <el-button type="primary"><nuxt-link to="/film" >back film</nuxt-link></el-button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout:"detailtemplate",  //指定 /layouts/ 資料夾下,要使用的樣式檔案

  data(){
    return {
      filminfo:null
    }
  },

  asyncData(data) {
    console.log(data.params) //獲取參數

    return axios({
      url:`https://m.maizuo.com/gateway?filmId=${data.params.myid}&k=7153258`,
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res=>{
      return {
        filminfo:res.data.data.film
      }
    })
  },
}
</script>
<style scoped>
img{
  width: 200px;
}
</style>
