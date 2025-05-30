import React from 'react';


const About = () => {
  return (
    <div id="about" className="container mx-auto pt-24 sm:pt-32 px-4 md:px-8 lg:px-16 xl:px-24">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold
        text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        data-aos="zoom-in-up"
      >
        About Me
      </h2>
      <p
        className="text-gray-500 pt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center max-w-4xl mx-auto"
        data-aos="zoom-in-up"
      >
        I’m a student at GIAIC, specializing in Artificial Intelligence, Web 3.0, and the Metaverse, with a keen interest in AI Agents and intelligent systems. I’m passionate about building smart, 
        autonomous solutions and continuously expanding my skills to innovate in the world of emerging technologies.
      </p>
    </div>
  );
};

export default About;
