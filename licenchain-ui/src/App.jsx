// File: src/App.jsx
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register'
import Marketplace from './pages/Marketplace'

export default function App() {
  return (
    <Router>
      <nav className="bg-[#1A1A1A] text-white px-6 py-4 flex space-x-6 shadow-md">
        <Link to="/" className="hover:underline text-lg font-semibold">Home</Link>
        <Link to="/dashboard" className="hover:underline text-lg font-semibold">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}
