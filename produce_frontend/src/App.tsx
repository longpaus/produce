import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tracking from './pages/Tracking'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-20 border-b border-gray-800 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <div className="text-2xl font-bold">Produce</div>
            <div className="space-x-4">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <Link to="/tracking" className="hover:text-blue-400">Tracking</Link>
            </div>
          </div>
        </nav>

        {/* Content with padding for fixed navbar */}
        <div className="pt-16">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

// Simple Home component
function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Produce</h1>
      <p className="mb-4">This is a simple application for tracking activities.</p>
      <Link to="/tracking" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg inline-block">
        Go to Tracking
      </Link>
    </div>
  )
}

export default App
