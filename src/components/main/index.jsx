import { Routes, Route } from "react-router";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import About from "../../pages/About";
import './Main.css'
import Testing from "../../pages/Education";
import ProjectsTest from "../../pages/ProjectsTest";

const Main = () => {
    return (
        <main className="main">
          {/* <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/testing' element={<Testing />} />
            <Route path='/pt' element={<ProjectsTest />} />
          </Routes> */}
        </main>
    )
}

export default Main;