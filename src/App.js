import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Packages from './Component/Packages/Packages';
import NotFound from './Component/NotFound/NotFound';
import Events from './Component/Events/Events';
import AboutUs from './Component/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/events">
              <Events></Events>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
