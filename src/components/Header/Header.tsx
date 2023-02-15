import styled from 'styled-components'
import { StyledText } from '../UI'
import { HeaderDropdown } from './index'
import { useTranslation } from 'react-i18next'
const Header = () => {
  const { t } = useTranslation()
  return (
    <StyledHeader>
      <StyledText fontSize={18} fontWeight="500">
        {t('appAdministration')}
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
  padding: 0.625rem 1.25rem;

  @media (min-width: 1024px) {
    padding: 0.625rem 3rem 10px calc(3rem + 0.9375em);
  }

  @media (min-width: 1600px) {
    position: relative;
    width: calc(100% + 0.9375em);
    left: -0.9375em;
  }
`
