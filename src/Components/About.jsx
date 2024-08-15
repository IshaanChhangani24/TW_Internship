import React from 'react';
import img from './ResumePic.jpeg';

function About() {
    return (
        <section id='about' className='about-section'>
            <div className='heading-container'>
                <h2 className='heading'>About Me</h2>
            </div>
            <div className='about-content'>
                <div className='topic'>
                    <p className="about-para1">
                        Hello, I'm Ishaan Chhangani. I am a passionate Front-end Web Developer with years of experience in the field of Web Development and a strong background in IT. I hold a Bachelor's degree in Bachelor's of Computer Application (BCA), and I am currently pursuing a Master's of Computer Application (MCA)at Ashiwariya College of Education (ACE) to further enhance my skills and knowledge.
                    </p>
                    <p className="about-para2">
                        I'm highly skilled in web technologies and frameworks, specializing in front-end development with HTML, CSS, JavaScript, React.Js, C#, ASP.NET MVC Framework, Python. I pay great attention to detail and deliver top-notch, user-friendly web applications. I'm adept at problem-solving and enjoy collaborating with cross-functional teams. I'm committed to continuous learning and keeping up with industry trends. With excellent communication and problem-solving abilities, I excel in both independent and team-oriented environments. I'm dedicated, driven, and passionate about creating outstanding web experiences in the ever-changing world of technology.
                    </p>
                </div>
                <div className='about-img'>
                    <img src={img} alt="Profile" className='abt-img' />
                </div>
            </div>
        </section>
    );
}

export default About;
