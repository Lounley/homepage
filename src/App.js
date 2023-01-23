import React from "react";
import About from './Pages/about';
import Frontpage from './Pages/frontpage';
import { Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Projects from './Pages/projects';


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Frontpage />} /> 
        <Route exact path="/about" element={<About />} /> 
        <Route exact path="/projects" element={<Projects />} /> 
      </Routes>
    </div>

  );
}

export default App;
