
import React from 'react';
import Heading from './Heading';
import Card from './Card';

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  github?: string;
  vercel?: string;
}

const data: Project[] = [

   {
    id: 0,
    title: "Avion Furniture E-Commerce",
    desc: "Full-stack e-commerce platform with modern UI, shopping cart, and payment integration.",
    img: "/e-commercee.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    github: "https://github.com/Asad2014/Avion-E-Commerce-Website.git",
    vercel: "https://avion-e-commerce-website.vercel.app/"
  },

   {
    id: 1,
    title: "Blog Website",
    desc: "A modern blog platform built with Next.js and TypeScript, featuring a clean UI and smooth animations.",
    img: "/blogg.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    github: "https://github.com/Asad2014/blog-website.git",
    vercel: "https://blog-website-vert-tau.vercel.app/"
  },

  {
    id: 2,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/todo-list.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
    github: "https://github.com/Asad2014/todo-list_008.git",
    vercel: "https://todo-list.vercel.app"
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A simple HTML & TypeScript powered tool for converting currencies with real-time rates.",
    img: "/currency-converter.png",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
    github: "https://github.com/Asad2014/currency-converter_202.git",
    vercel: "https://currency-converter.vercel.app"
  },
  // {
  //   id: 4,
  //   title: "Simple Calculator",
  //   desc: "A basic HTML CSS and TypeScript calculator for performing essential arithmetic operations.",
  //   img: "/calculator.png",
  //   tags: ["HTML", "Node", "CSS", "TypeScript"],
  //   github: "https://github.com/yourusername/simple-calculator",
  //   vercel: "https://simple-calculator.vercel.app"
  // },
  {
    id: 5,
    title: "Static-Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/static interactive resume.png",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
    github: "https://github.com/Asad2014/hackathon_all_milestones.git",
    vercel: "https://hackathon-all-milestones.vercel.app/"
  },
  {
    id: 6,
    title: "Student ID Card",
    desc: "A Next.js & Tailwind CSS based fully functional, responsive ID card.",
    img: "/card.png",
    tags: ["Next.JS", "Node", "CSS"],
    github: "https://github.com/yourusername/id-card",
    vercel: "https://id-card.vercel.app"
  },
  // {
  //   id: 7,
  //   title: "Fast-Food Website Template",
  //   desc: "An HTML & CSS based Fast-Food website template including header with navigation, hero section, menu items & a footer.",
  //   img: "/fast-food website template..png",
  //   tags: ["HTML", "Node", "CSS"],
  //   github: "https://github.com/yourusername/fast-food-template",
  //   vercel: "https://fast-food-template.vercel.app"
  // },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            github={el.github}
            vercel={el.vercel}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
