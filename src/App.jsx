import Globe from "./components/Globe"
import NeoWList from "./components/NeoWList"

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/*Header*/}
    <header className="flex items-center justify-between w-full p-4 bg-gray-800 border-b border-gray-700">
      <h1 className="font-space-mono text-3xl text-white">OrbitTrckr</h1>

      <nav className="flex-1">
        <ul className="flex justify-end gap-8 list-none m-0 p-0">
          <li>
            <a href="#" className="no-underline text-white hover:text-cyan-400">Home</a>
          </li>
          <li>
            <a href="#" className="no-underline text-white hover:text-cyan-400">About</a>
          </li>
          <li>
            <a href="#" className="no-underline text-white hover:text-cyan-400">Contact</a>
          </li>
        </ul>
      </nav>
    </header>


      {/* Main Content */}
      <main className="flex flex-1">
        {/*Global Area*/}
        <section className="flex-1 flex items-center justify-center border-r border-gray-700">
          <Globe/>
          {/* <div className="text-gray-400">Globe Placeholder</div> */}
        </section>

        <aside className="w-80 bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Asteroid Details</h2>
          <div className="p-4 bg-gray-700 rounded-lg text-gray-300">
            Select an asteroid to see details here.
          </div>

          {/*Timeline*/}          
          <footer className="p-4 bg-gray-800 border-t border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Upcoming flybys</h2>
            <div className="flex gap-4">
              <NeoWList/>
              {/* <ol>
                <li>Asteroid 1</li>
                <li>Asteroid 2</li>
                <li>Asteroid 3</li>
              </ol> */}
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
