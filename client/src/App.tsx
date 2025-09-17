import { Greeting } from "./assets/Compontents/Greetings";
import { Chat } from "./assets/Compontents/Chat"
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Greeting/>
      <Chat/>
    </div>
  );
}