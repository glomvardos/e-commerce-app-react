import useSWRMutation from 'swr/mutation'

interface IParams<T> {
  mutateKey: string
  mutateFn: (key: string, options: Readonly<{ arg: T }>) => any
}
export const useMutation = <T extends unknown>({
  mutateKey,
  mutateFn
}: IParams<T>) => {
  const {
    data, error, isMutating, trigger
  } = useSWRMutation(
    mutateKey,
    mutateFn
    // {
    //   onError: (error) => {
    //     toast.error<string>(error.message)
    //   }
    // }
  )

  return {
    data,
    error,
    isMutating,
    trigger
  }
}
