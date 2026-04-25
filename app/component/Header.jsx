"use client"
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import Link from 'next/link'
import useTheme from "../context/useTheme";
function Header() {
    const { theme, themeToggler } = useTheme();
    console.log(theme);

    return (
        <header className={`headerContainer filter ${theme === "light" ? "bg-white text-black drop-shadow-[2px_2px_3px_#ccc]!" : "bg-[#2b3945] text-white drop-shadow-[2px_2px_3px_#202c37]!"} transition-all duration-300 ease-in-out`}>
            <div className="container">
                <div className="header flex items-center justify-between py-6!">
                    <h1 className="title text-[32px] font-bold"><Link className="logo" href="/">Where in the world?</Link></h1>
                    <div className="wraper flex flex-row-reverse gap-2.5 items-center">
                       {theme === "light" ? <Sun /> : <Moon />}
                        <div
                            onClick={themeToggler}
                            className={`toggle-btn cursor-pointer w-13 ${theme === "light" ? "bg-[#ccc] drop-shadow-[1px_1px_5px_#e7e7e7]" : "bg-[#376fcb]"
                                } transition-all duration-500 rounded-[30px] h-5 relative `}
                        >
                            <div
                                className={`w-6 h-6 rounded-full ${theme === "light" && "drop-shadow-[1px_1px_5px_#ccc]"} absolute top-1/2 -translate-y-1/2 transition-all duration-500
                                    ${theme === "light"
                                        ? "translate-x-0 left-0 bg-gray-100"
                                        : "translate-x-7 left-0 bg-gray-100"
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header