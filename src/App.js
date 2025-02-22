import React, { Suspense, useEffect , useContext} from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import AuthContext from './Context/AuthProvider'
import RequireAuth from './Context/RequireAuth'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Welcome = React.lazy(() => import('./views/homepage/Welcome'))


const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const {showdashboard} = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Suspense
        fallback={<div className="pt-3 text-center">
          <CSpinner color="primary" variant="grow" />
        </div>}
      >
        <Routes>
       
          { /**public routes */}
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500/>} />
          <Route exact path="/" name="welcome" element={<Welcome/>} />

          {/** Protected route */}
          <Route element={<RequireAuth/>}>
            <Route exact path="*" name="Home" element={<DefaultLayout />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>

  )
}

export default App
