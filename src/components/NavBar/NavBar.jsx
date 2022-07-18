import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './NavBar.css'

class NavBar extends React.Component{
    render () {
        return (
          <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/projects">Projects</a>
          </Menu>
        );
      }
}