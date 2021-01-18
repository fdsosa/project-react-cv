import React, { useEffect, useState } from 'react';
import './styles/github-content.scss';
import Fade from 'react-reveal/Fade';


function GithubContent() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/fdsosa/repos`)
      .then(response => response.json())
      .then(
        user => {
          setUser(user);
        }
      );
  })

  const renderRepos = (repos) => {
    return (
      <Fade bottom> 
        <div className="repository col-10 col-sm-4 col-lg-3 m-4 p-0 d-flex flex-column" key={repos.name}>
          <div className="repoTitle d-flex justify-content-start align-items-center p-2 text-start">
            <h4 className="m-0 px-2">{repos.name}</h4>
          </div>
          <div className="repoInfo">
            <p>{repos.description}</p>
            <h6>{repos.language}</h6>
            <a href={repos.html_url} target="_blank" rel="noopener noreferrer">Visit the repository</a>
          </div>
        </div>
      </Fade>
    )
  }

  return (
    <>
      {!user
      ? (
        <div className="loadingDiv"><div className="loader"></div></div>
      ) : (
      <div className="container-fluid">
        <div className="gitDiv container-xl d-flex flex-column justify-content-center p-3 pb-5">
          <h2 className="text-center mt-5 mb-2">Github Repositories</h2>
          <div className="repoDiv row d-flex flex-wrap justify-content-center">
            {user.map(renderRepos)}
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default GithubContent;