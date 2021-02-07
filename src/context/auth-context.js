import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  username:'',
  login: () => {},
  logout: () => {}
});