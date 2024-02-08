import "./App.css";

//////////////////////
//COMPONENTS
/////////////////////
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Education from "./pages/Education";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Modal from "./pages/Modal";
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <div className="App">
      <section className="home">
      <Home />
      </section>

      <section className="about">
      <About />
      </section>
          
      <section className="projects">
      <Projects />
      </section>

      <section className="ed">
      <Education />
      </section>

      <section className="contact ">
      <Footer />
      </section>
      
    </div>
  );
}

export default App;
