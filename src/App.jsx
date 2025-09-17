export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/*Header*/}
      <header className="p-4 bg-gray-800 border-b border-gray-700">
        <h1 className="font-space-mono text-3xl"> OrbitTrckr</h1>
      </header>
    
      {/* Main Content */}
      <main className="flex flex-1">
        {/*Global Area*/}
        <section className="flex-1 flex items-center justify-center border-r border-gray-700">
          <div className="text-gray-400">Globe Placeholder</div>
        </section>

        <aside className="w-80 bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Asteroid Details</h2>
          <div className="p-4 bg-gray-700 rounded-lg text-gray-300">
            Select an asteroid to see details here.
          </div>

          {/*Timeline*/}          
          <footer className="p-4 bg-gray-800 border-t border-gray-700">
            <h2 className="text-lg front-semibold mb-2">Upcoming flybys</h2>
            <div className="flex gap-4 overflow-x-auto">
              <div className="p-2 bg-gray-700 rounded-lg">Asteroid A |</div>
              <div className="p-2 bg-gray-700 rounded-lg">Asteroid B |</div>
              <div className="p-2 bg-gray-700 rounded-lg">Asteroid C</div>
            </div>
          </footer>
        </aside>
      </main>
      <footer className="p-4 bg-gray-800 border-t border-gray-700">  
        @github.com/milkjo3, 2025 All Rights Reserved.
      </footer>  
    </div>    
  );
}
