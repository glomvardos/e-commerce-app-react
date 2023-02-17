import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import GlobalStyles from './global-styles'
import { i18n } from './features/i18n'
import { ModalProvider } from './features/common/modal'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
