import React, { useContext , useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext();

function AuthProvider({children}) {
const[auth,setauth] = useState({username:"",password:""});

    return (
        <AuthContext.Provider value={{auth:auth,setauth:setauth}}>

            {/* //when key & value name is same like auth key & auth val then auth : auth = auth , setauth : setauth = setauth; */}
            {children}
        </AuthContext.Provider>
  )
}

//we need to import usecontext & authcontext separately in BasicDetail.jsx . To import in a single line we ca call useAuth();
export function useAuth()
{
  return useContext(AuthContext);
} 

export default AuthProvider
