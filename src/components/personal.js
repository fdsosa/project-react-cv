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
            <>
                <Fade>
                    <div className="socialDiv">
                        <ul>
                            <li><a href="https://github.com/fdsosa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="https://www.facebook.com/fede.gorsac35/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="https://www.linkedin.com/in/federico-sosa-026685153/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>
                </Fade>
                <div className="personalDiv">
                    <Fade left big>
                        <h3>Hello! I´m Federico</h3>
                    </Fade>    
                    <Fade right big>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi incidunt assumenda voluptatem, alias omnis facere ab? Voluptatibus, vel officiis! Soluta recusandae error eligendi quia repellat perferendis modi quae earum!</p>
                    </Fade>    
                </div>
            </>
        )
    }
}

export default Personal;