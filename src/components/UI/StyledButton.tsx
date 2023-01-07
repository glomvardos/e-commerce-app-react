import styled from 'styled-components'

export const StyledButton = styled.button`
  all: unset;
  height: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: var(--secondary);
  border-radius: var(--border-radius);
  color: var(--primary-text);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`
