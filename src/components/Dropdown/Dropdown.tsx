import styled, { css } from 'styled-components'
import { ChildrenTypes } from '../../interfaces'

interface IProps extends ChildrenTypes {
  isOpen: boolean
}
const Dropdown = ({ isOpen, children }: IProps) => {
  return <StyledDropdown isOpen={isOpen}>{children}</StyledDropdown>
}

export default Dropdown

interface StyledProps {
  isOpen: boolean
}

export const StyledDropdown = styled.div`
  position: absolute;
  z-index: 50;
  width: max-content;
  box-shadow: var(--box-shadow);
  background-color: var(--border);
  border-radius: var(--border-radius);
  padding: 15px;
  margin: 10px;
  right: 0;
  transform-origin: top right;
  transition: var(--transition);

  ${({ isOpen }: StyledProps) =>
    isOpen
      ? css`
          transform: scale(1);
          opacity: 1;
        `
      : css`
          transform: scale(0);
          opacity: 0;
        `}
`
