import styled, { css } from 'styled-components'

interface StyledProps {
  isOpen: boolean
}

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  width: 100%;
  padding: 1.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: all 0.2s ease-in-out;

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
  border: 1px solid var(--bg-color);
  margin: auto auto 0 auto;
  border-radius: 50%;
  color: var(--bg-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  transform: ${({ isOpen }: StyledProps) =>
    isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};

  &:hover {
    border: 1px solid var(--primary-text);
    color: var(--primary-text);
  }

  @media (min-width: 1600px) {
    display: flex;
  }
`
