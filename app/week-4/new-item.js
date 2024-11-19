'use client';  // Client-side rendering directive

import { useState } from 'react';

export default function NewItem() {
  // Initialize state variable `quantity` with initial value 1
  const [quantity, setQuantity] = useState(1);

  // Increment function: increase quantity by 1, but not above 20
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement function: decrease quantity by 1, but not below 1
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-xl font-semibold">Set Quantity</h1>
      
      {/* Display current quantity */}
      <div className="text-2xl">
        Quantity: {quantity}
      </div>
      
      <div className="flex space-x-4">
        {/* Decrement button */}
        <button
          onClick={decrement}
          disabled={quantity === 1} // Disable if quantity is 1
          className={`px-4 py-2 bg-red-500 text-white rounded ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Decrement
        </button>

        {/* Increment button */}
        <button
          onClick={increment}
          disabled={quantity === 20} // Disable if quantity is 20
          className={`px-4 py-2 bg-green-500 text-white rounded ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
