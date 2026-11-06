import {type ReactNode, useState, useEffect} from "react";
import {ThemeContext} from "./ThemeContext";

export const ThemeProvider = ({children}: { children: ReactNode }) => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const handelToggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{isDarkMode, handelToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
