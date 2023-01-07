import styled from 'styled-components'
import { StyledText } from '../UI'
import { HeaderDropdown } from './index'

const Header = () => {
  return (
    <StyledHeader>
      <StyledText fontSize={18} fontWeight="500">
        E-commerce App Administration
      </StyledText>

      <HeaderDropdown />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: var(--secondary);
  box-shadow: var(--box-shadow);
  padding: 10px 35px;

  @media (min-width: 1600px) {
    position: relative;
    width: calc(100% + 15px);
    left: -15px;
  }
`
