import React from 'react';

const Footer = () => {
	let year = new Date().getFullYear();
	return (
		<p style={{textAlign: "center", marginTop: '60px', color: '#aaa', fontSize: '10px'}}>&copy;{year} Solstice Solar <br/>
			5352 Health Camp Rd, Homer, NY 13077 | 10 Ware St, Cambridge, MA 02138
		</p>
	)
};
export default Footer;