
"use client"
import React, { useEffect } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiSanity, SiPython
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
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

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", icon: SiHtml5, level: 95, color: "hover:text-orange-500" },
        { name: "CSS3", icon: SiCss3, level: 90, color: "hover:text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, level: 85, color: "hover:text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, level: 80, color: "hover:text-blue-500" },
        { name: "React.js", icon: SiReact, level: 70, color: "hover:text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, level: 85, color: "hover:text-white" }
      ]
    },
    {
      category: "Backend, Data Management & AI Development",
      items: [
        { name: "Sanity CMS", icon: SiSanity, level: 80, color: "hover:text-pink-500" },
        { name: "Agentic AI", icon: FaRobot, level: 10, color: "hover:text-purple-400" },
        { name: "Python", icon: SiPython, level: 80, color: "hover:text-yellow-400" }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 overflow-hidden" id="skills">
      {/* Background Grid + Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff05_12%,transparent_12.5%,transparent_87%,#ffffff05_87.5%,#ffffff05),linear-gradient(150deg,#ffffff05_12%,transparent_12.5%,transparent_87%,#ffffff05_87.5%,#ffffff05),linear-gradient(60deg,#ffffff08_25%,transparent_25.5%,transparent_75%,#ffffff08_75%,#ffffff08)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Floating Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 mt-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((category, catIdx) => (
            <div
              key={category.category}
              className="space-y-6"
              data-aos="fade-up"
              data-aos-delay={catIdx * 150}
            >
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.items.map((skill, i) => (
                  <div
                    key={skill.name}
                    className="group relative bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 border border-white/10 hover:border-purple-500/30"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <skill.icon className={`text-2xl text-white/70 transition-colors duration-300 ${skill.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-white/70">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                            style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
