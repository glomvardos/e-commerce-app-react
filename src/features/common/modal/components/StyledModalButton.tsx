import styled from 'styled-components'

interface StyledProps {
  background?: string
}
export const StyledModalButton = styled.button`
  all: unset;
  width: 100%;
  padding: 0.9rem 0;
  font-weight: 500;
  text-align: center;
  color: var(--light);
  cursor: pointer;
  border-radius: var(--border-radius);
  background-color: ${({ background }: StyledProps) => (background || 'var(--primary)')};
  transition: var(--transition);

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`
