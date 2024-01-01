import { Routes, Route } from "react-router";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import './Main.css'
import Testing from "../../pages/Testing";
import ProjectsTest from "../../pages/ProjectsTest";

const Main = () => {
    return (
        <main className="main">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/testing' element={<Testing />} />
            <Route path='/pt' element={<ProjectsTest />} />
          </Routes>
        </main>
    )
}

export default Main;