import React from 'react';
import './avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

const Avatar = (props) =>{
	const arraylist = [
		{
			id:1,
			name:"zeel",
			work:"Web Developer"
		},
		{
			id:1,
			name:"ZEEL",
			work:"Front_end Developer"
		},
		{
			id:1,
			name:"Mewada",
			work:"Back_end Developer"
		},
		{
			id:1,
			name:"zeel_mewada",
			work:"Stack Developer"
		}
	]

	const arrayl = arraylist.map( (avatarcard,i) => {
		return <Avatarlist id={arraylist[i].name} name={arraylist[i].name} work={arraylist[i].work} />
	} )

	return(
		<div>
		<h1 className="header">Welcome to Avatar World!..</h1>
		{arrayl}
		<button> Subscibe </button>
		</div>
	)
}
export default Avatar;
