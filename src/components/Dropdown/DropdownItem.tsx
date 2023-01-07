import styled from 'styled-components'

interface IProps {
  icon?: JSX.Element
  text: string
  onClickHandler: () => void
}
const DropdownItem = ({ icon, text, onClickHandler }: IProps) => {
  return (
    <StyledDropdownItem type="button" onClick={onClickHandler}>
      {icon}
      {text}
    </StyledDropdownItem>
  )
}

export default DropdownItem

export const StyledDropdownItem = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  padding: 8px 10px;
  font-size: 18px;
  color: var(--primary);
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:hover {
    background-color: var(--secondary);
  }
`
