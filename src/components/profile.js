import React from 'react';
import './styles/profile.scss';
import Fade from 'react-reveal/Fade';
import imageProfile from '../assets/adult-attractive-beautiful-beauty-415829.webp';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.imageDiv = React.createRef();
    this.dataDiv = React.createRef();
    this.profileContainer = React.createRef();
  }

  componentDidMount() {
    let divsHeight = this.dataDiv.current.getBoundingClientRect().width;
    this.imageDiv.current.style.height = `${divsHeight}px`;
    this.dataDiv.current.style.height = `${divsHeight}px`;
  }



  render() {
    return (
      <>
        <div className="container-fluid d-flex align-items-center align-items-lg-end profileBg" ref={this.profileContainer}>
          <div className="container-lg py-4 py-lg-0 h-100">
            <div className="row flex-column flex-lg-row flex-nowrap justify-content-center align-items-center align-items-lg-end h-100">
              <div className="col-10 col-sm-8 col-md-5 col-lg-6 col-xl-6 d-block p-0 profilePicture" ref={this.imageDiv} id="image-div">
                <img src={imageProfile} className="img-fluid" alt="Profile picture" />
              </div>
              <div className="col-10 col-sm-8 col-md-5 col-lg-6 col-xl-6 d-block d-lg-flex flex-lg-column align-items-lg-start justify-content-lg-center py-4 py-lg-0 profileData" ref={this.dataDiv}>
                <div className="container-sm d-flex flex-column justify-content-center px-5">
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;