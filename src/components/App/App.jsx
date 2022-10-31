import React from 'react';
import './App.css';
import { Route, HashRouter as Router } from "react-router-dom";
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from "../Comments/Comments";
import Review from '../Review/Review';
import Success from '../Success/Success';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
        </header>

        <Route exact path="/">
          <Feeling />
        </Route>

        <Route exact path="/understanding">
          <Understanding />
        </Route>
        
        <Route exact path="/support">
          <Support />
        </Route>

        <Route exact path="/comments">
          <Comments />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/success">
          <Success />
        </Route>
      </div>
    </Router>
  );
}

export default App;
