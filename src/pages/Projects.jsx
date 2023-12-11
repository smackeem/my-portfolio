import { useState, useEffect } from "react";
const Projects = () => {
    const [projects, setProjects] = useState();

    const fetchData = async() =>{
        const response = await fetch('../../projects.json');
        const data = await response.json()
        setProjects(data)
    }

    useEffect(()=>{
        fetchData()
    }, [])
     
    const loaded = () => {
        return projects.map((project, idx) => (
          <div key={idx}>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        ));
      };

    return projects ? loaded() :  'Loading'
};

export default Projects;