import { useGlobalFilter, usePagination, useTable } from 'react-table'
import {
  StyledTable,
  StyledTableContainer,
  StyledTableOverflowController
} from './StyledTable'
import { TableBody, TableHead, TablePagination } from './index'

interface Props {
  data: any
  columns: any
}
export function ReactTable({ data, columns }: Props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    prepareRow,
    page,
    nextPage,
    rows,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 5
      }
    },
    useGlobalFilter,
    usePagination
  )
  const { pageIndex, pageSize } = state

  return (
    <StyledTableContainer>
      <StyledTableOverflowController>
        <StyledTable {...getTableProps()}>
          <TableHead headerGroups={headerGroups} />
          <TableBody
            getTableBodyProps={getTableBodyProps}
            page={page}
            prepareRow={prepareRow}
          />
        </StyledTable>
        <TablePagination
          pageSize={pageSize}
          pageIndex={pageIndex}
          pageLength={page.length}
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
        />
      </StyledTableOverflowController>
    </StyledTableContainer>
  )
}
