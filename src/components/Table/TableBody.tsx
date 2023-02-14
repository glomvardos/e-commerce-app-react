import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table'
import { useNavigate } from 'react-router-dom'
import { StyledTd } from './StyledTable'

interface IProps {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<object> | undefined
  ) => TableBodyProps
  page: Row<object>[]
  prepareRow: (row: Row<object>) => void
}
const TableBody = ({ getTableBodyProps, page, prepareRow }: IProps) => {
  const navigate = useNavigate()
  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell, index) => (
              <StyledTd
                // onClick={() => {
                //     navigate(
                //       tableRowNavigation({
                //         key: table,
                //         rowData: cell.row.original
                //       })
                //     )
                // }}
                {...cell.getCellProps()}
                className="px-2 2xl:px-0 h-[60px]"
              >
                {cell.render('Cell')}
              </StyledTd>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
