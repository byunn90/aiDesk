import { Greeting } from "./assets/Compontents/Greeting";
import Counter from "./assets/Compontents/Counter";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">AI--Desk 🤖</h1>
      <Greeting/>
    </div>
  );
}