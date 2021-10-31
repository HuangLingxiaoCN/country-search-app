import React, { createContext } from 'react'
import { useState } from 'react'

const initialContext = {
  themeColor: {},
  setBlueTheme: () => {},
  setGreenTheme: () => {},
  setRedTheme: () => {},
}

const themeContextValue = {
  blueTheme: { backgroundColor: 'blue' },
  greenTheme: { backgroundColor: 'green' },
  redTheme: { backgroundColor: 'red' },
}

export const ThemeContext = createContext(initialContext)

export const ContextProvider = (props: any) => {
  const [theme, setTheme] = useState(themeContextValue.blueTheme)

  const setBlueTheme = () => {
    setTheme(themeContextValue.blueTheme)
  }

  const setGreenTheme = () => {
    setTheme(themeContextValue.greenTheme)
  }

  const setRedTheme = () => {
    setTheme(themeContextValue.redTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        themeColor: theme,
        setBlueTheme: setBlueTheme,
        setGreenTheme: setGreenTheme,
        setRedTheme: setRedTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
