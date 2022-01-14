import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Banner from './Components/Banner/Banner';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Particles from "react-tsparticles";
import Blogs from './Components/Blogs/Blogs';

function App() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className='Site'>
    <Router>
      <Menubar></Menubar>
        <Switch>
        <Route exact path="/">
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        
        </Route>
  
        <Route exact path="/about">
        <About></About>
        </Route>
        <Route exact path="/blogs">
        <Blogs></Blogs>
        </Route>
        <Route exact path="/products">
        <Projects></Projects>
        </Route>
        <Route exact path="/contact">
        <Contact></Contact>
        </Route>
        <Route exact path="/projectDetails/:id">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
      
    </div>
  );
}

export default App;
