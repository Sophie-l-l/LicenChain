// File: src/pages/Marketplace.jsx
import React, { useState } from 'react';

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  const categories = ['All', 'Illustration', 'Photography', '3D Art', 'Animation'];
  
  const artworks = [
    { id: 1, title: 'Neon Abstract', artist: 'Artist1', price: 45, color: 'bg-indigo-900' },
    { id: 2, title: 'Digital Landscape', artist: 'Artist2', price: 35, color: 'bg-red-800' },
    { id: 3, title: 'Futuristic City', artist: 'Artist3', price: 50, color: 'bg-teal-800' },
    { id: 4, title: 'Minimal Shapes', artist: 'Artist4', price: 30, color: 'bg-gray-600' },
    { id: 5, title: 'Cyberpunk Scene', artist: 'Artist5', price: 60, color: 'bg-indigo-900' },
    { id: 6, title: 'Fantasy Portrait', artist: 'Artist6', price: 40, color: 'bg-red-800' },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <div className="w-80 bg-[#121212] flex flex-col">
        {/* Logo Area */}
        <div className="p-6 flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mr-4"></div>
          <div className="text-2xl font-semibold text-blue-500">LicenChain</div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 mt-12">
          <a href="/dashboard" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">Dashboard</a>
          <a href="/portfolio" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">My Portfolio</a>
          <a href="/license-manager" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">License Manager</a>
          <a href="/marketplace" className="block px-6 py-4 bg-[#1A1A1A] text-white font-medium">Marketplace</a>
          <a href="/analytics" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">Analytics</a>
          <a href="/settings" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">Settings</a>
        </nav>
        
        {/* User Profile */}
        <div className="p-6 flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full mr-4"></div>
          <div>
            <div className="font-medium">John Artist</div>
            <div className="text-sm text-gray-400">Pro Plan</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="px-8 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">License Marketplace</h1>
          <div className="w-80">
            <input 
              type="text" 
              className="w-full bg-[#2A2A2A] rounded-full px-6 py-2 text-gray-300" 
              placeholder="Search art or artists..."
            />
          </div>
        </header>
        
        {/* Category Filter */}
        <div className="px-8 mb-8 flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-8 py-3 rounded-lg ${
                activeCategory === category ? 'bg-[#2A2A2A] text-white' : 'text-gray-400 hover:bg-[#1A1A1A]'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Artwork Grid */}
        <div className="px-8 grid grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden">
              <div className={`h-40 ${artwork.color} flex items-center justify-center`}>
                <span className="text-xl text-white font-medium">Art Preview</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{artwork.title}</h3>
                <p className="text-gray-400 mb-3">by {artwork.artist}</p>
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium">
                  ${artwork.price}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="px-8 py-8 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === page 
                    ? 'bg-gray-700 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}