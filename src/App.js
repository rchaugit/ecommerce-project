import './App.module.scss';
import Navbar from './Containers/Navbar';
import Home from './Containers/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>  
          <div className="App">
            <Navbar />
           <Home />
          </div>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
