import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Print from './pages/Print'
import Digital from './pages/Digital'
import Retouching from './pages/Retouching'
import LogoDesign from './pages/LogoDesign'
import About from './pages/About'
import ScrollToTop from './utils/ScrollToTop'


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="App_Container">
          <ScrollToTop>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/print' component={Print} />
              <Route exact path='/digital' component={Digital} />
              <Route exact path='/retouching' component={Retouching} />
              <Route exact path='/logo_design' component={LogoDesign} />
              <Route exact path='/about' component={About} />
            </Switch>
          </ScrollToTop>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
