import {loginByUsername} from '@/api/login'
import {getToken,setToken,setUserInfo} from '@/util/auth'

const user={
  namespaced: true,
  state:{
    token:getToken(),
    userInfo:''
  },
  mutations:{
    SET_TOKEN:(state,token)=>{
      state.token=token
    },
    SET_USERINFO:(state,userInfo)=>{
      state.userInfo=userInfo
    }
  },
  actions:{
    LoginByUsername({commit},userInfo){
      const username=userInfo.username.trim()
      return new Promise((resolve,reject)=>{
        loginByUsername(userInfo)
        .then(response=>{
          const result=response.data.data
          const tokenInfo=result.token
          // const userInfo=result.userInfo.cmsUser
          commit('SET_TOKEN',tokenInfo)
          setToken(tokenInfo)
          resolve()
          // commit(SET_USERINFO,userInfo)
          // setUserInfo(userInfo)
        })
        .catch(error=>{
          reject(error)
        })
      })

    }
  }

}
export default user