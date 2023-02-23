import { toast } from 'react-toastify'

export const exceptionToastMessage = (error: any) => toast.error(error.message)
