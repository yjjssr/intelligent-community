import axios from 'axios'
import store from '@/store'

import {getToken, removeToken} from '@/util/auth'
const service = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 50000000, // request timeout

})
service.interceptors.request.use(config=>{
if(store.getters.token){
 config.headers['token']=getToken()
}
return config
      
},error=>{
  console.log(error) // for debug
  Promise.reject(error)
})
export default service


