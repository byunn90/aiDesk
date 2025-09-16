import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);


  return (
    <div className="flex flex-row items-center gap-4">
      
      <button
        onClick={() => {
          if (count < 20) {{
            setCount(count + 1);
         }}
        }}   
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increase
      </button>
      <p className="text-2xl font-bold">Count: {count}</p>
      <button
          onClick={() => {
          if (count >  0) {{
            setCount(count - 1);
         }}
        }} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
        decrease
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
        reset
      </button>
    </div>
  );
}