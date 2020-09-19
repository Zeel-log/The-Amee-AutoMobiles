import React,{useState} from 'react';
import ToDoList from './ToDoList';
import './todolist.css';

const Todolist = () => {

	const[item1,setItem1] = useState();
	const[item,setItem] = useState([]);
	const Event = (event) => {
		setItem1(event.target.value);
	}

	const Submit = () => {
		setItem((olditems) => {
			return [...olditems,item1];
		});
		setItem1("");
	}

	const deleteItem = (id) => {
		setItem((olditems) => {
			return olditems.filter((arrElem,index) => {
				return index !== id;
			});
		});
	}


	return(
		<>
		<div className="main_div">
		<div className="center_div">
			<br/>
			<h1>TodoList</h1>
			<br/>
			<input type="text" placeholder="Add an Items" onChange={Event} value={item1} />
			<button onClick={Submit} > + </button>

			<ol>
				{
					item.map((itemval,index) => {
					return <ToDoList key={index} id={index} onSelect={deleteItem} text={itemval} />	
					})
				}
			</ol>
		</div>
		</div>
		</>
		);

}
export default Todolist;