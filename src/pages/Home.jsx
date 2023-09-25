import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Home = () => {
  return (
    <div >
      <div className=' bg-black pb-5'>

        <div className=' text-white text-center pt-5' >
          <h1 className=" text-4xl  text-yellow-500 font-bold " >I'm Shivraj </h1>
          <h3 className=" text-xl">Full stack web developer and coder</h3>
          <h1 className=" text-2xl  text-yellow-500 font-bold pt-5" >About me  </h1>

          <ul className=" px-1 text-left  sm:text-center text-sm sm:px-20:px-3:pt-1 ">
            <li className='py-1'>{<ArrowForwardIcon />}Hello, I am Shivraj Singh Rathore from Jaipur,India.</li>
            <li  className='py-1'>{<ArrowForwardIcon/>}I am currently completing my final year of BCA in S.S. Jain Subodh College ,Jaipur</li>
            <li className='py-1'>{<ArrowForwardIcon/>}I am very passionate in computer science field and love to code to generate amazing outputs on our screens</li>
            <li className='py-1'>{<ArrowForwardIcon/>}I am a quick learner ,i started my computer science jouney around 3 years ago and gained soo much knowledge in this field as you can see my Service and Skills section</li>
            <li className='py-1'>{<ArrowForwardIcon/>}I am a Hard worker as you can check my excellent Academics scores.</li>
            <li className='py-1'>{<ArrowForwardIcon/>}I am a Team Player , i created my starting small learning projects with my class friends which aspired me to work in team and collab with each other effecttively </li>

          </ul>

        </div>


        <div className="mt-10 text-xl ">

          <ul className="flex justify-center space-x-5">

            <li><a href='https://wa.me/917665006920' className='py-3 px-3 text-blue-700 bg-gray-900 rounded-md border-2 border-yellow-400'  ><WhatsAppIcon fontSize='large'/></a></li>
            <li><a href='https://www.linkedin.com/in/shivraj-singh-rathore-ba9b57275/' className='py-3 px-3 text-blue-700 bg-gray-900 rounded-md border-2 border-yellow-400' ><LinkedInIcon fontSize='large'/></a></li>
            <li><a href='https://github.com/KingShiv21/' className='py-3 px-3 text-blue-700 bg-gray-900 rounded-md border-2 border-yellow-400' ><GitHubIcon fontSize='large'/></a></li>
          </ul>

        </div>

        <div className=" mt-10 ">
          <img src="./profile.jpg" alt="not found" className=' w-60 h-60 m-auto rounded-full border-4 border-yellow-400' />
        </div>

      </div>

      <div className='mx-2 sm:mx-10'>
        <div className='mt-10'>

          <div>
            <h3 className=' text-2xl font-bold text-center'>Services and Skills</h3>
            <p>
              First, i started my journey in Programming then headed to Web Development. Currently, I am giving my full time in Web Development specially MERN Stack and providing services in both the Frontend and Backend of websites including their database too
            </p>
          </div>

          <div className="my-10">
            <h2 className=' text-xl font-thin '>Front End Web</h2>
            <p>I've very good command over HTML,CSS and JavaScript</p>
            <p>I am skilled in ReactJS and have created many learning to small to large work samples in ReactJS  </p>
            <p>I use TailwindCss and MUI for designing work , also have core knowledge of simple CSS</p>

          </div>

          <div className="my-10">
            <h2 className=' text-xl font-thin '>Back End Web</h2>
            <p> I've good skills of creating APIs </p>
            <p> I use NodeJs , specially its express framework to create fully functional real world based backends like for Ecommerce , NFTs marketlace, etc. </p>
            <p> In Databases , i am skilled in using MySQL and MongoDB both .</p>
          </div>

          <div className="my-10">
            <h2 className=' text-xl font-thin '>Programming</h2>
            <p> I started my Programming or even computer science journey from learning C language ,then jumped to C++ and finally JAVA. Out of all, i gave my most of the time and hardwork on mastering JAVA language. JAVA is my favourite Programming language and i also possesses good knowledge of its framework like Collection framework.
            </p>
            <p>I alse possess good knowledge of Data Structures and Algorithms, learned in Java language</p>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Home
