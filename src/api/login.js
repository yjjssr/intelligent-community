import request from '@/util/request'
import api_config from '@/config/api_config'
export function loginByUsername(account,password){
  const data = {
    account,
    password,
    showAppInfo: 'true',
    syscode: 'data-manager',
  }
  return request({
    url: api_config.login,
    method: 'post',
    data,
  })
}