'use client';

import { useState } from 'react';

export default function NewItem() {
  // State variables
  const [name, setName] = useState(''); // Name field
  const [quantity, setQuantity] = useState(1); // Quantity (from Week 4)
  const [category, setCategory] = useState('Produce'); // Category field

  // Increment function for quantity
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement function for quantity
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const item = { name, quantity, category }; // Create the item object
    console.log(item); // Log the item to the console
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`); // Display an alert
    setName(''); // Reset name
    setQuantity(1); // Reset quantity
    setCategory('Produce'); // Reset category
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-2xl font-bold">Add New Item</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter item name"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`px-3 py-2 bg-red-500 text-white rounded ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`px-3 py-2 bg-green-500 text-white rounded ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              +
            </button>
          </div>
        </div>

        {/* Category Field */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {[
              'Produce',
              'Dairy',
              'Bakery',
              'Meat',
              'Frozen Foods',
              'Canned Goods',
              'Dry Goods',
              'Beverages',
              'Snacks',
              'Household',
              'Other',
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
