import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectItem = ({image,name,about,git_link,deployment_link}) => {
  return (
    <div className='mx-5 sm:w-1/4 sm:mx-5 my-5  text-center border-0 border-black py-3 shadow-2xl'>
      <img src={image} alt="Image not found" className=' w-48 h-48 mx-auto'/>
      <h1 className=' font-bold text-2xl'>{name}</h1>
      <a href={git_link}><GitHubIcon fontSize='large'/></a>
      <p className=' font-thin'>{about}</p>
      <a href={deployment_link}>Deployment link</a>
    </div>
  )
}

export default ProjectItem
