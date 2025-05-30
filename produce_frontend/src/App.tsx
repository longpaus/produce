import { useState } from 'react'
import TrackingItemCard from './components/TrackingItemCard'

function App() {
  const [categories] = useState([
    { id: 1, name: 'Study software', color: 'bg-blue-500' },
    { id: 2, name: '日本語', color: 'bg-green-500' },
    { id: 3, name: 'Math', color: 'bg-red-500' }
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Activity Tracking</h1>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
          Add Category
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Your Categories</h2>
        
        {/* Categories List */}
        <div className="space-y-3">
          {categories.map(category => (
            <TrackingItemCard key={category.id} name={category.name} color={category.color} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
