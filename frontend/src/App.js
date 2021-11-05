import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
