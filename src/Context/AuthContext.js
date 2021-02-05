import { createContext } from "react";
import React, {createContext} from 'react';

const AuthContext = createContext({});

const AuthProvider = (props)=> {

   
   const authContextValue = {};
   return (
      <AuthContext.Provider value={authContextValue} {...props}></AuthContext.Provider>
   )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth}