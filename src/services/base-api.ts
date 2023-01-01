import { axiosInstance } from './index'
import axios, { AxiosResponse } from 'axios'
import { exception } from '../utils'

abstract class BaseApi {
  protected async get<T>(url: string): Promise<T | undefined> {
    try {
      const response = await axiosInstance.get(url)
      return response.data as T
    } catch (error) {
      if (axios.isAxiosError(error)) {
        exception(error)
      }
    }
  }
  protected async post(
    url: string,
    data: unknown
  ): Promise<AxiosResponse | undefined> {
    try {
      return await axiosInstance.post(url, data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        exception(error)
      }
    }
  }
}

export default BaseApi
