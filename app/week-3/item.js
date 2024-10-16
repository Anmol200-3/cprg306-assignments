import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 rounded-lg shadow-sm">
      <div className="flex flex-col">
        <span className="font-bold text-lg text-gray-800">{name}</span>
        <span className="text-sm text-gray-600">Category: {category}</span>
      </div>
      <span className="text-lg text-blue-600 font-semibold">{quantity}</span>
    </li>
  );
};

export default Item;
