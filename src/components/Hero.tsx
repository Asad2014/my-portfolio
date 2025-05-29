
"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import profilePics from '../../public/pics.png';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello, I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Asad Iqbal', 'Front-End Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-white">
            I’m a passionate web developer specializing in creating responsive, interactive websites that prioritize seamless user experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I specialize in turning creative ideas into functional, visually engaging web applications.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="Profile Picture"
              src={profilePics}
              width={320}
              height={267}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

