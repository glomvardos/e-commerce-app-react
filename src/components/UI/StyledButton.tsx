import styled from 'styled-components'

export const StyledButton = styled.button`
  all: unset;
  height: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: var(--secondary);
  border-radius: 0.5rem;
  color: var(--primary-text);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`
