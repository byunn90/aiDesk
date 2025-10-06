
import { useState, useEffect } from "react";
import logo from "../../images/AI-desk image.png"

export function NavBar() {
  const [open, setOpen] = useState(false);


useEffect(() => {
  if (!open) return;
  function onKey(e: KeyboardEvent) {
    if (e.key === "Escape") closeModal()
  }
  window.addEventListener("keydown", onKey);

  return () => window.removeEventListener("keydown", onKey)
})

  function openModal() {
    setOpen(true)
  };

  function closeModal() {
    setOpen(false)
  };

  function handleBackdropClick() {
     closeModal();
  };

   function stopClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <>
<nav className="flex justify-between items-center px-6 py-4 bg-gray-200 shadow font-inherit">
  <div className="flex items-center gap-2">
    <img className="h-10 w-10 object-contain" src={logo} alt="Ai-Desk" />

  </div>
  <ul className="flex gap-6 text-pink-500 shadow-md outline-red-100">
    <li className="relative cursor-pointer hover:text-indigo-400">Dashboard</li>
    <li className="relative cursor-pointer hover:text-indigo-400">Projects</li>
    <li
      onClick={openModal}
      className="relative cursor-pointer hover:text-indigo-400"
    >
      Settings
    </li>
  </ul>

  <button className="hover:bg-indigo-700 text-white px-3 py-1 rounded-md font-inherit">
    Login
  </button>
</nav>

{/* Overlay */}
{open && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
  >
    <div
      className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-2xl"
      onClick={stopClick}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={closeModal}
        className="absolute right-3 top-3 text-slate-500 hover:text-slate-900"
        aria-label="Close"
      >
        ✕
      </button>

      <div className="space-y-3 mt-4 text-slate-700 text-sm">
        <h2
          id="settings-title"
          className="text-lg font-semibold text-indigo-600"
        >
          AiDesk Settings 🤖
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Adjust your profile details under <em>Profile</em>.</li>
          <li>Switch between light and dark mode in <em>Appearance</em>.</li>
          <li>Set your notification preferences.</li>
          <li>Click <strong>Save</strong> when done, or press <kbd>Esc</kbd> to close.</li>
        </ol>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => setOpen(false)}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Got it
        </button>
        <button>dark mode</button>
      </div>
    </div>
  </div>
)}

    </>
  );
}
