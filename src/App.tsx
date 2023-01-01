import { Route, Routes } from 'react-router-dom'
import { Login } from './pages'
import routes from './constants/routes'

const App = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
    </Routes>
  )
}

export default App
