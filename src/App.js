import react from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Flights from './components/pages/Flights';
import SignUp from './components/pages/SignUp';
import Pay from './components/pages/Pay';
function App() {
  return (
    <>
  
    <Router> 
    <Navbar />
    <switch> 
      <Route path='/' exact component={Home}/>
      <Route path='/services' component={Services} />
      <Route path='/flights' component={Flights} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/pay' component={Pay} />
    </switch>
       </Router>
       <div className="scroll-down"></div>
  </>
  );
}

export default App;
