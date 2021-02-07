import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import SignIn from './pages/signIn.page';
import SignUp from './pages/signup.page';
import User from './pages/user.page';

const App = () => {
  return (
    <Router>
      <Switch>
       <Route path='/signin' exact>
        <SignIn/>
       </Route>
       <Route path='/signup' exact>
         <SignUp/>
       </Route>
       <Route path='/user/:userid' exact>
         <User/>
       </Route>
       <Redirect to="/signin" />
       </Switch>
    </Router>
  );
}

export default App;
