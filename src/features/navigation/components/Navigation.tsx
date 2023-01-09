import { FiList, FiUsers } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi'
import { NavLink, SideBar } from '../index'

const Navigation = () => {
  return (
    <SideBar>
      <NavLink icon={<FiUsers size={26} />} path="/" text="users" />
      <NavLink icon={<FiList size={26} />} path="/products" text="products" />
      <NavLink
        icon={<BiCategoryAlt size={26} />}
        path="/categories"
        text="categories"
      />
    </SideBar>
  )
}

export default Navigation
