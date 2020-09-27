import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import NumbersPage from './components/layout/NumbersPage';
import store from './store';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import BitsPage from './components/layout/BitsPage';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container-body'>
        <Router>
          <Navbar></Navbar>

          <Route exact path='/bits' component={BitsPage}></Route>
          <Route exact path='/' component={NumbersPage}></Route>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
