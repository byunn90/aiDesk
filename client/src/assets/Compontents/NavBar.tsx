import { useEffect, useState } from "react"

export function NavBar() {
 const [open, setOpen] = useState(false);
  
  // function OpenClose() {
    
  // }

//  useEffect(() => {
//   if (!open) return;
  
//  })

  return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
  <div> {/* Left section: brand/logo */}
    <h1>aiDesk</h1>
  </div>
  <div> {/* Center or right section: nav links */}
    <ul className="flex gap-6">
      <li>Dashboard</li>
      <li>Projects</li>
      <li onClick={() => setOpen(true)}>Settings</li>
    </ul>
     {open && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
    <div className="rounded-lg bg-white p-6 shadow-xl">
    <h2 className="text-lg font-semibold">Welcome to settings for Ai desk 🤖</h2>
  </div>
</div>
  )}
  </div>
  {/* Settings Open Overlay */}
 
  <div> {/* Right section: user/auth */}
    <button className="bg-[rbg(34,197,94)] bg:hover">Login</button>
  </div>
</nav>

    )
}