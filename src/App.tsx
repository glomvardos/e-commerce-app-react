import { Route, Routes } from 'react-router-dom'
import { Login } from './pages'
import routes from './constants/routes'
import { Slide, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.login} element={<Login />} />
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
