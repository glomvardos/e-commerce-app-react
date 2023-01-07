import styled from 'styled-components'

interface StyledProps {
  color?: string
}
export const StyledCard = styled.div`
  background-color: ${({ color }: StyledProps) => color ?? 'var(--primary)'};
  width: 100%;
  max-width: 400px;
  padding: 1.8rem;
  border-radius: var(--border-radius);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`
