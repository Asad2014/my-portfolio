import React from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai'

const Skills = () => {
  return (
    <div id = "skills" >
      
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className=" text-white tracking-widest text-5xl title-font mb-1">
          SKILLS
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
       
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
              </div>
              <h2 className="text-white text-lg title-font font-medium"data-aos="zoom-in-up">
                HTML
              </h2>
            </div>
            <div className="flex-grow">
              <div className='fixed h-1 w-full bg-gray-300 rounded-xl'></div>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[24.5%]'></div>
              
              
              <p className='font-bold text-white text-right'>100%</p>
          
 
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
              </div>
              <h2 className="text-white text-lg title-font font-medium"data-aos="zoom-in-up">
                CSS
              </h2>
            </div>
            <div className="flex-grow">
              <div className='fixed h-1 w-full bg-gray-300 rounded-xl'></div>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[24.5%]'></div>
              
              
              <p className='font-bold text-white text-right'>100%</p>
          
 
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
              </div>
              <h2 className="text-white text-lg title-font font-medium"data-aos="zoom-in-up">
                Javascript/Typscript
              </h2>
            </div>
            <div className="flex-grow">
              <div className='absolute h-1 w-80 bg-gray-300 rounded-xl'></div>
              <div className='relative bg-blue-500 h-1 rounded-xl w-[95%]'></div>
              
              
              <p className='font-bold text-white text-right'>95%</p>
          
 
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
              </div>
              <h2 className="text-white text-lg title-font font-medium"data-aos="zoom-in-up">
                NEXT JS
              </h2>
            </div>
            <div className="flex-grow">
              <div className='absolute h-1 w-80 bg-gray-300 rounded-xl'></div>
              <div className='relative bg-blue-500 h-1 rounded-xl w-[40%]'></div>
              
              
              <p className='font-bold text-white text-right'>40%</p>
          
 
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-black p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
              </div>
              <h2 className="text-white text-lg title-font font-medium"data-aos="zoom-in-up">
                Tailwind CSS
              </h2>
            </div>
            <div className="flex-grow">
              <div className='absolute h-1 w-80 bg-gray-300 rounded-xl'></div>
              <div className='relative bg-blue-500 h-1 rounded-xl w-[30%]'></div>
              
              
              <p className='font-bold text-white text-right'>30%</p>
          
 
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
    </div>
  )
}

export default Skills