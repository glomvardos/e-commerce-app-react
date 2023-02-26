import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

export const exceptionToastMessage = (error: AxiosError) => toast.error(error.message)
