import React from 'react';
import Header from './header';
import GithubContent from './github-content';
import Footer from './footer';

class Github extends React.Component {
	render() {
		return (
			<>
				<Header location={this.props.location} />
				<GithubContent />
				<Footer />
			</>
		);
	}
}

export default Github;