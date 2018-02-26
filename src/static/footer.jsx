import React from 'react';
import {Button} from 'semantic-ui-react';

const Footer = () => {
	let year = new Date().getFullYear();
	return (
		<div className="footer">

			<p style={{
				textAlign: "center",
				marginTop: '60px',
				color:     '#aaa',
				fontSize:  '10px'
			}}>&copy;{year} Solstice Solar <br/>
				5352 Health Camp Rd, Homer, NY 13077 | 10 Ware St, Cambridge, MA
				02138

			</p>
			<div style={{textAlign: "center"}}>
				<Button circular color='facebook' icon='facebook'
				        size={'mini'}/>
				<Button circular color='twitter' icon='twitter' size={'mini'}/>
				<Button circular color='linkedin' icon='linkedin'
				        size={'mini'}/>
				<Button circular color='google plus' icon='google plus'
				        size={'mini'}/>
			</div>
		</div>
	);
};
export default Footer;
