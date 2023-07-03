import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services'
import ConatctUs from './components/ContactUs';
import Home from './components/Home';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Switch>
          <>
            <Route exact path="" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/aboutUs" component={ConatctUs} />
            <Route exact path="/projects" component={Projects} />
          </>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
