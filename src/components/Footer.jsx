import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-blue-400 text-gray-300 text-sm py-6'>
            <div className='container mx-auto px-6 flex  flex-col md:flex-row items-center justify-between'>
                {/* Left side*/}

                <p className='mb-4 md:mb-0 text-black'>
                    © {new Date().getFullYear()} Al Ansar Weekly. All rights reserved.
                </p>
                {/* right side*/}
                <div className='flex text-black gap-6'>
                    <a href="#" className="hover:text-black"><FaFacebookF /></a>
                    <a href="#" className="hover:text-black"><FaTwitter /></a>
                    <a href="#" className="hover:text-black"><FaInstagram /></a>

                </div>

            </div>
        </footer>
    )
}

export default Footer