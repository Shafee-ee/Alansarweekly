import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <nav className='bg-blue-800 justify-center text-white px-6 py-4 flex gap-6'>

            {/* left - logo */}
            <div className='text-xl font-bold'>
                <Link to="/">📰 Al Ansar Weekly</Link>
            </div>

            {/*Middle -Nav Links */}
            <div className='hidden md:flex gap-6'>
                <Link to="/" className='hover:text-yellow-300' >Home</Link>
                <Link to="/keli-nodi" className='hover:text-yellow-300' >Keli Nodi</Link>
                <Link to="/smaniyaru" className='hover:text-yellow-300' >Smaniyaru</Link>
                <Link to="/islamic-history" className='hover:text-yellow-300' >Islamic-History</Link>
                <Link to="/hadees" className='hover:text-yellow-300' >Hadees</Link>
                <Link to="/fiqh" className='hover:text-yellow-300' >Fiqh</Link>
                <Link to="/vismaya-jagattu" className='hover:text-yellow-300' >Vismaya Jagattu</Link>
                <Link to="/vishleshanegalu" className='hover:text-yellow-300' >Vishleshanegalu</Link>
            </div>

            {/* Right*/}
            <div className="relative">
                <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="hover:text-yellow-300"
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
        </nav >
    )
}

export default Navbar