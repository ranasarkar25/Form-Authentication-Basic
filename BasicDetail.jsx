import React from 'react'
import { useAuth } from './AuthProvider'

function BasicDetail() {
  const {auth,setauth} = useAuth();

  function handlelogut()
  {
    setauth({username:"",password:""});
  }

     return (
     <>    
     <h1>Name :{auth.username}</h1>
     <h1>Password:{auth.password}</h1>
     <button onClick={handlelogut}>Logout</button>
     </>
  )

}

export default BasicDetail
