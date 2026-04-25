"use client"


import { useEffect, useState } from "react";
import themeContext from "./themeContext";

function ThemeProvider ({children}){
 const [theme , setTheme] = useState("light");
 
 useEffect(() =>{
   const savedTheme = localStorage.getItem("theme");
   if(savedTheme){
    setTheme(savedTheme)
    document.documentElement.className = savedTheme;
   }
 }, [])

function themeToggler(){
    setTheme((pre) => {
        const newTheme = pre === "light" ? "dark" : "light";
         localStorage.setItem("theme", newTheme);
         document.documentElement.className = newTheme;
         return newTheme;
    });
   
}

return (
    <themeContext.Provider value={{theme , themeToggler}}>
        {children}
    </themeContext.Provider>
)

}

export default ThemeProvider;