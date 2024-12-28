import React from 'react';
import './About.css';



const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section className="platform-overview">
        <h2>Welcome to Online Learning Platform</h2>
        <p>
          Our mission is to empower individuals worldwide by providing access to high-quality courses in a variety of fields.
          Whether you’re looking to upskill, explore new interests, or advance your career, our platform is designed to meet your needs.
        </p>
        <p>
          We collaborate with industry experts and professionals to bring you practical, engaging, and up-to-date content.
        </p>
      </section>

      <section className="vision-mission">
        <h2>Our Vision</h2>
        <p>To be the leading platform for online education and professional development, accessible to everyone, everywhere.</p>

        <h2>Our Mission</h2>
        <p>
          We strive to create an inclusive and interactive learning environment that fosters growth and innovation.
          By leveraging technology and expert knowledge, we aim to provide courses that are affordable, flexible, and effective.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Comprehensive course catalog spanning various industries.</li>
          <li>Expert instructors with real-world experience.</li>
          <li>Flexible learning options to fit your schedule.</li>
          <li>Progress tracking to keep you motivated and on track.</li>
          <li>Affordable pricing with regular discounts and offers.</li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>If you have any questions or feedback, feel free to <a href="/support">contact us</a>. We're here to help you succeed!</p>
      </section>
    </div>
  );
};

export default About;
