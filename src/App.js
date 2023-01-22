import About from './Pages/about';
import Frontpage from './Pages/frontpage';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Projects from './Pages/projects';


const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter> 
        <Routes>
          <Route path='/homepage/' element={<Frontpage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter> 
    </div>

  );
}

export default App;
