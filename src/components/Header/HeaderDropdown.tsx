import { FiLogOut } from 'react-icons/fi'
import styled from 'styled-components'
import { StyledCircleAvatar } from '../UI'
import { Dropdown, DropdownItem } from '../Dropdown'
import { useLogout, useToggleMenu } from '../../hooks'

const HeaderDropdown = () => {
  const { ref, isOpen, toggleMenuHandler } = useToggleMenu()
  const { onLogout } = useLogout()

  return (
    <StyledHeaderDropdown ref={ref}>
      <StyledCircleAvatar onClick={toggleMenuHandler} />
      <Dropdown isOpen={isOpen}>
        <DropdownItem
          icon={<FiLogOut size={25} />}
          text="logout"
          onClickHandler={onLogout}
        />
      </Dropdown>
    </StyledHeaderDropdown>
  )
}

export default HeaderDropdown

const StyledHeaderDropdown = styled.div`
  position: relative;
`
