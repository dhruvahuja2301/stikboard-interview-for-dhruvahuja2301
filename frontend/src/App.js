import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import DashboardPage from './com/s/DashboardPage';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
            {/* <DashboardPage /> */}
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route> 
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;