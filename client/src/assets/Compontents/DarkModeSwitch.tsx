import React, { useState } from "react"
// Dark Mode components 
export function DarkMode() {
 const [dark, setDark] = useState(false)
    function handleClick() {
    setDark(prev => !prev);
    console.log("dark mode is now:", !dark);
    }
    return(
        <div>
            <button onClick={handleClick}>dark mode</button>
        </div>
    )
}

