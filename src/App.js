import React,{useState,useCallback} from 'react';
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
import {AuthContext} from './context/auth-context';

const App = () => {
  const [token, setToken] = useState(false);
  const [username, setUserName] = useState('');
  
  const login = useCallback((username,token) => {
    setUserName(username)
    setToken(token)
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserName(null);
  }, []);
  let routes 
  if(!!token){
    routes=(
    <Switch>
        <Route path={`/user/${username}`} exact>
          <User/>
        </Route>
        <Redirect to={`/user/${username}`} />
     </Switch>
    )
  }else{
    routes =(
    <Switch>
        <Route path='/signin' exact>
          <SignIn/>
        </Route>
        <Route path='/signup' exact>
          <SignUp/>
        </Route>
        <Redirect to="/signin" />
    </Switch>)    
  }
  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: !!token,
      token:token,
      username: username,
      login: login,
      logout: logout
    }}
  >
      <Router>
      {routes}
      </Router>
  </AuthContext.Provider>
  );
}

export default App;
