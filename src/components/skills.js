import React from 'react';
import './styles/skills.scss';
import Zoom from 'react-reveal/Zoom';

function Skills(props) {
  /*const [showBar, setShowBar] = useState(true);

  const { useOnScreen } = props;
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });
  
  if (visible) {
    setShowBar(false);
  }*/

  return (
    <>
      <div className="skillsDiv" id="skills">
        <Zoom>
          <h2>SKILLS</h2>
          <div className="barsDiv">
            <h5>HTML</h5>
            <div className="meter">
              <span>40%</span>
            </div>
            <h5>CSS</h5>
            <div className="meter">
              <span>60%</span>
            </div>
            <h5>JS</h5>
            <div className="meter">
              <span>50%</span>
            </div>
            <h5>React</h5>
            <div className="meter">
              <span>70%</span>
            </div>
            <h5>PHP</h5>
            <div className="meter">
              <span>30%</span>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  )
}

export default Skills;