
"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaCode, FaPython, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Course {
  quarter: string;
  title: string;
  icon: IconType;
  status: "Completed" | "Ongoing";
  description: string;
}

interface EducationItem {
  title: string;
  period: string;
  description?: string;
  icon: IconType;
  color: string;
  courses?: Course[];
}

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
  }, []);

  const educationData: EducationItem[] = [
    {
      title: "Mehran University - Electrical Engineering",
      period: "2015 - 2018",
      description: "Completed Bachelor's degree in Electrical Engineering from Mehran University of Engineering and Technology.",
      icon: FaGraduationCap,
      color: "from-green-400 to-green-600"
    },
    {
      title: "GIAIC - Artificial Intelligence & Computing",
      period: "2024 - Present",
      icon: FaCode,
      courses: [
        {
          quarter: "Quarter 1",
          title: "Advanced TypeScript",
          icon: SiTypescript,
          status: "Completed",
          description: "Mastered TypeScript at an advanced level with practical implementations."
        },
        {
          quarter: "Quarter 2",
          title: "Next.js (Frontend Development)",
          icon: SiNextdotjs,
          status: "Completed",
          description: "Comprehensive study of Next.js framework and modern web development."
        },
        {
          quarter: "Quarter 3",
          title: "Advanced Python",
          icon: FaPython,
          status: "Completed",
          description: "Currently focusing on Python and Agentic AI development."
        },
        {
          quarter: "Quarter 4",
          title: "Agentic AI with OpenAI Agents SDK",
          icon: FaRobot,
          status: "Ongoing",
          description: "Currently working on Agentic AI development using the OpenAI Agents SDK."
        }
      ],
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(-45deg,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent top-1/4 animate-move-right" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent top-1/2 animate-move-left" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent top-3/4 animate-move-right" />
      </div>

      <div className="relative z-10 container mx-auto px-4 mt-10">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Education
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-12 relative" data-aos="fade-up">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-indigo-500 rounded-full" />
              <div className="ml-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${edu.color}`}>
                      <edu.icon className="text-xl text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-white/70 mb-4">{edu.description}</p>
                )}

                {edu.courses && (
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {edu.courses.map((course) => (
                      <div
                        key={course.quarter}
                        className="bg-white/5 rounded-xl p-4 border border-white/10"
                        data-aos="fade-up"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <course.icon className="text-xl text-purple-400" />
                          <h4 className="font-medium text-white">{course.title}</h4>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{course.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{course.quarter}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            course.status === "Completed" 
                              ? "bg-green-500/20 text-green-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}>
                            {course.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
