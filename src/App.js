import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Packages from './Component/Packages/Packages';
import NotFound from './Component/NotFound/NotFound';
import Events from './Component/Events/Events';
import AboutUs from './Component/AboutUs/AboutUs';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Breakfast from './Component/AllServices/Breakfast';
import Lunch from './Component/AllServices/Lunch';
import Dinner from './Component/AllServices/Dinner';
import Desert from './Component/AllServices/Desert';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
              <PrivateRoute path="/breakfast">
                <Breakfast></Breakfast>
              </PrivateRoute>
              <PrivateRoute path="/lunch">
                <Lunch></Lunch>
              </PrivateRoute>
              <PrivateRoute path="/dinner">
                <Dinner></Dinner>
              </PrivateRoute>
              <PrivateRoute path="/desert">
                <Desert></Desert>
              </PrivateRoute>
              <Route path="/events">
                <Events></Events>
              </Route>
              <Route path="/aboutus">
                <AboutUs></AboutUs>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
