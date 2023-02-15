import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './global-styles'
import { i18n } from './features/i18n'
import { ModalProvider } from './features/common/modal'

i18n

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ModalProvider>
        <GlobalStyles />
        <App />
      </ModalProvider>
    </React.StrictMode>
  </BrowserRouter>
)
