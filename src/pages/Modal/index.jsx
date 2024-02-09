import React from "react";
import { Carousel } from "flowbite-react";
import { Flowbite, } from 'flowbite-react';

const customTheme = {
  carousel: {
    root: {
      base: "relative h-full w-full",
      leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
      active: {
        off: "bg-amber-700/50 hover:bg-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-amber-700 dark:bg-gray-800"
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-700/30 group-hover:bg-gray-700/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-700 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-amber-700 dark:text-gray-800 sm:h-6 sm:w-6"
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x"
    }
  }
};

const Modal = ({ project, isOpen, closeModal }) => {
  return (
    <div className="relative">
      <div
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isOpen ? "fixed" : "hidden"
        } overflow-y-auto overflow-x-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 `}
      >
        <div className="relative p-4 w-full max-w-full md:max-w-3xl max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h1 className="text-4xl text-center font-extrabold text-gray-900 dark:text-white">
                {project?.name || "Project Details"}
              </h1>
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
                <div className="overflow-hidden ">
                  <div className="h-56 sm:h-64 xl:h-80 2xl:h-100">
                  <Flowbite theme={{ theme: customTheme }}>
                    <Carousel className="z-depth-3 " slide={false}>
                      {project?.photos.map((photo, i) => (
                        <img key={i} src={photo} alt="..." />
                      ))}
                    </Carousel>
                    </Flowbite>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="button-container flex justify-center gap-4 p-2">
                      <a href={project.git} target="_blank" rel="noreferrer">
                        <button className="bg-amber-500 hover:animate-bounce z-depth-3  hover:bg-amber-300 text-slate-800 font-bold py-2 px-4 rounded-xl inline-flex items-center">
                          Github
                        </button>
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <button className="bg-amber-500 hover:animate-bounce z-depth-3  hover:bg-amber-300 text-slate-800 font-bold py-2 px-4 rounded-xl inline-flex items-center">
                          App
                        </button>
                      </a>
                    </div>
                    <p className="p-1 text-center font-bold text-lg">{project.description}</p>
                    <div className="flex mt-2 flex-wrap gap-2 text-xs justify-center">
                      {project.badges.map((tech, index) => (
                        <img key={index} src={tech} className="z-depth-3" />
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
