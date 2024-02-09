import { useState, useEffect } from "react";
import Modal from "../Modal";
import { Card } from "flowbite-react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchData = async () => {
    const response = await fetch("../../projects.json");
    const data = await response.json();
    setProjects(data);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const loaded = () => {
    return (
      <div className="flex flex-col  mt-14 justify-center">
        <div>
          <h1 className="text-orange-600 title text-center font-extrabold">
            PROJECTS
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mt-14 md:columns-2 gap-5 md:grid md:grid-flow-col p-6">
          {projects.map((project, idx) => {
            return (
              <Card
                key={idx}
                onClick={() => openModal(project)}
                className="p-2 z-depth-5 bg-gradient-to-bl  border-double shadow-lg  max-w-lg hover:cursor-pointer hover:animate-bounce"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={project.image}
              >
                <div className="p-4 flex flex-col gap-2">
                  <div className="text-s text-center">
                    <p>{project.year}</p>
                  </div>
                  <h3 className="text-3xl font-extrabold text-center p-1 tracking-tight">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((t, i) => {
                      return (
                        <span
                          className="teal accent-4 p-2 rounded-full text-xs font-bold  text-white"
                          key={i}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        {isOpen && selectedProject && (
          <Modal
            project={selectedProject}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        )}
      </div>
    );
  };

  return projects ? loaded() : "Loading";
};

export default Projects;
