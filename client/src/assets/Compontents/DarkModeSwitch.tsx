import React, { useState, useEffect } from "react"
// Dark Mode components 
export function DarkMode() {
 const [dark, setDark] = useState(false)
    function handleClick() {
    setDark(prev => !prev);
    console.log("dark mode is now:", !dark);
    }
    useEffect(() =>  {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);
    return(
    <button
        onClick={handleClick}
        className="px-2 py-0.5 text-sm rounded-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition">
        {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
    )
}

