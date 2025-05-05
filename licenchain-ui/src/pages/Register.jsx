// File: src/pages/Register.jsx
import React, { useState } from 'react';

export default function Register() {
  const [artworkTitle, setArtworkTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

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
          <a href="/register" className="block px-6 py-4 bg-[#1A1A1A] text-white font-medium">Register New</a>
          <a href="/license" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">License Manager</a>
          <a href="/marketplace" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">Marketplace</a>
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
        <header className="px-8 py-6">
          <h1 className="text-3xl font-bold">Register New Artwork</h1>
        </header>
        
        {/* Form Content */}
        <div className="px-8 py-4">
          <div className="bg-[#1A1A1A] rounded-xl p-8">
            {/* File Upload Area */}
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-32 mb-8 flex flex-col items-center justify-center">
              <p className="text-xl text-blue-500 mb-2">Drop files here</p>
              <p className="text-gray-400">or click to browse</p>
            </div>
            
            {/* Form Fields */}
            <div className="mb-6">
              <label className="block mb-2 text-lg">Artwork Title</label>
              <input 
                type="text" 
                className="w-full bg-[#252525] rounded p-4 text-gray-300" 
                placeholder="Enter title..."
                value={artworkTitle}
                onChange={(e) => setArtworkTitle(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-lg">Description</label>
              <textarea 
                className="w-full bg-[#252525] rounded p-4 text-gray-300 h-32" 
                placeholder="Describe your artwork..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-lg">Tags (separated by commas)</label>
              <input 
                type="text" 
                className="w-full bg-[#252525] rounded p-4 text-gray-300" 
                placeholder="digital art, abstract, etc..."
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            
            {/* Security Info */}
            <div className="mb-8 flex justify-end">
              <div className="bg-[#1C2833] p-4 rounded-lg flex items-center">
                <div className="w-6 h-6 bg-teal-400 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Secured with Blockchain</p>
                  <p className="text-sm text-gray-400">ERC-721 Standard NFT</p>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium">
                Register ($1.50)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}