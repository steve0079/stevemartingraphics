import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/responsiveNavbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Print from './pages/Print';
import Digital from './pages/Digital';
import Retouching from './pages/Retouching';
import LogoDesign from './pages/LogoDesign';
import About from './pages/About';


function App() {

  const [state, setState] = useState(false)

  const drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false })
  }

  let backdrop;

  if (state.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <div className="App_Container">
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={state.sideDrawerOpen} />
        {backdrop}
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/print' component={Print} />
            <Route exact path='/digital' component={Digital} />
            <Route exact path='/retouching' component={Retouching} />
            <Route exact path='/logo_design' component={LogoDesign} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
