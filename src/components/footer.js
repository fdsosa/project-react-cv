import React from 'react';
import './styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const url = process.env.NODE_ENV === 'development' ? '/api/form' : 'https://react-cv-api.herokuapp.com/api/form';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.myForm = React.createRef();

    this.state = {
      fields: { name: '', email: '', subject: '', message: '' },
      errors: { name: '', email: '', subject: '', message: '' },
      emailSent: false
    }

    this.handleChange = this.handleChange.bind();
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    //Message
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    let isValid = this.handleValidation();
    let fields = this.state.fields;

    if (isValid) {
      const name = fields["name"];
      const email = fields["email"];
      const subject = fields["subject"];
      const message = fields["message"];

      axios.post(url, { name, email, subject, message })
        .then(res => this.setState({ showNot: true }))
        .catch(err => console.log('Login: ', err));

      this.setState({ emailSent: true })
      let resetFields = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      this.setState({ fields: resetFields })
      this.myFormRef.reset();
    }
  }

  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center p-0 footerContainer">
        <h2>CONTACT ME</h2>
        <hr />
        <div className="container-lg">
          <div className="row d-flex flex-nowrap justify-content-center flex-column flex-lg-row footerDiv align-items-center" id="contact">
            <div className="col-10 col-sm-7 col-lg-5 my-4 my-lg-0 pt-3 px-4 formDiv">
              <form name="contactform" ref={(el) => this.myFormRef = el} onSubmit={this.contactSubmit.bind(this)}>
                <input type="text" name="name" placeholder="Name" onChange={this.handleChange} className={this.state.errors["name"] ? 'errorField' : ''} value={this.state.fields["name"]} />
                {this.state.errors["name"] &&
                  <p>{this.state.errors["name"]}</p>
                }
                <input type="email" name="email" placeholder="Email" onChange={this.handleChange} className={this.state.errors["email"] ? 'errorField' : ''} value={this.state.fields["email"]} />
                {this.state.errors["email"] &&
                  <p>{this.state.errors["email"]}</p>
                }
                <input type="text" name="subject" placeholder="Subject" onChange={this.handleChange} value={this.state.fields["subject"]} />
                <textarea name="message" placeholder="Message" onChange={this.handleChange} className={this.state.errors["message"] ? 'errorField' : ''} value={this.state.fields["message"]}></textarea>
                {this.state.errors["message"] &&
                  <p>{this.state.errors["message"]}</p>
                }
                <button type="submit">Send</button>
              </form>
              {this.state.emailSent &&
                <p className="example">Message sent, thanks for contacting me!</p>
              }
            </div>
            <div className="col-10 col-sm-7 col-lg-5 my-4 my-lg-0 pt-3 px-4 d-flex flex-column text-center text-lg-left dataDiv">
              <h3>Federico Sosa</h3>
              <h4>WEB DEVELOPER</h4>
              <ul>
                <li className="itemTitle">Phone:</li>
                <li className="itemText">1234578</li>
                <li className="itemTitle">Email:</li>
                <li className="itemText">mail@info.com</li>
              </ul>
              <hr />
              <div className="socialNets d-flex justify-content-center justify-content-lg-start mt-2">
                <ul>
                  <li><a href="https://github.com/fdsosa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                  <li><a href="https://www.facebook.com/fede.gorsac35/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li><a href="https://www.linkedin.com/in/federico-sosa-026685153/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright container-fluid d-flex justify-content-center text-center py-3">
          <span>Copyright © 2020 Federico Sosa. All rights reserved.</span>
        </div>
      </div>
    )
  }
}

export default Footer;