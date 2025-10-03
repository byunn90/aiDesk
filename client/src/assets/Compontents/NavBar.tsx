import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div>
          <h1 className="font-bold text-xl">aiDesk</h1>
        </div>
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-blue-500">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-500">Projects</li>
          <li
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setOpen(true)}
          >
            Settings
          </li>
        </ul>
        <button className="rounded-md px-4 py-2 text-white bg-green-500 hover:bg-green-600">
          Login
        </button>
      </nav>

      {/* Overlay Popup */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative rounded-2xl bg-white p-8 shadow-2xl w-[400px] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 rounded-full p-2 hover:bg-gray-100"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Content */}
            <h2 className="text-xl font-bold mb-4 text-center">
              AiDesk Settings 🤖
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Here are your quick setup instructions:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Follow step one</li>
              <li>Follow step two</li>
              <li>Follow step three</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
