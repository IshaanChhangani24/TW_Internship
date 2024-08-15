import React from 'react';
import Typing from 'react-typing-effect';


function Skills() {
  return (
    <div className="skills-container">
      <Typing speed={100} text={["My Skills"]} className="typing-effect" />
      <div className="skills-grid">
        <img src="https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_640.png" alt="HTML" className="skill-logo" />
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png" alt="CSS" className="skill-logo" />
        <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png" alt="JavaScript" className="skill-logo" />
        <img src="data:image/png;base64,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" alt="React.js" className="skill-logo" />

        <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_640.png" alt="Node.js" className="skill-logo" />

        <img src="data:image/jpeg;base64,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" alt="Express.js" className="skill-logo" />
        <img src="data:image/png;base64,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" alt="MongoDB" className="skill-logo" />
        <img src="https://cdn.pixabay.com/photo/2013/07/12/16/35/php-151199_1280.png" alt="PHP" className="skill-logo" />
        <img src="https://cdn.pixabay.com/photo/2020/03/17/17/36/database-4941302_640.png" alt="MySQL" className="skill-logo" />
      </div>
    </div>
  );
}

export default Skills;
