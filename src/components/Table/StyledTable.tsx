import styled from 'styled-components'

export const StyledTableContainer = styled.div`
  padding: 2.5rem;
  box-shadow: var(--box-shadow);
  margin-top: 1.25rem;
  border-radius: var(--border-radius);
  width: 100%;
`

export const StyledTableOverflowController = styled.div`
  overflow-x: auto;
`

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;
  min-width: 1100px;
`

export const StyledTh = styled.th`
  color: var(--primary);
  text-align: left;
  padding-bottom: 0.5rem;

  &:first-child {
    padding-left: 1rem;
  }

  &:last-child {
    padding-right: 1rem;
  }
`
export const StyledTd = styled.td`
  padding: 1.5rem 0;
  border-top: 1px solid var(--secondary);
  border-bottom: 1px solid var(--secondary);

  &:first-child {
    padding-left: 1rem;
    border-left: 1px solid var(--secondary);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  &:last-child {
    padding-right: 1rem;
    border-right: 1px solid var(--secondary);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
`
