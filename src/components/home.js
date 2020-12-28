import React from 'react';
import './styles/home.scss';
import Header from './header';
import Profile from './profile';
import Personal from './personal';
import Footer from './footer';
import Skills from './skills';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header location={this.props.location} />
        <Profile />
        <Personal />
        <Skills />
        <Footer />
      </>
    );
  }
}

export default Home;