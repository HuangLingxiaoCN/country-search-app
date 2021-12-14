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

  return (
    <ThemeContext.Provider
      value={{
        themeColor: theme,
        setBlueTheme: () => setTheme(themeContextValue.blueTheme),
        setGreenTheme: () => setTheme(themeContextValue.greenTheme),
        setRedTheme: () => setTheme(themeContextValue.redTheme),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
