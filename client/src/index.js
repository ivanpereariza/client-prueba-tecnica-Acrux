import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import { ModalProviderWrapper } from './contexts/modal.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ModalProviderWrapper>
        <CssBaseline />
        <App />
      </ModalProviderWrapper>
    </Router>
  </React.StrictMode>
)
