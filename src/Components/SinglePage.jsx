import React from 'react'
import Home from './Home';
import AboutUs from './About';
import Skills from './Skills';
import Experience from './Experience';
import ContactUs from './ContactUs';

function SinglePage() {
  return (
    <>
      <div>

        <section id="home"><Home /></section>
      <section id="about-us"><AboutUs /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="contact-us"><ContactUs /></section>
    </div>
    </>
  )
}

export default SinglePage