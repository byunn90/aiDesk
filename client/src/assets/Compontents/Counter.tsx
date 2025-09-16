import { useState } from "react";

export default function Counter({ min = 0, max = 20, step = 1 }) {
  const [count, setCount] = useState(min);

  const changeCount = (amount) => {
    setCount((prev) => {
      const next = prev + amount;
      if (next > max) return max;
      if (next < min) return min;
      return next;
    });
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        disabled={count >= max}
        onClick={() => changeCount(step)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Increase
      </button>

      <p className="text-2xl font-bold">Count: {count}</p>

      <button
        disabled={count <= min}
        onClick={() => changeCount(-step)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Decrease
      </button>

      <button
        onClick={() => setCount(min)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  );
}
