import React from 'react';

const Avatarlist = (props) =>{
	return(
		<div className="avatar ma4 bg-light-purple dib pa3 grow dib f3-ns">
		<img src={'https://joeschmoe.io/v1/${props.name}'} alt="avatar" />
		<h1 className=""> {props.name}</h1>
		<p> {props.work} </p>
		</div>
	)
}
export default Avatarlist;