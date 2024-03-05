
import mockServe from "@/apis/mockServe";
import axios from "axios";
import axiosLocalhost from "@/apis/axiosLocalhost";
import {axiosConfig} from "@/interface/api";

export const reqMockSites =()=>{
    return mockServe.get('/sites')
}


export const reqMockSearchEngine =()=>{
    return mockServe.get('/searchEngine')
}


export const reqMockVirtualData = ()=>{
    return mockServe.get('/virtualData')
}

export const reqTest=(route:string,params?:string)=>{
    if (params){
        return axios.get(`http://localhost:4000${route}/${params}`)
    }else {
        return axios.get(`http://localhost:4000${route}`)
    }

}
export const reqSites = (params?:string)=>{
    if (params){
        return axios.get(`http://localhost:4000/sites/${params}`)
    }else {
        return axios.get(`http://localhost:4000/sites`)
    }
}
export const reqSearchEngines = (params?:string)=>{
    if (params){
        return axios.get(`http://localhost:4000/searchEngines/${params}`)
    }else {
        return axios.get(`http://localhost:4000/searchEngines`)
    }
}


export const reqApiData = ({url,data={a:2},method,id='',params=''}:axiosConfig) => {
    return axiosLocalhost({
        url: `${url}/${id}`,
        method: method,
        data,
        params,
    })
}
