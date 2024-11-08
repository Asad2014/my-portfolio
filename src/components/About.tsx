import React from 'react';


const About = () => {
  return (
    <div id="about" className="container mx-auto pt-24 sm:pt-32 px-4 md:px-8 lg:px-16 xl:px-24">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
        data-aos="zoom-in-up"
      >
        About Me
      </h2>
      <p
        className="text-gray-500 pt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center max-w-4xl mx-auto"
        data-aos="zoom-in-up"
      >
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse.
        Passionate about technology and constantly learning new skills to stay up-to-date with the
        latest innovations.
      </p>
    </div>
  );
};

export default About;
