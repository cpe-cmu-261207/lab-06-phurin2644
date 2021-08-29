import React from 'react';
import Navbar from './components/Navbar';
import Current from './components/Current';
import About from './components/About';
import Select from './components/Select';
import Show from './components/Show';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
         {/* template for /current */}
        <Route exact path='/'>
          <Current />
        </Route>
        <Route path='/current'>
          <Current />
        </Route>

        {/* template for /history/select */}
        <Route path='/history/select'>
          <Select />
        </Route>

         {/* template for /history/result */}
        <Route path='/history/result'>
          <Show />
        </Route>

        {/* template for about me */}
        <Route path='/about'>
          <About />
        </Route>

      </Switch>

      
    </Router>
  );
}

export default App;
