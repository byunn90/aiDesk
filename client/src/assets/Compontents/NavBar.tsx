import { useState } from "react"

export function NavBar() {
 const [open, setOpen] = useState(false);
  
  function OpenClose() {
    
  }

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
  </div>
  <div> {/* Right section: user/auth */}
    <button className="bg-[rbg(34,197,94)] bg:hover">Login</button>
  </div>
</nav>

    )
}