import useSWRMutation from 'swr/mutation'

interface IParams {
  mutateKey: string
  mutateFn: (key: string, options: Readonly<{ arg: any }>) => any
}
const useMutation = ({ mutateKey, mutateFn }: IParams) => {
  const { data, error, isMutating, trigger } = useSWRMutation(
    mutateKey,
    mutateFn
  )

  return {
    data,
    error,
    isMutating,
    trigger
  }
}
export default useMutation
