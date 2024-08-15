import React from 'react';
import Typing from 'react-typing-effect';

function Experience() {
  return (
    <div className="experience-container">
      <Typing speed={100} text={["Aishwariya College of Education Jodhpur (ACE)"]} className="typing-effect" />
      <div className="education-details">
        <p className="dot">• Bachelor of Computer Application (BCA) 2020-2022</p>
        <p className="dot">• Master's of Computer Application (MCA) 2022-2024</p>
      </div>
      <hr className="separator" />
      <Typing speed={100} text={["Intern Experience"]} className="typing-effect" />
      <div className="internship-details">
        <p className="dot">• Lucid Outsourcing Pvt ltd-Jodhpur  30-May-2024 - 15-July-2024 (45 Days) </p>
        <p className="dot">• Topper World Online Internship 27-July-2024 - 27-Aug-2024 (30 Days)</p>

       
      </div>
    </div>
  );
}

export default Experience;
