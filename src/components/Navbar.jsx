import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import AuthModal from './AuthModal'; // import the modal

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <nav className='bg-blue-800 justify-between items-center text-white px-6 py-4 flex'>

            {/* left - logo */}
            <div className='text-xl font-bold'>
                <Link to="/"><img src={logo} className='h-10' alt="" /></Link>
            </div>

            {/* middle - nav links */}
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

            {/* right - search + login */}
            <div className="flex items-center gap-4">
                {/* search icon (desktop) */}
                <div className="relative mt-1 hidden sm:block">
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="hover:text-yellow-300 text-2xl"
                    >
                        <FaSearch />
                    </button>
                    {showSearch && (
                        <input
                            type="text"
                            placeholder="Search"
                            className="absolute right-0 mt-11 px-8 py-3 bg-blue-800 text-yellow-300 focus:outline-none"
                        />
                    )}
                </div>

                {/* login button */}
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500"
                >
                    Login
                </button>

                {/* mobile menu toggle */}
                <button className='md:hidden text-2xl'
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* mobile menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-blue-300 flex flex-col items-center gap-4 py-6 md:hidden z-50">
                    {/* search inside mobile menu */}
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

                    <Link to="/" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Home</Link>
                    <Link to="/keli-nodi" onClick={() => setMenuOpen(false)} className=' text-black text-2xl hover:text-yellow-300'>Keli Nodi</Link>
                    <Link to="/smaniyaru" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Smaniyaru</Link>
                    <Link to="/islamic-history" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Islamic-History</Link>
                    <Link to="/hadees" onClick={() => setMenuOpen(false)} className=' text-black text-2xl hover:text-yellow-300'>Hadees</Link>
                    <Link to="/fiqh" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Fiqh</Link>
                    <Link to="/vismaya-jagattu" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Vismaya Jagattu</Link>
                    <Link to="/vishleshanegalu" onClick={() => setMenuOpen(false)} className='text-black text-2xl hover:text-yellow-300'>Vishleshanegalu</Link>
                </div>
            )}

            {/* modal */}
            {showModal && <AuthModal onClose={() => setShowModal(false)} />}
        </nav>
    )
}

export default Navbar
