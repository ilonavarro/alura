import { useObterToken } from './../hooks/index'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
})

http.interceptors.request.use(
  function (config) {
    const token = useObterToken()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    console.log('Erro no interceptor do axios')
    return Promise.reject(error)
  }
)

export default http
