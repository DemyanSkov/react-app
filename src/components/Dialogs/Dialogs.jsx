import React from 'react';
import { Route } from 'react-router';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message';





const Dialogs = () => {

	let dialogs = [
		{id:1 , name: 'Danil'},
		{id:2 , name: 'Anton'},
		{id:3 , name: 'Vika'},
		{id:4 , name: 'Papich'}
	];


	let dialogsElements = dialogs.map( dialogs => <DialogsItem name={dialogs.name}  id={dialogs.id} />  )

	let messages = [
		{id: 1 , message: 'Something'},
		{id: 2 , message: 'Something fsdfsd'},
		{id: 3 , message: 'Something fsd fs'},
		{id: 4 , message: 'Something df sdf'}
	];

	let messagesElements = messages.map( messages =>  <Message message={messages.message} id={messages.id} />   )

	
	return (
		<div className={classes.dialogs} > 
				<div className={classes.dialogsItems}>
					{dialogsElements}
				</div>

				<div className={classes.messages} >
					{messagesElements}
				</div>				
		</div>
	);
}

export default Dialogs;