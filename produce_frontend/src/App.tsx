import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tracking from './pages/Tracking'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Fixed Navigation */}
        <Navigation />

        {/* Content with padding for fixed navbar */}
        <div className="pt-16">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
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

export default App
