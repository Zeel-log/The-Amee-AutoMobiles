import React,{useState} from 'react';
import './events.css';

const Event = () =>{

const color = '#b19cd9';
const[bg,setBg] = useState(color);//ALSO CALLED Array Destructing
const[name,setName] = useState('Click Me!...');

const bgChange = () =>{
	let newbg = '#9388A2';
	setBg(newbg);
	setName('Ohhh!!!...');
};

const bgBack = () => {
	setBg('#170B3B');
	setName('OYYEEEE!!!...');
};

	return(
		<>
		<div style={{backgroundColor:bg}}>
		// <button onClick={bgChange} onDoubleClick={bgBack}> {name}</button> and similarly we cn do may more events onmouse,onclick....
		<button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name}</button>
		</div>
		</>
		);
}
export default Event;