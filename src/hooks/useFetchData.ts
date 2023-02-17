import useSWR, { BareFetcher, KeyedMutator } from 'swr'
import { tokenMethods } from '../features/authentication'

interface IData<T> {
  data: T
  error: any
  mutate: KeyedMutator<T>
  isValidating: boolean
  isLoading: boolean
}
interface IParams {
  queryKey: string
  queryFn: any
}

export const useFetchData = <T extends unknown>({ queryKey, queryFn }: IParams) => {
  const token = tokenMethods.getAccessToken()
  const {
    data, error, mutate, isValidating, isLoading
  } = useSWR<T>(

    token ? queryKey : null,
    queryFn as BareFetcher<T>
  )

  return {
    data,
    error,
    mutate,
    isValidating,
    isLoading
  } as IData<T>
}
