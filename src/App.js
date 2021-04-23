import React from 'react';
import AboutUs from './pages/AboutUs';
import './App.css';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import {Switch, Route} from 'react-router-dom';

//........................................................................ Styling--0



//........................................................................ Styling--1

//........................................................................ Logic--0
//........................................................................ Logic--1


//........................................................................ Rendered--0
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* Switch will make sure that it renders everything that fulfills 
          the path. */}
      <Switch>
        {/* Exact needs to be added because it will stop right when
            it sees the slash. */}
        <Route path="/" exact>
          <AboutUs/>
        </Route>

        <Route path="/work">
          <OurWork/>
        </Route>

        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
//........................................................................ Rendered--1