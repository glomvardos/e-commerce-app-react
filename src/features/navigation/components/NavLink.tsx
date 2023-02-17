import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
  icon: JSX.Element
  path: string
  text: string
}

interface StyledProps {
  $isActivePath: boolean
}

const StyledNavLink = styled(Link)`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${({ $isActivePath }: StyledProps) => ($isActivePath ? 'var(--active-nav-link)' : 'transparent')};
  border-radius: var(--border-radius);

  .nav-link-text {
    display: none;
  }

  @media (min-width: 1600px) {
    .nav-link-text {
      display: inline;
    }
  }
`

export function NavLink({ path, text, icon }: IProps) {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const isActivePath = pathname === path
  return (
    <StyledNavLink $isActivePath={isActivePath} to={path}>
      {icon}
      <span className="nav-link-text">{t(text)}</span>
    </StyledNavLink>

  )
}
