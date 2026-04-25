"use client"

import { useContext } from "react"
import themeContext from "./themeContext"

function useTheme() {
    return useContext(themeContext)
}

export default useTheme;