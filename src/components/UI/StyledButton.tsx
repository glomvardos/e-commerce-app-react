import styled from 'styled-components'

interface StyledProps {
  color?: 'primary' | 'secondary'
}
export const StyledButton = styled.button`
  all: unset;
  height: 3.1rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${({ color }: StyledProps) => (color === 'primary' ? 'var(--primary)' : 'var(--secondary)')};
  border-radius: var(--border-radius);
  color: ${({ color }: StyledProps) => (color === 'primary' ? 'var(--light)' : 'var(--primary)')};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`
