import About from './Pages/about';
import Frontpage from './Pages/frontpage';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Projects from './Pages/projects';


const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter basename="/homepage"> 
        <Routes>
          <Route exact path="/" element={<Frontpage />} > </Route>
          <Route path="/about" element={<About />} > </Route>
          <Route path="/projects" element={<Projects />} > </Route>
        </Routes>
      </BrowserRouter> 
    </div>

  );
}

export default App;
