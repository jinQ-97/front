import { createContext } from "react"

type ThemeContextType = {
    isDark : boolean
    toggleeTheme : () => void
}

export const ThemeContext = createContext<ThemeContextType | null > (null)>



type ToggleContextType = {
    isOn: boolean
    toggle : () => void
}
export const ToggleContext = createContext<ToggleContextType | null > (null)>