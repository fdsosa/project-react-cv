import React from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render () {
		return (
			<>
				<div className={this.props.location.pathname === '/' ? "headerContainer homeColor" : "headerContainer gitColor"}>
					<div className="headerTitle">
						<Link to="/"><h3 className="titleLink">Federico Sosa</h3></Link>
					</div>
					<div className="headerLinks">
						<ul className="listLinks">
							<li className="itemList">
								<Link className="navLink" to="/">
									HOME
								</Link>
							</li>
							<li className="itemList">
								<a className="navLink" href="/#skills">
									SKILLS
								</a>
							</li>
							<li className="itemList">
								<Link className="navLink" to="/github">
									GITHUB
								</Link>
							</li>
							<li className="itemList">
								<a className="navLink" href="/#contact">
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default Header;