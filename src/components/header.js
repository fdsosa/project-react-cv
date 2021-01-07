import React from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render () {
		return (
			<>
				<nav className={this.props.location.pathname === '/' ? "navbar navbar-expand-lg nav-container homeColor" : "navbar navbar-expand-lg nav-container gitColor"}>
					<div className="container-fluid py-2">
						<Link to="/" className="navbar-brand"><h4 className="m-0">Federico Sosa</h4></Link>
						<ul className="collapse navbar-collapse me-auto mb-2 mb-lg-0 justify-content-lg-end">
							<li className="nav-item mx-3">
								<Link to="/">
									HOME
								</Link>
							</li>
							<li className="nav-item mx-3">
								<a href="/#skills">
									SKILLS
								</a>
							</li>
							<li className="nav-item mx-3">
								<Link to="/github">
									GITHUB
								</Link>
							</li>
							<li className="nav-item mx-3">
								<a href="/#contact">
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default Header;