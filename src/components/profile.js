import React from 'react';
import './styles/profile.scss';
import Fade from 'react-reveal/Fade';

class Profile extends React.Component {
    render () {
        return (
            <>
                <div className="profileBg">
                    <div className="filter">
                        <div className="profileInfo">
                            <Fade left>    
                                <div className="profilePicture"></div>
                            </Fade>  
                            <Fade right>    
                                <div className="profileData">
                                    <h2>Federico Sosa</h2>
                                    <h4>WEB DEVELOPER</h4>
                                    <ul>
                                        <li className="itemTitle">Phone:</li>
                                        <li className="itemText">312312124</li>
                                        <li className="itemTitle">Email:</li>
                                        <li className="itemText">info@email.com</li>
                                        <li className="itemTitle">Address:</li>
                                        <li className="itemText">123 St</li>
                                        <li className="itemTitle">Date of Birth:</li>
                                        <li className="itemText">28th of April 1999</li>
                                    </ul>
                                </div>
                            </Fade>    
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;