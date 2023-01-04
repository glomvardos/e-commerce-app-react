import axios from 'axios'
import { tokenMethods } from '../features/authentication'

const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL_DEV
})

axiosInstance.interceptors.request.use(
  (request) => {
    if (!request.url?.includes('login')) {
      const token = tokenMethods.getAccessToken()
      if (token && request.headers)
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
