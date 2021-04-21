
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './components/App/App';
import Home from './components/Home/Home';
import CreateStrick from './components/CreateStrick/CreateStrick';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/createstrick' component={CreateStrick}/>
        <Route path='/about' component={About}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
