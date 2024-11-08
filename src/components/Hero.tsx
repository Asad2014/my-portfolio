

import React from 'react'

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/pic.jpeg)] bg-cover"
      style={{ backgroundSize: "25%", backgroundPosition: "left 150px top 150px" }}
    >
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p>Iam</p> 
            <p>Asad</p>
            <p>Iqbal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
