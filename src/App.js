import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import NumbersPage from './components/layout/NumbersPage';

const App = () => {
  return (
    <Router>
      <Route exactPath='/' component={NumbersPage}></Route>
    </Router>
  );
};

export default App;
