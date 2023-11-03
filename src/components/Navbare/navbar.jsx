import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const menuStyles = {
        maxHeight: isOpen ? '200px' : '40px',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out',
    };

    const burgerStyles = {
        position: 'absolute',
        top: '10px',
        left: '20px',
    };

    return (
        <nav className=' bg-neutral-800  color p-4 w-100 font-quicksand'> 
            <div className=' container w-full flex justify-center  '>
                <div className='md:hidden lg:hidden xl:hidden' style={burgerStyles}>
                    <Hamburger color="#EEB42C" easing="ease-in" toggled={isOpen} toggle={setOpen} />
                    
                </div>
                <div  className='hidden sm:flex flex space-x-16 menu1'>
                    <div className='flex-auto'><Link to="/" className='  xl:text-3xl 2xl:text-3xl 3xl:text-3xl md:text-2xl text-white text-center md:hover:text-amber-400'>Home</Link></div>
                    <div className='flex-auto'><Link to="/tools" className='xl:text-3xl 2xl:text-3xl 3xl:text-3xl md:text-2xl text-white text-center'>Mon matériel</Link></div>
                    <div className='flex-auto'><Link to="/services" className=' xl:text-3xl 2xl:text-3xl 3xl:text-3xl md:text-2xl text-white text-center'>Services</Link></div>
                    <div className='flex-auto'><Link to="/about" className=' xl:text-3xl 2xl:text-3xl 3xl:text-3xl md:text-2xl text-white text-center'>A propos</Link></div>
                    <div className='flex-auto'><Link to="/contact" className=' xl:text-3xl 2xl:text-3xl 3xl:text-3xl md:text-2xl text-white text-center'>Contact</Link></div>
                </div>
                <div className=''>
                    <div className='md:hidden lg:hidden xl:hidden' style={menuStyles}>
                        <div className='text-3xl font-skyvision text-white block py-2 text-center text-amber-400'><h1>SkyVision</h1></div>
                        <Link to="/" className='text-white block py-2 text-center text-amber-200'>Home</Link>
                        <Link to="/tools" className='block py-2 text-white text-center text-amber-200'>Mon matériel</Link>
                        <Link to="/services" className='text-white block py-2 text-center text-amber-200'>Services</Link>
                        <Link to="/about" className='text-white block py-2 text-center text-amber-200'>A propos</Link>
                        <Link to="/contact" className='text-white block py-2 text-center text-amber-200'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
