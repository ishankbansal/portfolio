import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './NavBar.css'
import {Link} from 'react-router-dom'
import { useLocation, useNavigate, useParams } from "react-router-dom";
  
  function withRouter(Component) {                  // Yeh apun nee khud see find kiyaaa
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

class NavBar extends React.Component{
    render () {
        const{location} = this.props.router;
        // console.log(location);

        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const projectsClass = location.pathname === '/projects' ? 'active-item' : '';
        const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
        const contactClass = location.pathname === '/contact' ? 'active-item' : '';
        
        return (
          <Menu>
            <Link to="/" className={`menu-item ${homeClass}`}>
                Home
            </Link>
            <Link to="/about" className={`menu-item ${aboutClass}`}>
                About
            </Link>
            <Link to="/projects" className={`menu-item ${projectsClass}`}>
                Projects
            </Link>
            <Link to="/skills" className={`menu-item ${skillsClass}`}>
                Skills
            </Link>
            <Link to="/contact" className={`menu-item ${contactClass}`}>
                Contact
            </Link>
          </Menu>
        );
      }
}

export default withRouter(NavBar);