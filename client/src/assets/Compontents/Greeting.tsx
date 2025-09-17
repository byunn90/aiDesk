import { useState } from "react"

export function Greeting() {
  const [input, setInput] = useState("")

  return(
    <form className="flex items-center gap-2 w-full max-w-3xl p-3 border rounded-xl">
    <input
     className="flex-1 min-w-0 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
     value={input}
     onChange={(e)=>setInput(e.target.value)}
    />
    <button
    type="submit"
    disabled={!input.trim()}
    className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
    >
    Send
    </button>
    </form>
    
  )
}