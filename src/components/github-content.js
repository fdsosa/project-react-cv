import React from 'react';
import './styles/github-content.scss';


class GithubContent extends React.Component {

    constructor() {
        super();
        this.state = {
            reposNumber : 0
        };
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/fdsosa/repos`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }  

    renderRepos(repos) {
        return ( 
            <div className="repository">
                    <div className="repoTitle">
                        <h4>{repos.name}</h4>
                    </div>
                    <div className="repoInfo">
                        <p>{repos.description}</p>
                        <h6>{repos.language}</h6>
                        <a href={repos.html_url} target="_blank" rel="noopener noreferrer">Visit the repository</a>
                    </div>
            </div>
        )
    }

	render () {
        if (!this.state.user) {            
            return (<div className="loadingDiv"><div className="loader"></div></div>);
        }
        console.log(this.state.user)

        const repos = this.state.user;

		return (
			<>  
                <div className="gitDiv">
				    <h2>Github Repositories</h2>
                    <div className="repoDiv">
                        {repos.map(this.renderRepos)}
                    </div>
                    <h5>Displaying <b>{repos.length}</b> repositories</h5>
                </div>
			</>
		);
	}
}

export default GithubContent;