import styled from 'styled-components'

interface StyledProps {
  error?: boolean
}
export const StyledInput = styled.input`
  all: unset;
  font-size: 1rem;
  background-color: var(--dark);
  color: var(--secondary-text);
  border-radius: var(--border-radius);
  padding: 0.8rem;
  border: ${({ error }: StyledProps) =>
    error ? '2px solid var(--error)' : '2px solid var(--primary)'};
  transition: border 0.2s ease-in-out;

  &::placeholder {
    color: #777474;
  }

  &:focus,
  &:hover {
    outline: none;
    border: ${({ error }: StyledProps) =>
      error ? '2px solid var(--error)' : '2px solid var(--secondary)'};
  }
`
