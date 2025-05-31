import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tracking from './pages/Tracking'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

function App() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-20 border-b border-gray-800 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link to="/" className="text-2xl font-bold hover:text-blue-400">Produce</Link>
            <div className="space-x-4 flex items-center">
              <Link to="/tracking" className="hover:text-blue-400">Tracking</Link>
              {isAuthenticated && (
                <div className="flex items-center space-x-3">
                  <Link to="/profile" className="hover:text-blue-400">Profile</Link>
                  <span className="text-sm text-gray-400">Hi, {user?.name}</span>
                  <button 
                    onClick={logout}
                    className="text-sm bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Content with padding for fixed navbar */}
        <div className="pt-16">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tracking" element={
              <ProtectedRoute>
                <Tracking />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

// Home page component
function HomePage() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Produce</h1>
      <p className="mb-4">This is a simple application for tracking activities.</p>
      
      {isAuthenticated ? (
        <Link to="/tracking" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg inline-block">
          Go to Tracking
        </Link>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg inline-block text-center">
            Login
          </Link>
          <Link to="/register" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg inline-block text-center">
            Create Account
          </Link>
        </div>
      )}
    </div>
  )
}

export default App
