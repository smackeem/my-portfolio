import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

export default function Education() {
  return (
    <div className="m-14">
      <h1 className="text-center font-extrabold text-orange-600 text title mt-5">
        EXPERIENCE
      </h1>
      <VerticalTimeline className="mt-14" lineColor={"#263238"} animate={"true"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/2023 - Present"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          
          contentStyle={{ background: "#263238", color: "white"}}
          dateClassName={"text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title orange-text accent-4 font-extrabold text-xl">
            Logistical Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            United States Army Reserve - Atlanta, Georgia
          </h4>
          <p>
            Supervises and performs inventory management or warehouse functions
            pertaining to receipt, storage, distribution, and issue, and
            maintains equipment records and parts. <br />
            <br />
            Awarded Automated Logistical Specialist Certificate from The
            Quartermaster School, Fort Greg-Adams - June 2023.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10/2023 - 01/2024"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          
          contentStyle={{ background: "#263238", color: "white"}}
          dateClassName={"text-slate-900"}
        >
          <h1 className="vertical-timeline-element-title orange-text accent-4 font-extrabold text-xl">General Assembly</h1>
          <h4 className="vertical-timeline-element-subtitle">
            Atlanta, Georgia
          </h4>
          <p>
            Full-Stack Software Engineering Immersive program with 420+ hours
            focused on product development fundamentals, object-oriented
            programming, MVC frameworks, data modeling, and team collaboration
            strategies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          date="08/2022 - 12/2022"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          
          contentStyle={{ background: "#263238", color: "white"}}
          dateClassName={"text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title font-extrabold orange-text accent-4 text-xl">
            Warehouse Operations Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Amazon - La Vergne, Tennessee
          </h4>
          <p>
            Ensured products met stringent quality requirements before
            facilitating a seamless transition from receipt to dispatch. <br />
            <br />
            Received, recorded and put-away inventory in appropriate storage or
            issue bins.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10/2021 - 04/2022"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          
          contentStyle={{ background: "#263238", color: "white"}}
          dateClassName={"text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title font-extrabold orange-text accent-4 text-xl">
            Front Desk Supervisor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Noelle - Nashville, Tennessee
          </h4>
          <p>
            Enhanced operational efficiency by leveraging individual strengths
            within the team, fostering a high-performing environment, and
            yielding a 15% increase in 5-star customer ratings <br /> <br />
            Established a monitoring system for timely assessments and
            replenishment, reducing departmental expenses by 11%.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/2019 - 07/2021"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          
          contentStyle={{ background: "#263238", color: "white"}}
          dateClassName={"text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title font-extrabold orange-text accent-4 text-xl">
            Software Engineer I
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            JSEZA - Kingston, Jamaica
          </h4>
          <p>
            Coordinated with the design team to optimize UI/UX on 8 projects
            which resulted in a 22% decrease in bounce rate. <br /> <br />
            Implemented robust processes for cleanup and performance improvement
            that minimized downtime by 37%.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2015 - 07/2019"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          
          contentStyle={{ background: "#263238", color: "white"}}
          dateClassName={"text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title font-extrabold orange-text accent-4 text-xl">
            Bachelor of Arts in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The University of the West Indies, Mona
          </h4>
          <p>
            A 4-year comprehensive curriculum encompassing fundamental aspects
            of computer systems, software development, algorithms, and effective
            problem-solving techniques.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          
        />
      </VerticalTimeline>
    </div>
  );
}
