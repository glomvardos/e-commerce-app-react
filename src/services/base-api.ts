import axios, { AxiosResponse } from 'axios'
import { axiosInstance } from './index'
import { exception } from '../utils'

abstract class BaseApi {
  protected async get<T>(url: string): Promise<T | null> {
    try {
      const response = await axiosInstance.get(url)
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return response.data as T
    } catch (error) {
      if (axios.isAxiosError(error)) {
        exception(error)
      }
    }
    return null
  }

  protected async post(
    url: string,
    data: unknown
  ): Promise<AxiosResponse | null> {
    try {
      return await axiosInstance.post(url, data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        exception(error)
      }
    }
    return null
  }

  protected async delete(url: string): Promise<AxiosResponse | null> {
    try {
      return await axiosInstance.delete(url)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        exception(error)
      }
    }
    return null
  }
}

export default BaseApi
