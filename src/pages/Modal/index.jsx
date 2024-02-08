import React from 'react';

const Modal = ({ project, isOpen, closeModal }) => {
  return (
    <div className="relative">
      <div
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isOpen ? 'fixed' : 'hidden'
        } overflow-y-auto overflow-x-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 `}
      >
        <div className="relative p-4 w-full max-w-full md:max-w-3xl max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                {project?.name || 'Project Details'}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              {project ? (
                <div className="overflow-hidden  rounded-lg has-shadow bg-white shadow">
                  <img
                    className="aspect-video rounded-b-none"
                    src={project.image}
                    alt={project.name}
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <div className="button-container flex justify-evenly p-2">
                      <a href={project.git} target="_blank" rel="noreferrer">
                        <button className="bg-amber-500 hover:animate-pulse hover:bg-amber-300 text-slate-800 font-bold py-2 px-4 rounded-xl inline-flex items-center">
                          Github
                        </button>
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <button className="bg-amber-500 hover:animate-pulse hover:bg-amber-300 text-slate-800 font-bold py-2 px-4 rounded-xl inline-flex items-center">
                          App
                        </button>
                      </a>
                    </div>
                    <p className="text-s text-center">{project.year}</p>
                    <p className="p-1 text-center">{project.description}</p>
                    <div className="flex mt-2 flex-wrap gap-2 text-xs text-white justify-center">
                      {project.tech.map((tech, index) => (
                        <span className='bg-gray-600 p-2 rounded-full' key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p>No project data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;