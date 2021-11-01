// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Services from './components/Services/Services';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Coming from './components/Coming/Coming';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Details from './components/Details/Details';
// import PrivateDetails from './components/Details/privateDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AddService from './components/AddService/AddService';
import OurManagement from './components/OurManagement/OurManagement';


function App() {

  return (

    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>

          <PrivateRoute path="/details">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <Route path="/addService">
            <AddService></AddService>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute >
          <Route path="/coming">
            <Coming></Coming>
          </Route>

          <PrivateRoute path="/management">
            <OurManagement></OurManagement>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
