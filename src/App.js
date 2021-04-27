import React from 'react';
import AboutUs from './pages/AboutUs';
import './App.css';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

//........................................................................ Styling--0



//........................................................................ Styling--1

//........................................................................ Logic--0
//........................................................................ Logic--1


//........................................................................ Rendered--0
function App() {

  // Use location will give you an object with a special key
  const location= useLocation();

  return (
    <div className="App">
      <Nav/>
      {/* Switch will make sure that it renders everything that fulfills 
          the path. */}

      {/* Exit before enter will wait after exit till the next mounted component does its animation */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* Exact needs to be added because it will stop right when
              it sees the slash. */}
          <Route path="/" exact>
            <AboutUs/>
          </Route>

          <Route path="/work" exact>
            <OurWork/>
          </Route>

          <Route path="/work/:id">
              <MovieDetail/>
          </Route>

          <Route path="/contact">
            <ContactUs/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App;
//........................................................................ Rendered--1