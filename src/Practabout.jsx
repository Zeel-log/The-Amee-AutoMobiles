import React from 'react';
import homimg from '../src/images/car1.png';
import Common from './Common';

const Practabout = () => {
	return(
	<>
		<Common name='Welcome to About' imgsrc={homimg} visit='/contact' btname='Contact Now' />
	</>
		);
}
export default Practabout;