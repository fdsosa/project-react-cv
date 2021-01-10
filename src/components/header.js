import React from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggleClass= this.toggleClass.bind(this);
		this.state = {
			active: false
		}
	}

	toggleClass() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	}	

	render () {
		return (
			<>
				<nav className={this.props.location.pathname === '/' ? "navbar navbar-collapse navbar-expand-lg nav-container p-0 homeColor" : "navbar navbar-collapse navbar-expand-lg nav-container p-0 gitColor"}>
					<div className="container-fluid align-items-baseline align-items-lg-center">
						<Link to="/" className="navbar-brand"><h4 className="m-0 p-3">Federico Sosa</h4></Link>
						<ul className="collapse navbar-collapse me-auto mb-2 mb-lg-0 p-3 justify-content-lg-end">
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
						<button className="p-3" type="button" aria-expanded="false" aria-controls="show-menu">
							<div id="nav-icon1" className={this.state.active ? 'open' : ''} onClick={this.toggleClass}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</button>
						<div className={this.state.active ? 'headerMenu d-flex align-items-center justify-content-center openMenu' : 'headerMenu'}>
							<ul className={this.state.active ? 'd-flex flex-column p-0 m-0 menu-container' : 'd-none menu-container'}>
								<li className="menu-item-1 py-2 text-center"><Link to="/">HOME</Link></li>
								<li className="menu-item-2 py-2 text-center"><a href="/#skills">SKILLS</a></li>
								<li className="menu-item-3 py-2 text-center"><Link to="/github">GITHUB</Link></li>
								<li className="menu-item-4 py-2 text-center"><a href="/#contact">CONTACT</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</>
		);
	}
}

export default Header;