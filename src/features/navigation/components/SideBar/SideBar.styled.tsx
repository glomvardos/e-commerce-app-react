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

  ${({ isOpen }: StyledProps) => (isOpen
    ? css`
          max-width: 105px;
          @media (min-width: 1600px) {
            max-width: 330px;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
          }
        `
    : css`
          max-width: 105px;
          border-radius: 0;
        `)};
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  gap: 20px;
  transition: var(--transition);

  ${({ isOpen }: StyledProps) => (isOpen
    ? css`
          & .nav-link-text {
            transition: var(--transition);
            font-size: 25px;
          }
        `
    : css`
          & .nav-link-text {
            transform: scale(0);
            position: absolute;
          }
        `)};
`

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

  transform: ${({ isOpen }: StyledProps) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  
  &:hover {
    border: 1px solid var(--border);
    color: var(--border);
  }

  @media (min-width: 1600px) {
    display: flex;
  }
`
