import React from 'react'
import { Nav,NavItem,NavLink} from 'reactstrap'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav1'>
        <Nav
  fill
  pills
>
  <NavItem>
    <NavLink
      active
      href="#"
      style={{color : "red" , background : "black"}}
    >
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink  href="#" style={{color : "red"}}>
      Much Longer Nav Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink  href="#" style={{color : "red"}}>
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      
      href="#"
      style={{color : "red"}}
    >
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
    </div>
  )
}

export default Navbar