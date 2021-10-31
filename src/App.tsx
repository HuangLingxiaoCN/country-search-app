import React from 'react'

import { ContextProvider } from './context/themeContext'
import Routes from './components/Routes'

export default function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}
