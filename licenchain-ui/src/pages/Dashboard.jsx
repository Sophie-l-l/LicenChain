// File: src/pages/Dashboard.jsx

export default function Dashboard() {
    return (
      <div className="min-h-screen flex text-white bg-[#121212]">
        {/* Sidebar */}
        <aside className="w-52 bg-[#1A1A1A] flex flex-col justify-between py-6 px-4">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-teal-400"></div>
              <h1 className="text-lg font-bold text-indigo-400">LicenChain</h1>
            </div>

            <nav className="flex-1 mt-12">
          <a href="/dashboard" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">Dashboard</a>
          <a href="/portfolio" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">My Portfolio</a>
          <a href="/register" className="block px-6 py-4 bg-[#1A1A1A] text-white font-medium">Register New</a>
          <a href="/license" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">License Manager</a>
          <a href="/marketplace" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">Marketplace</a>
          <a href="/settings" className="block px-6 py-4 text-gray-400 hover:bg-[#1A1A1A]">Settings</a>
        </nav>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-500 opacity-70"></div>
            <div>
              <div className="text-sm font-semibold">John Artist</div>
              <div className="text-xs text-gray-400">Pro Plan</div>
            </div>
          </div>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 px-8 py-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-[#222222] rounded-full text-sm text-gray-300 placeholder:text-gray-500 w-56"
            />
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-[#222222] rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Total Registered Works</div>
              <div className="text-2xl font-bold text-teal-400">24 <span className="text-sm text-gray-400 font-normal">items</span></div>
            </div>
            <div className="bg-[#222222] rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Active Licenses</div>
              <div className="text-2xl font-bold text-indigo-400">12</div>
            </div>
            <div className="bg-[#222222] rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Total Earnings</div>
              <div className="text-2xl font-bold text-pink-400">$1,245</div>
            </div>
          </div>
  
          {/* Recent Activity */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="bg-[#222222] p-4 rounded-lg flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-400 opacity-70 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-bold">New License Purchased</div>
                  <div className="text-sm text-gray-400">"Abstract Composition #12" licensed by DesignStudio Inc.</div>
                </div>
                <div className="text-sm text-gray-500">2h ago</div>
              </div>
              <div className="bg-[#222222] p-4 rounded-lg flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-400 opacity-70 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-bold">Work Registered</div>
                  <div className="text-sm text-gray-400">"Digital Landscape Series #5" registered on blockchain</div>
                </div>
                <div className="text-sm text-gray-500">1d ago</div>
              </div>
              <div className="bg-[#222222] p-4 rounded-lg flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-400 opacity-70 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-bold">License Renewal</div>
                  <div className="text-sm text-gray-400">"Neon City" license renewed by MediaCorp for 12 months</div>
                </div>
                <div className="text-sm text-gray-500">2d ago</div>
              </div>
            </div>
          </div>
  
          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#222222] rounded-lg p-4 flex gap-4 items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-md"></div>
                <div>
                  <div className="font-bold">Register New</div>
                  <div className="text-sm text-gray-400">Artwork</div>
                </div>
              </div>
              <div className="bg-[#222222] rounded-lg p-4 flex gap-4 items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-md"></div>
                <div>
                  <div className="font-bold">Create New</div>
                  <div className="text-sm text-gray-400">License</div>
                </div>
              </div>
              <div className="bg-[#222222] rounded-lg p-4 flex gap-4 items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-md"></div>
                <div>
                  <div className="font-bold">View</div>
                  <div className="text-sm text-gray-400">Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }