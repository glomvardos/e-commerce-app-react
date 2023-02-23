import { AxiosError } from 'axios';
import {
  QueryFunction, QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery
} from 'react-query'
// import { ServerError } from '../interfaces/api';
import { tokenMethods } from '../features/authentication'

interface Props<T> {
  queryKey: any;
  queryFn: QueryFunction<any, string>;
  disabled?: boolean;
  refetchOnWindowFocus?: boolean;
  refetchOnMount?: boolean;
  cacheTime?: number;
  refetchInterval?: number | false;
  refetchIntervalInBackground?: boolean;
  initialData?: T
}

interface DataTypes<T> {
  isLoading: boolean;
  isFetching: boolean;
  data: T;
  isError: boolean;
  refetch: <TPageData>(options?:
  ((RefetchOptions & RefetchQueryFilters<TPageData>) | undefined))
  => Promise<QueryObserverResult<any, unknown>>
  // serverError: AxiosError<ServerError>;
}

export const useGetData = <T extends unknown>({
  queryKey,
  queryFn,
  disabled = false,
  refetchOnWindowFocus = true,
  refetchOnMount = true,
  refetchInterval = false,
  refetchIntervalInBackground = false,
  cacheTime = 300000,
  initialData
}: Props<T>) => {
  const {
    isLoading,
    isFetching,
    data,
    isError,
    error,
    refetch
  } = useQuery(queryKey, queryFn, {
    enabled: disabled ? false : !!tokenMethods.getAccessToken(), // only fetch if token is present,
    refetchOnWindowFocus,
    refetchOnMount,
    cacheTime,
    refetchInterval,
    refetchIntervalInBackground,
    initialData
  });

  // const serverError = error as AxiosError<ServerError>;

  return {
    isLoading,
    isFetching,
    data,
    isError,
    // serverError,
    refetch
  } as DataTypes<T>
};
