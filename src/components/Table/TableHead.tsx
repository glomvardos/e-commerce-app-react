import { HeaderGroup } from 'react-table'
import { StyledTh } from './StyledTable'

interface Props {
  headerGroups: HeaderGroup<object>[]
}
export function TableHead({ headerGroups }: Props) {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <StyledTh {...column.getHeaderProps()}>
              {column.render('Header')}
            </StyledTh>
          ))}
        </tr>
      ))}
    </thead>
  )
}
