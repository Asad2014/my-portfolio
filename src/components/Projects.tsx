import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id:0,
    title: "Todo List",
    desc: "A React & Typscript based app for managing and organizing your tasks efficiently.",
    img: "/todo-list.png",
    tags: ["React","Node","CSS","Typscript"],
  },
  {
    id:1,
    title: "Currency Converter",
    desc: "A simple HTML & Typscript powered tool for converting currencies with real-time rates.",
    img: "/currency-converter.png",
    tags: ["HTML","Node","CSS","Typscript"],
  },
  {
    id:2,
    title: "Simple Calculator",
    desc: "A basic HTML CSS and Typscript calculator for performing essential arithmetic operations.",
    img: "/calculator.png",
    tags: ["HTML","Node","CSS","Typscript"],
  },
  {
    id:4,
    title: "Static-Interactive Resume",
    desc: "A Typscript-based interactive resume built with HTML and CSS,allowing users to showcase their skills dynamically.",
    img: "/static interactive resume.png",
    tags: ["HTML","Node","CSS","Typscript"],
  },
  {
    id:5,
    title: "Student ID Card",
    desc: "A Next.js & Tailwind CSS based fully functional,responsive ID card.",
    img: "/card.png",
    tags: ["Next.JS","Node","CSS",],
  },
  {
    id:5,
    title: "Fast-Food Website Template",
    desc: "A HTML & CSS based Fast-Food website template including header with navigation,hero section,menu items & a footer.",
    img: "/fast-food website template..png",
    tags: ["HTML","Node","CSS"],
  },
];

const Projects = () => {
  return (
    <div id ='projects'className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'> 
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects