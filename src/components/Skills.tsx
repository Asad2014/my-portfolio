
import React, { useEffect } from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  const skillsData = [
    { name: 'HTML', level: '100%' },
    { name: 'CSS', level: '98%' },
    { name: 'JavaScript/TypeScript', level: '90%' },
    { name: 'Next.js', level: '85%' },
    { name: 'Tailwind CSS', level: '80%' },
    { name: 'Python' , level: '80%'},
  ];

  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Section Title */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-white tracking-widest text-5xl title-font mb-1">
              Skills
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="p-4 w-full md:w-1/2 lg:w-1/3"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} 
              >
                <div className="flex rounded-lg h-full bg-black p-6 flex-col shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                      <AiOutlineCheckSquare />
                    </div>
                    <h2 className="text-white text-lg font-medium">{skill.name}</h2>
                  </div>
                  <div className="flex-grow mt-2">
                    <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                    <p className="font-bold text-white text-right mt-2">{skill.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
