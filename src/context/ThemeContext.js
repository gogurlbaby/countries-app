import React, { createContext, useState } from "react"

export const ContextTheme = createContext()
const ThemeContext = ({children}) => {
    const[darkTheme, setDarkTheme] = useState(false)

    const themeHandler = () => {
        setDarkTheme((prev) => !prev)
    }
  return (
    <ContextTheme.Provider value={{ darkTheme, themeHandler}}>
      {children}
    </ContextTheme.Provider>
  )
}

export default ThemeContext
