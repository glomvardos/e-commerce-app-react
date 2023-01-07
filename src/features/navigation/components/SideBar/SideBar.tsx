import { useState, useEffect } from 'react'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi'
import { StyledLogo } from '../../index'
import { ChildrenTypes } from '../../../../interfaces'
import * as Styled from './SideBar.styled'

const SideBar = ({ children }: ChildrenTypes) => {
  const isSideBarOpen = localStorage.getItem('sidebar')

  const [isOpen, setIsOpen] = useState<boolean>(
    JSON.parse(isSideBarOpen!) ?? true
  )
  const toggleSideBar = () => setIsOpen((prevState) => !prevState)

  useEffect(() => {
    localStorage.setItem('sidebar', JSON.stringify(isOpen))
  }, [isOpen])

  return (
    <Styled.SideBar isOpen={isOpen}>
      <StyledLogo>LOGO</StyledLogo>
      <Styled.Nav isOpen={isOpen}>{children}</Styled.Nav>
      <Styled.NavActionBtn onClick={toggleSideBar} isOpen={isOpen}>
        <HiOutlineChevronDoubleLeft size={20} className="nav-btn-icon" />
      </Styled.NavActionBtn>
    </Styled.SideBar>
  )
}

export default SideBar
