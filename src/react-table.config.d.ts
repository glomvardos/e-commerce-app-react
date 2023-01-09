import {
  UsePaginationOptions,
  UsePaginationInstanceProps,
  UsePaginationState,
  UseGlobalFiltersState,
  UseRowSelectHooks,
  UseRowSelectInstanceProps,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  UseRowSelectState
} from 'react-table'

declare module 'react-table' {
  export interface TableOptions<D extends object = {}>
    extends UsePaginationOptions<D>,
      UseRowSelectOptions<D>,
      Record<string, any> {}

  export interface Hooks<D extends object = {}> extends UseRowSelectHooks<D> {}

  export interface TableInstance<D extends object = {}>
    extends UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UsePaginationState<D>,
      UseGlobalFiltersState<D>,
      UseRowSelectState<D> {}

  export interface Row<D extends object = {}> extends UseRowSelectRowProps<D> {}
}
