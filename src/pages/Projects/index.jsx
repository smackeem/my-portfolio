import { useState, useEffect } from "react";
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState();

  const fetchData = async () => {
    const response = await fetch('../../projects.json');
    const data = await response.json()
    setProjects(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const loaded = () => {
    return (
      <section className="container">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <h1>{project.name}</h1>
              <img src={project.image} alt="simon"/>
              <p>{project.description}</p>
              <a href={project.git}>
                <button>Github</button>
              </a>
              <a href={project.live}>
                <button>live site</button>
              </a>
            </div>
          );
        })}
      </section>
    )
  };

  return projects ? loaded() : 'Loading'
};

export default Projects;