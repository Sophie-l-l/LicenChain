// File: src/pages/Home.jsx
import React, { useState } from 'react';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  return (
    
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Header/Navigation */}
      <header className="flex items-center justify-between px-16 py-4 bg-[#111]">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-4"></div>
          <div className="text-2xl font-semibold text-blue-500">LicenChain</div>
        </div>
        <nav className="flex space-x-8">
          <a href="#features" className="text-white hover:text-blue-400 text-lg">Features</a>
          <a href="#how" className="text-white hover:text-blue-400 text-lg">How It Works</a>
          <a href="#pricing" className="text-white hover:text-blue-400 text-lg">Pricing</a>
        </nav>
        <div className="flex space-x-4">
          <button className="px-8 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:bg-opacity-10">Login</button>
          <button className="px-8 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex px-16 py-16">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold mb-4">Secure Your Digital Art</h1>
          <h2 className="text-6xl font-bold mb-8">
            with <span className="text-blue-500">Blockchain</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Register copyright, manage licenses, and monetize your digital creations with our decentralized platform.
          </p>
          <div className="flex space-x-6">
            <button className="px-10 py-4 text-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90">
              Get Started
            </button>
            <button className="px-10 py-4 text-lg border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:bg-opacity-10">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-96 h-96 relative">
            {/* Blockchain network visualization */}
            <div className="absolute w-full h-full rounded-full bg-[#1A1A2E] opacity-80"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-lg">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-400 rounded-full"></div>
            </div>
            <div className="absolute border-2 border-teal-400 w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"></div>
            {/* Connection points */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full" style={{ top: '30%', left: '20%' }}></div>
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full" style={{ top: '70%', left: '20%' }}></div>
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full" style={{ top: '20%', right: '20%' }}></div>
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full" style={{ top: '80%', right: '20%' }}></div>
            {/* Connection lines */}
            <div className="absolute w-32 h-px bg-teal-400" style={{ top: '30%', left: '25%', transform: 'rotate(15deg)' }}></div>
            <div className="absolute w-32 h-px bg-teal-400" style={{ top: '70%', left: '25%', transform: 'rotate(-15deg)' }}></div>
            <div className="absolute w-32 h-px bg-teal-400" style={{ top: '20%', right: '25%', transform: 'rotate(-15deg)' }}></div>
            <div className="absolute w-32 h-px bg-teal-400" style={{ top: '80%', right: '25%', transform: 'rotate(15deg)' }}></div>
            <div className="absolute w-4 h-4 bg-teal-400 rounded-full" style={{ top: '10%', right: '10%' }}></div>
            <div className="absolute w-4 h-4 bg-teal-400 rounded-full" style={{ top: '90%', right: '10%' }}></div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 px-16">
        <h3 className="text-4xl font-bold mb-16 text-center">Key Features</h3>
        <div className="flex justify-between gap-8">
          {/* Feature 1 */}
          <div className="bg-[#1A1A1A] rounded-xl p-8 w-1/3">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h4 className="text-2xl font-bold ml-4">Copyright Registry</h4>
            </div>
            <p className="text-gray-400 text-lg">
              Securely register your art on the blockchain with tamper-proof records.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#1A1A1A] rounded-xl p-8 w-1/3">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h4 className="text-2xl font-bold ml-4">License Management</h4>
            </div>
            <p className="text-gray-400 text-lg">
              Create, sell and track your digital licenses in one place.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#1A1A1A] rounded-xl p-8 w-1/3">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h4 className="text-2xl font-bold ml-4">Marketplace</h4>
            </div>
            <p className="text-gray-400 text-lg">
              Connect with buyers and license your work directly.
            </p>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-16 px-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-6">Plans & Pricing</h2>
        <p className="text-xl text-center text-gray-400 mb-12">Choose the right plan for your creative needs</p>
         {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Creator Plan */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Creator</h2>
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-blue-500">$9.99</span>
            </div>
            <p className="text-gray-400 mb-8">per month</p>
            <hr className="border-gray-700 mb-8" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>10 NFT Mints/month</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Basic License Templates</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Marketplace Access</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>5% Transaction Fee</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Email Support</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-opacity">
              Select Plan
            </button>
          </div>

          
          
          {/* Pro Plan */}
          <div className={`relative bg-gray-800 border-2 ${selectedPlan === 'pro' ? 'border-blue-500' : 'border-transparent'} rounded-lg p-8`}>
            {selectedPlan === 'pro' && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full px-6 py-1 font-bold">
                POPULAR
              </div>
            )}
            <h2 className="text-3xl font-bold mb-2">Pro</h2>
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-blue-500">$29.99</span>
            </div>
            <p className="text-gray-400 mb-8">per month</p>
            <hr className="border-gray-700 mb-8" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>30 NFT Mints/month</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Advanced License Templates</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Featured Marketplace Listing</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>3% Transaction Fee</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Priority Support</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Analytics Dashboard</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-opacity">
              Select Plan
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Enterprise</h2>
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-blue-500">$99.99</span>
            </div>
            <p className="text-gray-400 mb-8">per month</p>
            <hr className="border-gray-700 mb-8" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Unlimited NFT Mints</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Custom License Creation</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>Premium Marketplace Listing</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>2% Transaction Fee</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-teal-400 mr-3"></div>
                <span>24/7 Dedicated Support</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-opacity">
              Select Plan
            </button>
          </div>
        </div>
         {/* Footer Note */}
        <div className="bg-gray-800 mt-8 p-6 rounded-lg">
          <p className="text-center text-lg">
            All plans include blockchain registration, license tracking, and smart contract automation
          </p>
        </div>
        
      </section>

    </div>

  );
}



      

       

       

