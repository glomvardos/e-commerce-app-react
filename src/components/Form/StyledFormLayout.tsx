import styled from 'styled-components'

interface StyledProps {
  gridCols?: string
}
export const StyledFormLayout = styled.div`
  box-shadow: var(--box-shadow);
  padding: 2.5rem;
  margin-top: 2rem;
  border-radius: var(--border-radius);
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr ;

  @media(min-width: 760px) {
    grid-template-columns: ${({ gridCols }: StyledProps) => gridCols || 'repeat(2, 1fr)'} ;
  }
`
