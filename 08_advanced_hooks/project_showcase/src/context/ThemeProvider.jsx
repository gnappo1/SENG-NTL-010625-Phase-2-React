import { createContext, useCallback, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = useCallback(
      () => setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode),
      []
    );

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )



}

export default ThemeProvider;