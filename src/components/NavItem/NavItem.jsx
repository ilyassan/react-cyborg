import './NavItem.css'
import profile_image from '../../assets/images/profile-header.jpg'
import { useLocation, Link } from 'react-router-dom'

const NavItem = (props) => {

  let location = useLocation()
  const isActive = location.pathname === props.to
  let img = ""
  if(props.children === "Profile"){
    img = <img src={profile_image} alt='profile'/>
  }

  return (
    <li className={`nav-item ${props.children === "Profile"?"profile":""}`}>
      <Link to={props.to} className={`nav-link ${isActive ?"active":""}`}>{props.children}</Link>
      {img}
    </li>
  )
}

const NavItemDropDown = (props) => {
  return (
    <li className='nav-item drop-down position-relative'>{props.children}</li>
  )
}

export default NavItem
export {NavItemDropDown}