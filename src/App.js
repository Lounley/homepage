import About from './Pages/about';
import Frontpage from './Pages/frontpage';
import { Routes, Route, HashRouter, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Projects from './Pages/projects';


const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter> 
        <Routes>
          <Route exact path="/homepage" element={<Frontpage />} > </Route>
          <Route path="/homepage/about" element={<About />} > </Route>
          <Route path="/homepage/projects" element={<Projects />} > </Route>
        </Routes>
      </BrowserRouter> 
    </div>

  );
}

export default App;
