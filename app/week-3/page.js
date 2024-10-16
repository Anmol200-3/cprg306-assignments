import React from 'react';
import ItemList from './item-list'; // Make sure the path to the ItemList component is correct

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
