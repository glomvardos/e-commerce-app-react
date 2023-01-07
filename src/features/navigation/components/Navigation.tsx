import { FiList, FiUsers } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi'
import { NavLink, SideBar } from '../index'

const Navigation = () => {
  return (
    <SideBar>
      <NavLink icon={<FiUsers size={26} />} path="/" text="Users" />
      <NavLink icon={<FiList size={26} />} path="/products" text="Products" />
      <NavLink
        icon={<BiCategoryAlt size={26} />}
        path="/categories"
        text="Categories"
      />
    </SideBar>
  )
}

export default Navigation
