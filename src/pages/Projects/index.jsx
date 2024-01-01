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
        <h1 className="text-orange-600 title">PROJECTS</h1>
        <div className="grid grid-cols-4 gap-4">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              
              <img className="image rounded-lg" src={project.image} alt="simon"/>
              {/* {project.tech.map((t, i) =>{
                return (
                
                    <span  key={i} >{t}</span>
                
                  
                )
              }
              )} */}
            
              <h1 className="text-center p-2">{project.name}</h1>
              <p className="p-2 text-center text-sm">{project.description}</p>
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
      </div>
    )
  };

  return projects ? loaded() : 'Loading'
};

export default Projects;