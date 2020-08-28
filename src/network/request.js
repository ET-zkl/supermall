import axios from 'axios'

export function request(config){
    const instance = axios.create({
        // baseURL:'http://123.207.32.32:8000',
        baseURL:'http://152.136.185.210:8000/api/z8',
        timeout:5000,
    })

    // 2、相应拦截
    // 2.1请求拦截
    instance.interceptors.request.use(config=>{
        // 1、比如config中的一些信息不符合服务器要求
        // 2、比如每次发送网络请求时，都希望在界面显示一个请求的图标
        // 3、某些网络请求（比如token），需要携带一些特殊信息
        return config;//拦截完还得返回，继续向下传

    },err=>{
        console.log(err);
    })
    // 2.2相应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    },err=>{
        console.log(err);
    })

    //3、 发送真正的请求
    return instance(config);
}