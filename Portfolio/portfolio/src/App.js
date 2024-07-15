import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbar/Navbars';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Project from './components/Projects/Project';
import Tools from './components/Tools/Tools';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <>
      <Navbars />
      <Home />
      <Education />
      <Project />
      <Tools />
      <Skills />

    </>
  );
}

export default App;
