import React from 'react'

interface propsType {
    title:string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl md:text-5xl lg:text-6xl  pb-8 font-bold
    text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'>
        <p className='inline-block pb-2'>{title}</p>
    </div>
  )
}

export default Heading