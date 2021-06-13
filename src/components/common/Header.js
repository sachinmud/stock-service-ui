import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/header.css';
import '../../css/signin.css';
import {Nav} from '../login/Nav';

class Header extends React.Component {

	render() {
		return (
		<div>
			<Nav auth={this.props.auth} />
			<br></br>
		</div>
		);
	}

}

export default Header;