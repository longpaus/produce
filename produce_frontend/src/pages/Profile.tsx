import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout, deleteAccount } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== 'DELETE') {
      setError('Please type "DELETE" to confirm account deletion');
      return;
    }

    setLoading(true);
    try {
      await deleteAccount();
      navigate('/');
    } catch (err) {
      setError('Failed to delete account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <div className="text-center mt-12">User not found. Please log in.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Profile</h1>

      {error && (
        <div className="mb-4 p-2 bg-red-900/50 border border-red-700 rounded text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="mb-6 p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400">Name</span>
          <span className="font-medium">{user.name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Email</span>
          <span className="font-medium">{user.email}</span>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Account Management</h2>
        
        <button
          onClick={() => setIsDeleting(!isDeleting)}
          className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded-lg transition duration-200 mb-4"
        >
          {isDeleting ? "Cancel" : "Delete Account"}
        </button>

        {isDeleting && (
          <div className="p-4 bg-gray-700 rounded-lg">
            <p className="text-sm text-red-300 mb-4">
              Warning: This action is permanent and cannot be undone. All your data will be deleted.
            </p>
            <div className="mb-4">
              <label htmlFor="deleteConfirm" className="block text-sm font-medium mb-1">
                Type "DELETE" to confirm
              </label>
              <input
                type="text"
                id="deleteConfirm"
                value={deleteConfirm}
                onChange={(e) => setDeleteConfirm(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={loading}
              />
            </div>
            <button
              onClick={handleDeleteAccount}
              className={`w-full py-2 px-4 bg-red-700 hover:bg-red-800 rounded-lg transition duration-200 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={loading || deleteConfirm !== 'DELETE'}
            >
              {loading ? 'Deleting...' : 'Confirm Delete'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 