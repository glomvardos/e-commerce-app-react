import { Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import { Login, Users } from './pages'
import { Layout } from './containers'
import { AddUser, DisplayUsers } from './features/users'
import { ProtectedRoutes, PublicRoutes } from './features/authentication'
import { routes } from './constants/routes'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={routes.login} element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path={routes.home} element={<Users />}>
              <Route index element={<DisplayUsers />} />
              <Route path={routes.addUser} element={<AddUser />} />
            </Route>
          </Route>
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
