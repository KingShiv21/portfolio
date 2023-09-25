import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <footer className=' bg-black text-white text-center font-thin py-5 ' >
      <h1 className=' text-sm sm:text-base'> &copy; 2023 Shivraj_Singh_Rathore.com</h1>

      <ul className='flex space-x-5 justify-center pt-3' >

        <li><a href='https://www.linkedin.com/in/shivraj-singh-rathore-ba9b57275/'  ><LinkedInIcon /></a></li>
        <li><a href='https://github.com/KingShiv21/'  ><GitHubIcon /></a></li>
        <li><a href='https://wa.me/917665006920'><WhatsAppIcon /></a></li>

      </ul>
      <ul className='flex space-x-5 justify-center pt-3' >
        <li className=' text-white sm:text-blue-900 font-bold border-2 border-yellow-400 rounded-md px-2'><a href="./resume.pdf">My Resume</a></li>
        <li>   <CallIcon /> +91 7665006920</li>
      </ul>
    </footer>
  )
}

export default Footer
