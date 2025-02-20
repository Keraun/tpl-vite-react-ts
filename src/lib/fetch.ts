import axios, { AxiosInstance } from 'axios';

type Service<T, P extends any[]> = (...args: P) => Promise<T>;

// API的基础路径
const BASE_URL = 'https://api.example.com';

const http = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // 请求超时时间
});

// 请求拦截器
http.interceptors.request.use(config => {
    // 在发送请求之前做些什么，例如设置token等
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response.data; // 直接返回data部分，便于后续操作
}, error => {
    debugger
    // 对响应错误做点什么
    if (error.response && error.response.status === 401) {
        // 例如：处理未授权的错误，可能需要重新登录等操作
        console.error('Unauthorized, please login again.');
    }
    return Promise.reject(error);
});

// 定义响应数据类型接口 
interface ResponseData {}


export default http;

// export default (params: any): Promise<unknown> => {
//     return new Promise((resolve, reject) => {
//         http(params).then((data) => {
//             resolve(data);
//         }, error => {
//             reject(error)
//         });
//     })
// };
