import { Routes, Route } from 'react-router'
import './App.css'

//////////////////////
//COMPONENTS
/////////////////////
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {


  return (

      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
 
  )
}

export default App
