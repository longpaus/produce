import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
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
  );
}

export default Home; 