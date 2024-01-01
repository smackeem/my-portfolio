import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Testing(){
    return (
        <>
        <h1 className='text-center text-orange-600 title'>Education</h1>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    date="10/2023 - 01/2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">General Assembly</h3>
    <h4 className="vertical-timeline-element-subtitle">Atlanta, Georgia</h4>
    <p>
    Full-Stack Software Engineering Immersive program with 420+ hours focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="01/2019 - 01/2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Junior Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Kingston, Jamaica</h4>
    <p>
    Coordinated with the design team to optimize UI/UX on 8 projects which resulted in a 22% decrease in bounce rate.
    Implemented robust processes for cleanup and performance improvement that minimized downtime by 37%.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="09/2015 - 07/2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Arts in Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">The University of the West Indies, Mona</h4>
    <p>
    A 4-year comprehensive curriculum encompassing fundamental aspects of computer systems, software development, algorithms, and effective problem-solving techniques.
    </p>
  </VerticalTimelineElement> 
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    
  />
</VerticalTimeline>
        </>
    )
}