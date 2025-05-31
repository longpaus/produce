import { useState, useEffect, useRef } from 'react'
import TrackingItemCard from '../components/TrackingItemCard'

interface Category {
  id: number;
  name: string;
  color: string;
}

function Tracking() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState<Omit<Category, 'id'>>({
    name: '',
    color: 'bg-blue-500'
  });
  
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (isModalOpen && event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isModalOpen]);
  
  // Handle click outside modal
  const handleOutsideClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };
  
  // Expanded color palette with Tailwind CSS colors
  const colorPalette = [
    // Blues
    ['bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800'],
    // Greens
    ['bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800'],
    // Reds
    ['bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800'],
    // Yellows
    ['bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800'],
    // Purples
    ['bg-purple-300', 'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800'],
    // Pinks
    ['bg-pink-300', 'bg-pink-400', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700', 'bg-pink-800'],
    // Indigos
    ['bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800'],
    // Teals
    ['bg-teal-300', 'bg-teal-400', 'bg-teal-500', 'bg-teal-600', 'bg-teal-700', 'bg-teal-800'],
    // Oranges
    ['bg-orange-300', 'bg-orange-400', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700', 'bg-orange-800'],
  ];

  const handleAddCategory = () => {
    if (newCategory.name.trim()) {
      const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      setCategories([...categories, { ...newCategory, id: newId }]);
      setNewCategory({ name: '', color: 'bg-blue-500' });
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 mb-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold">Activity Tracking</h1>
            <button 
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
              onClick={() => setIsModalOpen(true)}
            >
              Add Category
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-4">
        {/* Categories List */}
        <div className="space-y-4">
          {categories.length === 0 ? (
            <div className="text-center py-8 text-gray-400 bg-gray-800 rounded-lg">
              No categories yet. Add your first category to get started.
            </div>
          ) : (
            categories.map(category => (
              <TrackingItemCard key={category.id} name={category.name} color={category.color} />
            ))
          )}
        </div>
      </div>

      {/* Add Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={handleOutsideClick}>
          <div className="bg-gray-800 rounded-lg p-5 w-full max-w-sm" ref={modalRef}>
            <h2 className="text-lg font-bold mb-3">Add New Category</h2>
            
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Category Name</label>
              <input
                type="text"
                className="w-full bg-gray-700 rounded px-3 py-2 text-white text-sm"
                value={newCategory.name}
                onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                placeholder="Enter category name"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Select Color</label>
              <div className="grid gap-1 p-2 bg-gray-700 rounded-lg">
                {colorPalette.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-6 gap-1 w-full">
                    {row.map(color => (
                      <button
                        key={color}
                        className={`w-full h-6 rounded-md ${color} ${newCategory.color === color ? 'ring-2 ring-white' : ''}`}
                        onClick={() => setNewCategory({...newCategory, color})}
                        aria-label={color.replace('bg-', '')}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <button 
                className="px-4 py-1.5 bg-gray-600 hover:bg-gray-700 rounded text-sm cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-sm cursor-pointer"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tracking 