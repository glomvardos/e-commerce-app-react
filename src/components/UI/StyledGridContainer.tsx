import styled from 'styled-components'

interface StyledProps {
  repeat?: string
}
export const StyledGridContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: ${({ repeat }: StyledProps) =>
    repeat ? `repeat(${repeat}, 1fr)` : 'repeat(1, 1fr)'};
`
