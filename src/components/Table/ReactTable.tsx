import { StyledTable } from './StyledTable'
import { useGlobalFilter, usePagination, useTable } from 'react-table'
import { TableBody, TableHead } from './index'

interface IProps {
  data: any
  columns: any
}
const ReactTable = ({ data, columns }: IProps) => {
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
        pageSize: 8
      }
    },
    useGlobalFilter,
    usePagination
  )
  const { pageIndex, pageSize } = state

  return (
    <StyledTable {...getTableProps()}>
      <TableHead headerGroups={headerGroups} />
      <TableBody
        getTableBodyProps={getTableBodyProps}
        page={page}
        prepareRow={prepareRow}
      />
    </StyledTable>
  )
}

export default ReactTable
