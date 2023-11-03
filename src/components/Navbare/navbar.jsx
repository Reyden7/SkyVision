import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import logo from '../../img/skyvisionlogo.jpg'

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

    const Pages = ' xl:text-2xl 2xl:text-2xl 3xl:text-2xl md:text-2xl text-white text-center md:hover:text-amber-400 border hover:border-amber-400 border-transparent border-0 hover:border-t-2 hover:border-b-2 p-6 transition duration-300'

    return (
        <nav className='bg-neutral-800 color p-4 w-100 font-quicksand'> 
            <div className='container w-full flex justify-center'>
                <div className='md:hidden lg:hidden xl:hidden' style={burgerStyles}>
                    <Hamburger color="#EEB42C" easing="ease-in" toggled={isOpen} toggle={setOpen} />
                </div>

                {/* Logo à gauche de la navbar */}
                <div className=' font-skyvision text-amber-400 xl:text-5xl ml-20 flex items-center sm:block hidden '>
                    <h1>SkyVision</h1>
                </div>

                <div className='hidden sm:flex flex space-x-16 mt-2  ml-auto mr-28 '>
                    <div className='flex-auto'><Link to="/" className={Pages}>Home</Link></div>
                    <div className='flex-auto'><Link to="/tools" className={Pages}>Mon matériel</Link></div>
                    <div className='flex-auto'><Link to="/services" className={Pages}>Services</Link></div>
                    <div className='flex-auto'><Link to="/about" className={Pages}>A propos</Link></div>
                    <div className='flex-auto'><Link to="/contact" className={Pages}>Contact</Link></div>
                </div>
                <div>
                    <div className='md:hidden lg:hidden xl:hidden' style={menuStyles}>
                        <div className='text-3xl font-skyvision text-white block py-2 text-center text-amber-400'><h1>SkyVision</h1></div>
                        <Link to="/" className='text-white block py-2 text-center text-amber-200'>Home</Link>
                        <Link to="/tools" className='block py-2 text-white text-center text-amber-200'>Mon matériel</Link>
                        <Link to= "/services" className='text-white block py-2 text-center text-amber-200'>Services</Link>
                        <Link to="/about" className='text-white block py-2 text-center text-amber-200'>A propos</Link>
                        <Link to="/contact" className='text-white block py-2 text-center text-amber-200'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
