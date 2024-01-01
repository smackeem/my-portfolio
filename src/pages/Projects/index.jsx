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
      <div className="container flex flex-col justify-center mr-t">
        <div>
        <h1 className="text-orange-600 title text-center">PROJECTS</h1>
        </div>
        
        <div className="flex flex-wrap justify-evenly mt-14">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="overflow-hidden rounded-lg has-shadow w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              
              <img className="aspect-video rounded-b-none" src={project.image} alt="simon"/>
              <div className='p-4 flex flex-col gap-2'>
              <div className='text-s text-center'>
      2023
    </div>
    <div className='flex flex-wrap gap-2 text-xs'>
              {project.tech.map((t, i) =>{
                return (
                
                    <span  key={i}  >{t}</span>
                
                  
                )
              }
              )}
            </div>
              <h3 className="text-xl font-semibold text-center p-1">{project.name}</h3>
              <div>
              <p className="p-1 text-center text-sm">{project.description}</p>
              </div>
              <div className="button-container p-2">
              <a href={project.git} target="_blank" rel="noreferrer">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">Github</button>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">App</button>
              </a>
              </div>
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