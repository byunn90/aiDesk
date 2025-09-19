import React, { useState } from "react"

export function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{id: string; role:"user"|"assistant"; content:string}[]>([])

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
    <div className="m-20 whitespace-pre-wrap flex items-center w-full max-w-3xl mb-3 space-y-2 font-mono bg-gray-50">
      {messages.map(m => {
      const isUser = m.role === "user" // ✅ declare inside the map function body
      const rowClass = isUser ? "justify-end" : "justify-start"
      const bubbleClass = isUser
      ? "bg-gray-600 text-white"
      : "bg-zinc-100 text-zinc-900"
        return (<div key={m.id} className={`flex ${rowClass}`}>
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