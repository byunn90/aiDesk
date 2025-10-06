import React, { useRef, useState } from "react"
// import { DarkMode } from "./DarkModeSwitch";  // Not in use right now still building

export function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{id: string; role:"user"|"assistant"; content:string}[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const onSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  const text = input.trim()
  if (!text) return
  setMessages(prev => [
    ...prev,
    { id: crypto.randomUUID(), role: "user", content: text }
  ])
  setInput("")
}

  return(
    <>
<div
  ref={scrollRef}
  className="h-150 overflow-y-auto whitespace-pre-wrap flex flex-col w-full max-w-3xl space-y-2 px-4"
>
  {messages.map(m => {
    const isUser = m.role === "user"
    const rowClass = isUser ? "justify-start" : "justify-end"
    const bubbleClass = isUser ? "bg-gray-600 text-white" : "bg-zinc-100 text-zinc-900"
    return (
      <div key={m.id} className={`flex ${rowClass}`}>
        <div className={`max-w-[75%] px-4 py-2 rounded-2xl shadow ${bubbleClass}`}>
          {m.content}
        </div>
      </div>
    )
  })}
</div>
    <form onSubmit={onSubmit} className="flex items-center gap-2 w-full max-w-3xl p-3 border rounded-xl">
    <input
     className="flex-1 min-w-0 bg-transparent outline-none"
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     placeholder="Ask anything"
    />
    <button
    type="submit"
    disabled={!input.trim()}
    className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
    >
    Send
    </button>
    </form>
    </>
  )
}