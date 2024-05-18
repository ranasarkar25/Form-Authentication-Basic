import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './AuthProvider.jsx'
//import { createContext } from 'react'
//export const AuthContext = createContext();


ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>

  {/* <AuthContext.Provider value = {{
    username:"harshit",
    location:"pune",
  }}> */}

  <AuthProvider>
  {
  /* TO use app in between AuthProvider , uk u need to accept app as children prop */}
    <App/>
  </AuthProvider>
  
  </React.StrictMode>,
)
