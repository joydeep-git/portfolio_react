import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Icons
import { GraduationCapIcon as Study, BriefcaseIcon as Job } from '../icons/IconPack';


import "../SCSS/Experience.scss";

function Experience() {

  const style = {
    background: "#023047",
    color: "#ffffff",
  }


  const timeline = [
    {
      title: "Frontend Developer",
      place: "Digital Woods, Siliguri",
      type: "job",
      duration: "February 2024 - Present",
    },
    {
      title: "Frontend Development",
      place: "Skillsafari",
      type: "study",
      duration: "2023 - 2024",
    },
    {
      title: "ITES Executive",
      place: "iMerit Technology Services Pvt Ltd, Kolkata, West Bengal",
      type: "job",
      duration: "July 2021 - December 2022",
    },
    {
      title: "Diploma in Graphic Design",
      place: "Anudip Foundation, Kolkata, West Bengal",
      type: "study",
      duration: "2020 - 2021",
    },
    {
      title: "Certificate Course in Desktop Publishing",
      place: "Tribeni Commercial College, Tribeni, West Bengal",
      type: "study",
      duration: "2019 - 2020",
    },
    {
      title: "B.Sc Graduation",
      place: "Sreegopal Banerjee College, Magra, West Bengal",
      type: "study",
      duration: "2018 - 2021",
    },
    {
      title: "High School Diploma",
      place: "Magra Uttam Chandra High School, Magra, West Bengal",
      type: "study",
      duration: "2010 - 2018",
    },
  ];


  return (
    <div className="Experience">
      <VerticalTimeline>

        {
          timeline.map((val, index) => {
            return (
              <VerticalTimelineElement key={val.title + index} iconStyle={style} date={val.duration} className='style' icon={val.type === "job" ? <Job /> : <Study />}>
                <h2>{val.title}</h2>
                <p>{val.place}</p>
              </VerticalTimelineElement>
            )
          })
        }

      </VerticalTimeline>
    </div>
  )
};
export default Experience;
