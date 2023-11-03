import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const menuStyles = {
        maxHeight: isOpen ? '200px' : '40px',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out'
        
    };

    const burgerStyles = {
        position: 'absolute',  // Utilisez une position absolue pour que l'icône du burger reste en place
        top: '10px',  // Ajustez la valeur en fonction de votre mise en page
        left: '20px',  // Ajustez la valeur en fonction de votre mise en page
    };

    return (
        <nav className='bg-gray-800 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='md:hidden lg:hidden xl:hidden' style={burgerStyles}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <div className='hidden sm:flex space-x-4'>
                    <Link to="/" className='text-white'>Home</Link>
                    <Link to="/tools" className='text-white'>Mon matériel</Link>
                    <Link to="/services" className='text-white'>Services</Link>
                    <Link to="/about" className='text-white'>A propos</Link>
                    <Link to="/contact" className='text-white'>Contact</Link>
                </div>
                <div className='mx-auto'> {/* Ajout de la classe 'text-center' pour centrer horizontalement les éléments */}
                    <div className='md:hidden lg:hidden xl:hidden' style={menuStyles}>
                        <div className='text-xl font-skyvision text-white block py-2 text-center'><h1>SkyVision</h1></div>
                        <Link to="/" className='text-white block py-2 text-center'>Home</Link>
                        <Link to="/tools" className='block py-2 text-white  text-center'>Mon matériel</Link>
                        <Link to="/services" className='text-white block py-2  text-center'>Services</Link>
                        <Link to="/about" className='text-white block py-2  text-center'>A propos</Link>
                        <Link to="/contact" className='text-white block py-2  text-center'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
