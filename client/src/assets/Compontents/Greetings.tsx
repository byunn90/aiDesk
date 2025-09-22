export function Greeting() {
  return (
    <div
      className="flex justify-center items-center max-w-xl mx-auto 
                 bg-white text-black px-6 py-4 rounded-2xl shadow-lg 
                 transform transition-all duration-300 
                 hover:-translate-y-1 hover:shadow-2xl mt-15"
    >
      <h1 className="text-xl font-semibold text-center">
        Welcome User, how can I help you today?
      </h1>
    </div>
  )
}
