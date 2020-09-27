import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import NumbersPage from './components/layout/NumbersPage';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exactPath='/' component={NumbersPage}></Route>
      </Router>
    </Provider>
  );
};

export default App;
