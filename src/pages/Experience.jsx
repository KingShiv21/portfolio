import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>


        <VerticalTimelineElement
        icon={<SchoolIcon/>}
        iconStyle={{ background: '#3e497a' ,color : "white" }}
        >

            <h3 className=' font-bold text-1xl'>A small achievement in Academics</h3>
            <p>Got 19th rank in all over India OXYOPIA exam 2016 (District rank 13th, School 1st)</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        icon={<SchoolIcon/>}
        iconStyle={{ background: '#3e497a' ,color : "white" }}
        >

            <h3 className=' font-bold text-1xl'>10th Class</h3>
            <p> Board of Secondary Education ,Rajasthan</p>
            <p> School : N.M. Internationl School ,Jaipur</p>
            <p> Passing Year : 2019 </p>
            <p> Percentage : 84 % </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        icon={<SchoolIcon/>}
        iconStyle={{ background: '#3e497a' ,color : "white" }}
        >

            <h3 className=' font-bold text-1xl'>12th Class</h3>
            <p> Board of Secondary Education ,Rajasthan</p>
            <p> School : N.M. Internationl School ,Jaipur</p>
            <p> Stream : Science-Maths</p>
            <p> Passing Year : 2021 </p>
            <p> Percentage : 95.2 % </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        icon={<SchoolIcon/>}
        iconStyle={{ background: '#3e497a' ,color : "white" }}
        >

            <h3 className=' font-bold text-1xl'>College</h3>
            <p> S.S. Jain Subodh Autonomous College ,Jaipur</p>
            <p> Course : BCA </p>
            <p> Timeline : 2021-24</p>
            <p> 1st Semester : </p>
            <p> 2nd Semester : </p>
            <p> 3rd Semester : </p>
            <p> 4th Semester : </p>
            <p> 5th Semester : </p>
            <p> 6th Semester : </p>
            {/* <a href="tel:+917665006920">Call me</a> */}

        </VerticalTimelineElement>


        {/* sim add more elements */}

      </VerticalTimeline>

    </div>
  )
}

export default Experience
