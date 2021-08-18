/* eslint-disable */
import React, { useEffect } from 'react'
import DailyTasks from './components/dailyTasks/DailyTasks';
import EnterTasks from './components/enterTasks/EnterTasks';
import ViewTasks from './components/viewTasks/ViewTasks';
import Login from './components/auth/Login';
import Home from './components/main/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';

import { Provider } from 'react-redux';
import { store } from './store';
import { getUser, loginCheck } from './actions/auth';

function App() {
  useEffect(() => {
    store.dispatch(loginCheck());
    store.dispatch(getUser());
  }, [])

  return (
    <Provider store={store}>
      {/* <Router>
        <div className="container mt-5">
          <Switch>
            <Route exact path='/' component={DailyTasks} />
            <Route exact path='/enter' component={EnterTasks} />
            <Route exact path='/view' component={ViewTasks} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router> */}

      <Router>
        <div className="container mt-5">
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>


    </Provider>
  );
}

export default App;
