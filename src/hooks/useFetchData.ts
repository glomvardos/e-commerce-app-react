import useSWR, { BareFetcher } from 'swr'
import { PublicConfiguration } from 'swr/_internal'
import { tokenMethods } from '../utils'

interface IParams<T> {
  queryKey: string
  queryFn: Partial<PublicConfiguration<T, any, BareFetcher<T>>>
}

const useFetchData = <T extends unknown>({ queryKey, queryFn }: IParams<T>) => {
  const token = tokenMethods.getAccessToken()
  const { data, error, mutate, isValidating, isLoading } = useSWR<T>(
    !!token ? queryKey : null,
    queryFn
  )

  return {
    data,
    error,
    mutate,
    isValidating,
    isLoading
  }
}

export default useFetchData
