import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { ReactQueryDevtools } from 'react-query/devtools'
import { routes } from './routes/routes'
import { RenderIf } from './components/UI/RenderIf'

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={routes(queryClient)} />
      {/* React toastify configuration */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        pauseOnFocusLoss={false}
        transition={Slide}

      />
      <RenderIf isTrue={process.env.NODE_ENV === 'development'}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </RenderIf>
    </QueryClientProvider>
  )
}

export default App
