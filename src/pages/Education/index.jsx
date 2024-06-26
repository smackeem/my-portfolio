import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

export default function Education() {
  return (
    <div className="m-14 text-white font-extrabold md:text-slate-900">
      <h1 className="text-center font-extrabold text-orange-600 text title mt-5">
        EXPERIENCE
      </h1>
      <VerticalTimeline
        className="mt-14"
        lineColor={"#263238"}
        animate={"true"}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/2023 - Present"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          contentStyle={{ background: "#263238", color: "white" }}
          dateClassName={"text-white font-extrabold md:text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title orange-text accent-4 font-extrabold text-xl">
            Logistical Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            United States Army Reserve - Atlanta, Georgia
          </h4>
          <p>
            ● Supervises and performs inventory management or warehouse
            functions pertaining to receipt, storage, distribution, and issue,
            and maintains equipment records and parts. <br />
            <br />● Awarded Automated Logistical Specialist Certificate from The
            Quartermaster School, Fort Greg-Adams - June 2023.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="05/2022 - Present"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          contentStyle={{ background: "#263238", color: "white" }}
          dateClassName={"text-white font-extrabold md:text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title orange-text accent-4 font-extrabold text-xl">
            AI/ML Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Data Annotation - Atlanta, Georgia
          </h4>
          <p>
            ● Collaboratively working with solution architects to pilot Proof of
            Concepts utilizing Azure AI Services and Azure OpenAI Services,
            aiming to enhance our suite of AI/ML applications.
            <br />
            <br />
            ● Currently integrating Azure AI services into project workflows,
            further accelerating delivery speeds, and optimizing real-time data
            analysis for enhanced system performance. <br />
            <br />
            ● Developed 8+ machine learning models, improving prediction
            accuracy by 20% and reducing analysis time by 30%. <br />
            <br />
            ● Optimized data processing pipelines for AI/ML applications,
            handling datasets up to 1TB in size, which resulted in a 50%
            reduction in data preprocessing time and a 25% increase in overall
            system performance. ● Developed 8+ machine learning models,
            improving prediction accuracy by 20% and reducing analysis time by
            30%.
            <br />
            <br />● Optimized data processing pipelines for AI/ML applications,
            handling datasets up to 1TB in size, which resulted in a 50%
            reduction in data preprocessing time and a 25% increase in overall
            system performance.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10/2023 - 01/2024"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          contentStyle={{ background: "#263238", color: "white" }}
          dateClassName={"text-white font-extrabold md:text-slate-900"}
        >
          <h1 className="vertical-timeline-element-title orange-text accent-4 font-extrabold text-xl">
          Full-Stack Software Engineering Bootcamp 
          </h1>
          <h4 className="vertical-timeline-element-subtitle">
          General Assembly - Atlanta, Georgia
          </h4>
          <p>
            ● A Full-Stack Software Engineering Immersive program with 420+ hours
            focused on product development fundamentals, object-oriented
            programming, MVC frameworks, data modeling, and team collaboration
            strategies.
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work "
          date="08/2022 - 12/2022"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          contentStyle={{ background: "#263238", color: "white" }}
          dateClassName={"text-white font-extrabold md:text-slate-900"}
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
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10/2021 - 04/2022"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          contentStyle={{ background: "#263238", color: "white" }}
          dateClassName={"text-white font-extrabold md:text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title font-extrabold orange-text accent-4 text-xl">
            Front Desk Supervisor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Noelle - Nashville, Tennessee
          </h4>
          <p>
            ● Enhanced operational efficiency by leveraging individual strengths
            within the team, fostering a high-performing environment, and
            yielding a 15% increase in 5-star customer ratings <br /> <br />●
            Established a monitoring system for timely assessments and
            replenishment, reducing departmental expenses by 11%.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/2019 - 07/2021"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          contentStyle={{ background: "#263238", color: "white" }}
          dateClassName={"text-white font-extrabold md:text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title font-extrabold orange-text accent-4 text-xl">
            Software Engineer I
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            National Commercial Bank Jamaica Limited - Kingston, Jamaica
          </h4>
          <p>
            ● Collaborated in the development and optimization of the NCB mobile
            banking app, leading to a 30% increase in user adoption and a 25%
            improvement in transaction completion rates.
            <br />
            <br />
            ● Participated in web development projects, focusing on enhancing
            the user interface and user experience of the bank's online banking
            platform, which increased user engagement by 40%.
            <br />
            <br />
            ● Contributed to the integration of new web and mobile app features
            such as mobile check deposit, biometric authentication, and
            real-time notifications, resulting in a 20% rise in daily active
            users.
            <br />
            <br />
            ● Engaged in cross-functional teams to ensure seamless functionality
            between mobile and web applications, improving overall system
            efficiency and user satisfaction.
            <br />
            <br />
            ● Implemented security enhancements across both mobile and web
            platforms, reducing fraud incidents by 30% and bolstering user trust
            and safety.
            <br />
            <br />● Assisted in the creation of a real-time analytics dashboard
            for monitoring web and app performance, providing key insights that
            drove a 35% improvement in targeted marketing strategies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2015 - 07/2019"
          iconStyle={{ background: "#00bfa5", color: "#E1E8ED" }}
          contentStyle={{ background: "#263238", color: "white" }}
          dateClassName={"text-white font-extrabold md:text-slate-900"}
        >
          <h3 className="vertical-timeline-element-title font-extrabold orange-text accent-4 text-xl">
            Bachelor of Arts in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The University of the West Indies, Mona
          </h4>
          <p>
          ● A 4-year comprehensive curriculum encompassing fundamental aspects
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
