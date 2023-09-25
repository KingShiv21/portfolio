import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

  let projectList = [
    {
      name : "Ecommerce Backend",
      image : "./ecom.jpg",
      about :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?",
      git : "https://github.com/KingShiv21/Ecom_Backend",
      deployment_link : "#"
    },
    {
      name : "Todo_Frontend",
      image : "./todo.jpg",
      about :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?",
      git : "https://github.com/KingShiv21/todo_frontend",
      deployment_link : "#"
    },
    {
      name : "Todo_frontend",
      image : "./todo.jpg",
      about :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?",
      git : "https://github.com/KingShiv21/todo-backend",
      deployment_link : "#"
    },
    {
      name : "Hodlinfo",
      image : "./hodlinfo.jpg",
      about :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?",
      git : "https://github.com/KingShiv21/hodlinfo",
      deployment_link : "#"
    },
    {
      name : "Login page",
      image : "./login.jpg",
      about :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem?",
      git : "https://github.com/KingShiv21/login1",
      deployment_link : "#"
    },
  ]



  return (
    <div>
      <div className=' bg-cyan-900'>
        <h1 className="py-5 text-2xl sm:text-3xl  text-yellow-500 font-bold text-center">My Personal Projects</h1>
      </div>

      <div className='mt-10 sm:flex sm:flex-wrap justify-center '>
        {projectList.map(
          (project)=>{
           return <ProjectItem image={project.image} name={project.name} about={project.about} git_link={project.git} deployment_link = {project.deployment_link} />
          }
        )}

      </div>
    </div>
  )
}

export default Projects
