import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navigation() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-20 border-b border-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold hover:text-blue-400">Produce</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/tracking" className="hover:text-blue-400">Tracking</Link>
          {isAuthenticated && (
            <div className="flex items-center space-x-3">
              <Link to="/profile" className="hover:text-blue-400">Profile</Link>
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
  );
}

export default Navigation; 