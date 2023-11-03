import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isOpen, setOpen] = useState(false)

    return (
        <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to="/" className='text-white text-xl font-bold'>Logo</Link>
            <div className='hidden sm:flex space-x-4'>
                <Link to="/" className='text-white'>Home</Link>
                <Link to="/tools" className='text-white'>Mon matériel</Link>
                <Link to="/services" className='text-white'>Services</Link>
                <Link to="/about" className='text-white'>A propos</Link>
                <Link to="/contact" className='text-white'>Contact</Link>
            </div>
            <div className='sm:hidden'>
                {}
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
