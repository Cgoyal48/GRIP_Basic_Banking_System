import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { Route, Switch, Redirect } from "react-router-dom"; 
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline/>
      <Switch>
        <Redirect exact from="/" to="/home/" />
        <Route exact path="/:page?" render={props => <App {...props} />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
