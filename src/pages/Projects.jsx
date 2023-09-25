import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

  let projectList = [
    {
      name : "Ecommerce Backend",
      image : "./ecom.jpg",
      about :  "Complete set of APIs created in Node.js ready for connecting to any suitable Frontend comes with Authentication and MongoDB as database",
      git : "https://github.com/KingShiv21/Ecom_Backend",
      deployment_link : "#"
    },
    {
      name : "Todo_Frontend",
      image : "./todo.jpg",
      about :  "Front end of todo app using React and Css styled ,ready to be connected to backend to manage its database. Tasks support all CRUD operations ",
      git : "https://github.com/KingShiv21/todo_frontend",
      deployment_link : "#"
    },
    {
      name : "Todo_frontend",
      image : "./todo.jpg",
      about :  "using Node.js and MongoDB as database, it is ready to be paired with any suitable frontend app of Todo app , support user and their tasks with authentication",
      git : "https://github.com/KingShiv21/todo-backend",
      deployment_link : "#"
    },
    {
      name : "Hodlinfo",
      image : "./hodlinfo.jpg",
      about :  "It is a sigle page application to show data of top 10 Bitcoins in INR ,created through Node.js and EJS (frontend is not separately required)",
      git : "https://github.com/KingShiv21/hodlinfo",
      deployment_link : "#"
    },
    {
      name : "Login page",
      image : "./login.jpg",
      about :  "Simple register, login , logout api created in Node.js and can be used in any application",
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
