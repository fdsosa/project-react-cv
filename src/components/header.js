import React, { createRef } from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.navbar = createRef();
		this.mobileMenuList = createRef();
		this.mobileMenu = createRef();
		this.toggleClass = this.toggleClass.bind(this);
		this.handleNavigation = this.handleNavigation.bind(this);
		this.state = {
			active: false,
			initialY: null
		}
	}

	componentDidUpdate() {
		//i do this because the menu wasnt responsive
		let newHeight = this.mobileMenuList.current.offsetHeight + 25;
		if (this.mobileMenu.current.classList.contains('openMenu') && this.mobileMenu.current.offsetHeight === 0) {
			this.mobileMenu.current.style.height = `${newHeight}px`;
		} else if (!this.mobileMenu.current.classList.contains('openMenu')) {
			this.mobileMenu.current.style.height = "0";
		} 
	}

	componentDidMount() {
		this.setState({ initialY: window.scrollY });
		window.addEventListener('scroll', this.handleNavigation);
	}

	componentWillUnmount() {
		this.setState({ initialY: null });
		window.removeEventListener('scroll', this.handleNavigation);
	}

	handleNavigation = () => {
    if (this.state.initialY > window.scrollY && window.innerWidth >= 995) {
			this.navbar.current.style.top = '0px';
			this.navbar.current.style.opacity = '1';
    } else if (this.state.initialY < window.scrollY && window.innerWidth >= 995) {
			this.navbar.current.style.top = `-${this.navbar.current.offsetHeight + 5}px`;
			this.navbar.current.style.opacity = `0`;
    }
		this.setState({ initialY: window.scrollY });
	};


	toggleClass = () => {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	}	

	render () {
		return (
			<>
				<nav 
					className={this.props.location.pathname === '/' ? "navbar navbar-collapse navbar-expand-lg nav-container p-0 homeColor" : "navbar navbar-collapse navbar-expand-lg nav-container p-0 gitColor"}
					ref={this.navbar}	
				>
					<div className="container-fluid align-items-baseline align-items-lg-center">
						<Link to="/" className="navbar-brand"><h4 className="m-0 p-3">Federico Sosa</h4></Link>
						<ul className="collapse me-auto mb-lg-0">
							<li className="nav-item d-lg-inline-block mx-1">
								<Link className="px-4" to="/">
									HOME
								</Link>
							</li>
							<li className="nav-item d-lg-inline-block mx-1">
								<a className="px-4" href="/#skills">
									SKILLS
								</a>
							</li>
							<li className="nav-item d-lg-inline-block mx-1">
								<Link className="px-4" to="/github">
									GITHUB
								</Link>
							</li>
							<li className="nav-item d-lg-inline-block mx-1">
								<a className="px-4" href="/#contact">
									CONTACT
								</a>
							</li>
						</ul>
						<button className="p-3 d-lg-none" type="button" aria-expanded="false" aria-controls="show-menu">
							<div id="nav-icon1" className={this.state.active ? 'open' : ''} onClick={this.toggleClass}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</button>
						<div className={this.state.active ? 'headerMenu d-flex align-items-center justify-content-center openMenu' : 'headerMenu'} ref={this.mobileMenu}>
							<ul ref={this.mobileMenuList} className={this.state.active ? 'd-flex flex-column p-0 m-0 py-1 menu-container' : 'd-none menu-container'}>
								<li className="menu-item-1 my-1 text-center"><Link className="py-2" to="/">HOME</Link></li>
								<li className="menu-item-2 my-1 text-center"><a className="py-2" href="/#skills">SKILLS</a></li>
								<li className="menu-item-3 my-1 text-center"><Link className="py-2" to="/github">GITHUB</Link></li>
								<li className="menu-item-4 my-1 text-center"><a className="py-2" href="/#contact">CONTACT</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</>
		);
	}
}

export default Header;