import React from 'react';

const Footer = () => {

let date = new Date().getFullYear();

	return(
		<>
		<footer className="bg-light text-center" style={{backgroundColor: '#b3b3ff !important' }} >
		<p> © {date} TheAmeeAutoMobile.All Rights Reserved | Terms And Conditions </p>
		</footer>
		</>
		);
}
export default Footer;