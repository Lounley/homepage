import About from './Pages/about';
import Frontpage from './Pages/frontpage';
import { Routes, Route, HashRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Projects from './Pages/projects';


const App = () => {
  return (
    <div className="">
      <Navbar />
      <HashRouter> 
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </HashRouter> 
    </div>

  );
}

export default App;
