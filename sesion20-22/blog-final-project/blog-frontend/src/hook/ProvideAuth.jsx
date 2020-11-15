import { createContext, useContext, useState } from "react";

const authContext = createContext()

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

const fakeAuth = {
  isAuthenticated: false,
  signin: (cb) => {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 300)
  },
  signout: (cb) => {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 300)
  }
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("Ethien Salinas")
      cb()
    })
  }
  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null)
      cb()
    })
  }
  return {
    user,
    signin,
    signout
  }
}
