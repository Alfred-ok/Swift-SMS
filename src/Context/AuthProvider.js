import React, { createContext, useState } from 'react'


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {


  const [role, setRole] = useState('')
  //const [success, setSuccess] = useState(false)
  const [username, setUsername] = useState('')
  const [authToken, setAuthToken] = useState({})
  const [purchaseSmsUnit, setPurchaseSmsUnit] = useState({
    price:"",
    quantity:""
  })

  

  return (
    <AuthContext.Provider value={{role, setRole, username, setUsername, authToken, setAuthToken, purchaseSmsUnit, setPurchaseSmsUnit}}>
        {children}
    </AuthContext.Provider>
  )
}


export default AuthContext