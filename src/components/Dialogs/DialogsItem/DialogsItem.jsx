import React from 'react';
import classes from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom';





const DialogsItem = (props) => {

	
	return (
			<div className={`${classes.dialog} ${classes.active}`} >
				{props.name} 
		   </div>								
	);
}

export default DialogsItem;