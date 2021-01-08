import React, { useEffect, useRef } from 'react';
import './styles/skills.scss';
import Zoom from 'react-reveal/Zoom';

function Skills(props) {
  const example = useRef();
  /*const [showBar, setShowBar] = useState(true);

  const { useOnScreen } = props;
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });
  
  if (visible) {
    setShowBar(false);
  }*/

  useEffect(() => {
    console.log(example.current.style);
    example.current.style.width = '100%';
  }, [])

  return (
    <div className="container-fluid skillsContainer">
      <div className="container-lg skillsDiv" id="skills">
        <h2>SKILLS</h2>
        <div className="barsDiv">
          <h5>HTML</h5>
          <div className="progress">
            <div className="progress-bar" ref={example} role="progressbar" style={{width: 70 + '%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
          <h5>CSS</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <h5>JS</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: 65 + '%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
          </div>
          <h5>React</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: 70 + '%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
          <h5>PHP</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: 60 + '%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;