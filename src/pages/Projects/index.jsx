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
      <div className="container">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="project-card shadow-lg shadow-zinc-700 rounded-lg">
              <h1 className="text-center p-2">{project.name}</h1>
              <img className="image" src={project.image} alt="simon"/>
              <p className="p-2 text-center">{project.description}</p>
              <div className="button-container">
              <a href={project.git} target="_blank" rel="noreferrer">
                <button className="button button-gradient rounded-full">Github</button>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <button className="button button-gradient rounded-full">App</button>
              </a>
              </div>
              
            </div>
          );
        })}
      </div>
    )
  };

  return projects ? loaded() : 'Loading'
};

export default Projects;