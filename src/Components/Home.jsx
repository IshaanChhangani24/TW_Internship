import React from 'react';
import Typing from 'react-typing-effect';
import img from './Resume.jpeg';

function Home() {
  return (
    <div className="home-container">
      <div className="typing-container">
        <h1>Ishaan Chhangani</h1>
        <Typing speed={100} text={["Web Developer...."]} />
        <p>HTML || CSS || Javscript || React.JS</p>
      </div>
      <div className="photo-container">
        <img src={img} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
}

export default Home;

