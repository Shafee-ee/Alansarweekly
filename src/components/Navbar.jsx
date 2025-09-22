import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-blue-800 text-white px-6 py-4 flex items-center justify-between'>

            {/* Left - Logo */}
            <div className='text-xl font-bold'>
                <Link to="/"><img src={logo} className='h-10' alt="logo" /></Link>
            </div>

            {/* Middle - Nav Links (desktop) */}
            <div className='hidden md:flex gap-6 mt-2'>
                <Link to="/" className='hover:text-yellow-300'>Home</Link>
                <Link to="/keli-nodi" className='hover:text-yellow-300'>Keli Nodi</Link>
                <Link to="/smaniyaru" className='hover:text-yellow-300'>Smaniyaru</Link>
                <Link to="/islamic-history" className='hover:text-yellow-300'>Islamic-History</Link>
                <Link to="/hadees" className='hover:text-yellow-300'>Hadees</Link>
                <Link to="/fiqh" className='hover:text-yellow-300'>Fiqh</Link>
                <Link to="/vismaya-jagattu" className='hover:text-yellow-300'>Vismaya Jagattu</Link>
                <Link to="/vishleshanegalu" className='hover:text-yellow-300'>Vishleshanegalu</Link>
            </div>

            {/* Right - Auth + Hamburger */}
            <div className="flex items-center gap-4">
                {/* Auth buttons (desktop) */}
                <div className="hidden md:flex gap-4">
                    <Link to="/login" className="flex items-center gap-1 hover:text-yellow-300">
                        <FaUser /> Login
                    </Link>
                    <Link to="/signup" className="px-3 py-1 bg-yellow-300 text-blue-900 font-semibold rounded hover:bg-yellow-400">
                        Sign Up
                    </Link>
                </div>

                {/* Hamburger (mobile only) */}
                <button
                    className='md:hidden text-2xl'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-blue-300 flex flex-col items-center gap-4 py-6 md:hidden z-50">

                    {/* Search inside mobile menu */}
                    <div className="w-full px-6">
                        <div className="flex items-center gap-2 bg-blue-600 rounded px-3 py-2">
                            <FaSearch className="text-yellow-300" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-transparent focus:outline-none text-yellow-300 placeholder-yellow-300"
                            />
                        </div>
                    </div>

                    {/* Links */}
                    <Link to="/" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Home</Link>
                    <Link to="/keli-nodi" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Keli Nodi</Link>
                    <Link to="/smaniyaru" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Smaniyaru</Link>
                    <Link to="/islamic-history" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Islamic-History</Link>
                    <Link to="/hadees" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Hadees</Link>
                    <Link to="/fiqh" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Fiqh</Link>
                    <Link to="/vismaya-jagattu" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Vismaya Jagattu</Link>
                    <Link to="/vishleshanegalu" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Vishleshanegalu</Link>

                    {/* Auth buttons (mobile) */}
                    <div className="flex flex-col gap-3 mt-4 w-3/4">
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center gap-2 bg-blue-700 text-yellow-300 py-2 rounded hover:bg-blue-600"
                        >
                            <FaUser /> Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setMenuOpen(false)}
                            className="bg-yellow-300 text-blue-900 font-semibold py-2 rounded hover:bg-yellow-400 text-center"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
