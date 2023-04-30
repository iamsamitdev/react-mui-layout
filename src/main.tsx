import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import theme from './config/theme'
// import App from './App.tsx'
import LoginScreen from './Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  </React.StrictMode>,
)
