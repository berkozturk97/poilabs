import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import  store  from './redux/store';
import Navigation from './components/Navigation';
import Campaigns from './views/Campaigns';
import Settings from './views/Settings';

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Navigation />
    <Router history={hist}>
      <Switch>
         <Route exact path='/' component={App} />
         <Route exact path='/campaigns' component={Campaigns} />
         <Route exact path='/settings' component={Settings} />
      </Switch>
      
    </Router>
   
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
