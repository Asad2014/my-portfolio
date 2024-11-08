
 "use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';



const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Hello, Iam
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
      Passionate and driven aspiring AI enthusiast with a keen interest in the intersection of technology and artificial intelligence. Currently honing my skills in Nextjs to develop expertise in building intelligent systems and applications. Excited to explore the endless possibilities of AI and contribute to groundbreaking innovations that positively impact society.
      </p>
      
    </div>
       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <Image
    className="object-cover object-center rounded mx-auto"
    alt="profile-picture"
    src={require('../../public/pic.jpeg')}
    width={320} 
    height={267} 
    layout="intrinisc" 
  />
</div>

  </div>
</section>

    </div>
  )
}

export default Hero