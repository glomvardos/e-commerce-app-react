import { AxiosError } from 'axios'
import { ServerError } from '../interfaces'
import { HttpStatus } from '../enums'

export default function exception(error: AxiosError<ServerError>) {
  if (
    error &&
    (error.response?.status === HttpStatus.UNAUTHORIZED ||
      error.response?.status === HttpStatus.FORBIDDEN ||
      error.response?.status === HttpStatus.BAD_REQUEST ||
      error.response?.status === HttpStatus.NOT_FOUND)
  ) {
    const errorMessage = Object.keys(error.response.data).map(
      (key) => `${key}: ${error.response?.data[key]}`
    )[0]

    throw new Error(errorMessage)
  }
  throw new Error('Something went wrong!')
}
