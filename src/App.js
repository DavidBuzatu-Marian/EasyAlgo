import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import NumbersPage from './components/layout/NumbersPage';
import store from './store';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container-body'>
        <Navbar></Navbar>
        <Router>
          <Route exactPath='/' component={NumbersPage}></Route>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
