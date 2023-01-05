import styled, { css } from 'styled-components'

interface StyledProps {
  isOpen: boolean
}

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  color: var(--secondary-text);
  width: 100%;
  padding: 1.25rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  z-index: 10;

  ${({ isOpen }: StyledProps) =>
    isOpen
      ? css`
          max-width: 100px;
          @media (min-width: 1600px) {
            max-width: 350px;
            border-radius: 0 1.25rem 1.25rem 0;
          }
        `
      : css`
          max-width: 100px;
          border-radius: 0;
        `};
`

export const Nav = styled.nav``

export const NavActionBtn = styled.button`
  all: unset;
  height: 45px;
  width: 45px;
  display: none;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--secondary);
  margin: auto auto 0 auto;
  border-radius: 50%;
  color: var(--secondary);
  cursor: pointer;
  transition: var(--transition);

  transform: ${({ isOpen }: StyledProps) =>
    isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};

  &:hover {
    border: 1px solid var(--border);
    color: var(--border);
  }

  @media (min-width: 1600px) {
    display: flex;
  }
`
