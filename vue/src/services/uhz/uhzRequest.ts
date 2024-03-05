import {useMemberStore} from '@/stores'
import type {uhzResData} from '@/types/uhz/uhzHttp'
import axios, {AxiosRequestConfig} from 'axios'
import {ElMessage} from "element-plus";

const uhzAxiosInstance = axios.create({
    baseURL: 'https://mapi.uhaozu.com/',
    timeout: 3000,
})

uhzAxiosInstance.interceptors.request.use(
    function (config) {
        const headers = {
            "Accept": "*/*",
            "tml": "{'terminal':3,'platform':10}",
            "from": "{'channel':'dtuldtykdapp','source':'h9avbqkr4p','cid':'ios','identifier':'25147967e1500fea13f11d0f4f0f68c1','packageName':'rrr.dtuldtykd.app'}",
            "Content-Type": "application/json",
        }
        config.headers = config.headers || {}
        Object.assign(config.headers, headers)

        const memberStore = useMemberStore();
        const authToken = memberStore.profile?.authToken
        if (authToken) {
            config.headers.authToken = authToken
        }
        return config
    },
    function (error) {
        return error
    }
)

uhzAxiosInstance.interceptors.response.use(
    function (resp) {
        return resp
    },
    function (error) {

    }
)

const uhzRequest = <T>(options:AxiosRequestConfig) => {
    return new Promise<uhzResData<T>>((resolve, reject) => {
       uhzAxiosInstance({
          ...options
      }).then((res) => {
        resolve(res.data as uhzResData<T>)
      }).catch(err=>{
          reject(err)
      })
    })
}


export {
    uhzRequest,
}
