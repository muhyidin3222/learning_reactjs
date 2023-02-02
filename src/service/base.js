import axios from 'axios'

let axiosBase = axios.create({
    baseURL: "http://localhost:3001/"
})

axiosBase.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
    return config
})

export default axiosBase