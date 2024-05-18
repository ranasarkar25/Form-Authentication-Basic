import React, { useState } from 'react'
import { useAuth } from './AuthProvider'
import BasicDetail from './BasicDetail';
function UserProfile() 
{

const { auth , setauth } = useAuth();

function handlelogin()
{
    setauth({username:"harsh",password:"sheldom"});
}

  return (
   <>
   <h1>Users Profile</h1>
   {auth.username ? <BasicDetail/> : <button onClick={handlelogin}>Login</button>}
   </>
  )
}

export default UserProfile
