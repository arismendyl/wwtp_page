import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home';
import Login from './components/login'
import UserPage from './components/userpage';
import { AuthProvider } from './components/auth'
import PrivateRoute from './components/PrivateRoute';
import ConditionalRoute from './components/conditionalRoute';

class App extends Component {
constructor(props){
  super(props);
  this.state={apiRes:''};
}

  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home}/>
              <ConditionalRoute exact path='/login' component={Login}/>
              <PrivateRoute exact path='/user' component={UserPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
