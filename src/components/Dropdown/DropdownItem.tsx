import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

interface IProps {
  icon?: JSX.Element
  text: string
  onClickHandler: () => void
}
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
export function DropdownItem({ icon, text, onClickHandler }: IProps) {
  const { t } = useTranslation()
  return (
    <StyledDropdownItem type="button" onClick={onClickHandler}>
      {icon}
      {t(text)}
    </StyledDropdownItem>
  )
}

export default DropdownItem
