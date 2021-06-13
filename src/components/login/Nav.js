import React from 'react';
import Home from './Home';
import Permission from '../permission/Permission';
import { USER_NAME_SESSION_ATTRIBUTE_NAME } from "../../actions/types";


export function Nav(props) {

	return (
		<div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<img className="navbar-brand" src="images/bootstrap-solid.svg" alt="" width="72" height="72" />
		<a className="navbar-brand" href="/home">Stock Service</a>
		{ typeof(sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)) !== undefined ? menuItems() : '' }
		</nav>
		</div>
	);
	
	function menuItems() {
		return (
			<div>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active"><a className="nav-link" href="/home">Home
								<span className="sr-only">(current)</span>
						</a></li>

						<li className="nav-item dropdown"><a
							className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
							role="button" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false"> Permission </a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/permission">Add</a> 
								<a className="dropdown-item" href="#">Update</a>
								<a className="dropdown-item" href="#">Delete</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="/permission/search">Search</a>
							</div></li>
					</ul>
					
					<form className="form-inline my-2 my-lg-0" method="POST" action="/logout">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
					</form>
				</div>
			</div>
		);
	}
}

