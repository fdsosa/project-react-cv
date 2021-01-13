import React, { useRef, useState, useEffect } from 'react';
import './styles/skills.scss';

function Skills() {

  const firstProgressBar = useRef();
  const secondProgressBar = useRef();
  const thirdProgressBar = useRef();
  const fourthProgressBar = useRef();
  const fifthProgressBar = useRef();
  const [firstVisible, setFirstVisible] = useState();
  const [secondVisible, setSecondVisible] = useState();
  const [thirdVisible, setThirdVisible] = useState();
  const [fourthVisible, setFourthVisible] = useState();
  const [fifthVisible, setFifthVisible] = useState();
  const options = {
    threshold: 0.25
  }

  useEffect(() => {
    let firstProgressBarAux = firstProgressBar.current;
    const observer = new IntersectionObserver(([entry]) => {
      setFirstVisible(entry.isIntersecting);
    }, options);

    if (firstProgressBar) {
        observer.observe(firstProgressBarAux);
    }

    return () => {
        if (firstProgressBar) {
            observer.unobserve(firstProgressBarAux);
        }
    };
  }, [firstProgressBar, options]);

  useEffect(() => {
    let secondProgressBarAux = secondProgressBar.current;
    const observer = new IntersectionObserver(([entry]) => {
      setSecondVisible(entry.isIntersecting);
    }, options);

    if (secondProgressBar) {
        observer.observe(secondProgressBarAux);
    }

    return () => {
        if (secondProgressBar) {
            observer.unobserve(secondProgressBarAux);
        }
    };
  }, [secondProgressBar, options]);

  useEffect(() => {
    let thirdProgressBarAux = thirdProgressBar.current;
    const observer = new IntersectionObserver(([entry]) => {
      setThirdVisible(entry.isIntersecting);
    }, options);

    if (thirdProgressBar) {
        observer.observe(thirdProgressBarAux);
    }

    return () => {
        if (thirdProgressBar) {
            observer.unobserve(thirdProgressBarAux);
        }
    };
  }, [thirdProgressBar, options]);

  useEffect(() => {
    let fourthProgressBarAux = fourthProgressBar.current;
    const observer = new IntersectionObserver(([entry]) => {
      setFourthVisible(entry.isIntersecting);
    }, options);

    if (fourthProgressBar) {
        observer.observe(fourthProgressBarAux);
    }

    return () => {
        if (fourthProgressBar) {
            observer.unobserve(fourthProgressBarAux);
        }
    };
  }, [fourthProgressBar, options]);

  useEffect(() => {
    let fifthProgressBarAux = fifthProgressBar.current;
    const observer = new IntersectionObserver(([entry]) => {
      setFifthVisible(entry.isIntersecting);
    }, options);

    if (fifthProgressBar) {
        observer.observe(fifthProgressBarAux);
    }

    return () => {
        if (fifthProgressBar) {
            observer.unobserve(fifthProgressBarAux);
        }
    };
  }, [fifthProgressBar, options]);

  return (
    <div className="container-fluid skillsContainer">
      <div className="container-lg skillsDiv" id="skills">
        <h2>SKILLS</h2>
        <div className="barsDiv">
          <h5>HTML</h5>
          <div className="progress" ref={firstProgressBar}>
            <div className="progress-bar" role="progressbar" style={{width: firstVisible ? '70%' : '0'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
          <h5>CSS</h5>
          <div className="progress" ref={secondProgressBar}>
            <div className="progress-bar" role="progressbar" style={{width: secondVisible ? '80%' : '0'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <h5>JS</h5>
          <div className="progress" ref={thirdProgressBar}>
            <div className="progress-bar" role="progressbar" style={{width: thirdVisible ? '65%' : '0'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
          </div>
          <h5>React</h5>
          <div className="progress" ref={fourthProgressBar}>
            <div className="progress-bar" role="progressbar" style={{width: fourthVisible ? '70%' : '0'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
          <h5>PHP</h5>
          <div className="progress" ref={fifthProgressBar}>
            <div className="progress-bar" role="progressbar" style={{width: fifthVisible ? '60%' : '0'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;