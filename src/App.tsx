import { Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import { Login } from './pages'
import { ProtectedRoutes, PublicRoutes } from './features/authentication'
import routes from './constants/routes'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={routes.login} element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<h1>Test</h1>} />
        </Route>
      </Routes>

      {/* React toastify configuration */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        pauseOnFocusLoss={false}
        transition={Slide}
      />
    </>
  )
}

export default App
