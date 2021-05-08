import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'


const Navbar = () => {
	return (
		<nav className={classes.nav} >    
		<div className={classes.item} >
			<NavLink  className={classes.link} to="/Profile" activeClassName={classes.activeLink} >   Profile  </NavLink>
		</div>
		
	  <div className={classes.item} >
			<NavLink className={classes.link} to="/Dialogs"   activeClassName={classes.activeLink}>   Dialogs  </NavLink>
	  </div>
		
	  <div className={classes.item} >
			<NavLink className={classes.link}  to="/News"   activeClassName={classes.activeLink}>    News </NavLink>
	  </div>
		
	  <div className={classes.item} >
			<NavLink  className={classes.link} to="/Settings"  activeClassName={classes.activeLink} >    Settings  </NavLink>
	  </div>
		
	  <div className={classes.item} >
			<NavLink  className={classes.link} to="/Music"   activeClassName={classes.activeLink} >    Music  </NavLink>
	  </div>                            
  </nav>
	);
}

export default Navbar;