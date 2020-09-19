import React from 'react';

const ToDoList = (props) => {


	return(
		<>
		<div className="todo">
		<button className="todolist" onClick={() => {
			props.onSelect(props.id);
		}} >*</button>
		<li> {props.text} </li>
		</div>
		</>
		); 
}
export default ToDoList;