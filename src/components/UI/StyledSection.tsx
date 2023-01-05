import styled, { css } from 'styled-components'

interface StyledProps {
  alignment?: 'center'
}
export const StyledSection = styled.section`
  background-color: var(--border);
  height: 100%;
  padding: 1.25rem;

  ${({ alignment }: StyledProps) =>
    alignment === 'center' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`
