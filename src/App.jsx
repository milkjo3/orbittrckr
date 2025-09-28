import Globe from "./components/Globe"
import NeoWList from "./components/NeoFeedList"
import Clock from "./components/Clock";
import useRotatingTitle from "./hooks/useRotatingTitle";
export default function App() {
  useRotatingTitle("OrbitTrckr | NASA Near-Earth Orbit Tracker", 500);
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white w-full">
      {/*Header*/}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white">OrbitTrckr</h1>
          </div>

          {/* Navigation */}
          <nav className="flex text-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium no-underline">
              Home
            </a>

            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium no-underline">
              About
            </a>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium no-underline">
              Contact
            </a>
          </nav>

          {/* Clock */}
          <div className="p-2 bg-gray-700 rounded-lg flex items-center space-x-2">
            <Clock />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 w-full">
        <aside className="w-20 bg-gray-800"></aside>
        
        <section className="flex-1 flex items-center justify-center border-r border-radius 20px border-gray-700">
          <Globe/>
        </section>

        <aside className="w-80 bg-gray-800">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Asteroid Details</h2>
            <div className="p-4 bg-gray-700 rounded-lg text-gray-300">
              Select an asteroid to see details here.
            </div>
          </div>

          {/*Timeline*/}          
          <div className="p-4 bg-gray-800 border-t border-gray-700 mt-4">
            <h2 className="text-lg font-semibold mb-2">
              Upcoming flybys
            </h2>
              <NeoWList/>
          </div>
        </aside>

      </main>

      <footer className="p-4 bg-gray-800 border-t border-gray-700 text-gray-400 text-center w-full">  
        <a href="https://www.github.com/milkjo3" className="hover:text-white transition-colors duration-200">
        @github.com/milkjo3, 2025 All Rights Reserved.
        </a>
      </footer>  
    </div>    
  );
}