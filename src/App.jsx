import "./App.css";
import { Routes, Route } from "react-router";

//////////////////////
//COMPONENTS
/////////////////////
import Header from "./components/header";
import Main from "./components/main";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Testing from "./pages/Testing";
import ProjectsTest from "./pages/ProjectsTest";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Testing />
      <Footer />
    </div>
  );
}

export default App;
