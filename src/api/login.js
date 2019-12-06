import request from '@/util/request'
import api_config from '@/config/api_config'
import { encrypt } from '@/util'
export function loginByUsername(param){
  const data=encrypt(JSON.stringify(param))
  let test=api_config.login.enter
  return request({
    url: api_config.login.enter,
    method: 'post',
    headers: { 'Content-Type': 'application/json'},
    data
  })
}