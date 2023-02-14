import styled, { css } from 'styled-components'

interface StyledProps {
  alignment?: 'center'
  background?: 'white' | 'gray'
  layout?: 'dashboard' | 'form'
}
export const StyledSection = styled.section`
  background-color: ${({ background }: StyledProps) =>
    background === 'gray' ? 'var(--border)' : 'var(--light)'};

  height: ${({ layout }: StyledProps) =>
    layout === 'form' ? '100%' : 'calc(100% - 65px)'};

  padding: 1.25rem;
  overflow-y: auto;

  ${({ alignment }: StyledProps) =>
    alignment === 'center' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`
