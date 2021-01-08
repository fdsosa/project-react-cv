import React from 'react';
import './styles/personal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';

class Personal extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column align-items-center p-0 personalContainer">
        <div className="container-lg">
          <div className="row socialDiv">
            <div className="col-12 d-flex flex-row justify-content-center socialCol">
              <ul>
                <li><a href="https://github.com/fdsosa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.facebook.com/fede.gorsac35/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="https://www.linkedin.com/in/federico-sosa-026685153/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-4 my-xl-5 container-sm personalDiv">
          <h3>Hello! I´m Federico</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi incidunt assumenda voluptatem, alias omnis facere ab? Voluptatibus, vel officiis! Soluta recusandae error eligendi quia repellat perferendis modi quae earum!</p>
        </div>
      </div>
    )
  }
}

export default Personal;