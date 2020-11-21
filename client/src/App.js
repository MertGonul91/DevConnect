import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => (
  <Router>
    <>
      <Navbar />
      <Route exact path='/' component={Landing} />
    </>
  </Router>
);

export default App;
