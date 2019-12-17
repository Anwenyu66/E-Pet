import axios from "axios";

const server = axios.create({
    timeout: 5000,//等待时间
    // baseUrl:"",
    withCredentials: true
})

//请求的拦截

server.interceptors.request.use((config) => {
    if (config.method == "get") {
        config.params = { ...config.data };
    }
    return config;
    /* 
    根据情况设计
        1.application/json
        2.application/x-www-form-urlencoded
    */
    // config.headers["content-type"] = "application/json"
},(err)=>{
    return Promise.reject(err);
})

// 响应拦截
server.interceptors.response.use((res) => {
    if (res.status == 200) {
        return res.data;
    }
}, (err) => {
    return Promise.reject(err)
})


export default server;