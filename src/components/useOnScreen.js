import React from 'react';


function onScreen(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ref: null,
        visible: false
      }
    }

    componentDidMount() {
      console.log('||||||||||||||');
      console.log(this.props);
    }

    componentDidUpdate() {
      
      let options = {
        threshold: 0.25
      };

      const observer = new IntersectionObserver(([entry]) => {
          this.setState({ visible: entry.isIntersecting });
      }, options);

      if (this.state.ref) {
          observer.observe(this.state.ref);
      }

      return () => {
          if (this.state.ref) {
              observer.unobserve(this.state.ref);
          }
      };
    }

    render() {
      return <WrappedComponent elementVisible={this.state.visible}/>
    }
  }
}

export default onScreen;