import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './NavBar.css'
import {Link, withRouter} from 'react-router-dom'

class NavBar extends React.Component{
    render () {
        return (
          <Menu>
            <Link to="/" className="menu-item active-item">
                Home
            </Link>
            <Link to="/about" className="menu-item">
                About
            </Link>
            <Link to="/projects" className="menu-item">
                Projects
            </Link>
            <Link to="/skills" className="menu-item">
                Skills
            </Link>
            <Link to="/contact" className="menu-item">
                Contact
            </Link>
          </Menu>
        );
      }
}

export default withRouter(NavBar);