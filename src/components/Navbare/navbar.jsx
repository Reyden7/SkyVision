import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import logo from '../../img/skyvisionlogo.jpg'

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

     // Fonction pour gérer le scroll
     const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        // Ajouter un écouteur d'événement de scroll lorsque le composant est monté
        window.addEventListener('scroll', handleScroll);

        // Nettoyer l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = `bg-${window.innerWidth >= 640 ? (scrolling ? 'neutral-800' : 'transparent') : 'neutral-800'} color p-4 w-full font-quicksand ${
        window.innerWidth >= 640 ? (scrolling ? 'sm:fixed sm:top-0 sm:z-10 bg-neutral-800 sm:bg-neutral-800 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out') : ''
    };`
    
    
    
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

    const textStyles = `xl:text-2xl 2xl:text-2xl 3xl:text-2xl md:text-2xl ${scrolling ? 'text-white' : 'text-black'} text-center md:hover:text-amber-400 border hover:border-amber-400 border-transparent border-0 hover:border-t-2 hover:border-b-2 p-6 transition duration-300`;


    return (
        <nav className={navbarClass}> 
            <div className='container w-full flex justify-center'>
                <div className='md:hidden lg:hidden xl:hidden' style={burgerStyles}>
                    <Hamburger color="#EEB42C" easing="ease-in" toggled={isOpen} toggle={setOpen} />
                </div>

                {/* Logo à gauche de la navbar */}
                <div className=' font-skyvision text-amber-400 xl:text-5xl ml-20 flex items-center sm:block hidden '>
                    <h1>SkyVision</h1>
                </div>

                <div className='hidden sm:flex flex space-x-16 mt-2  ml-auto mr-28 '>
                    <div className='flex-auto'><Link to="/" className={textStyles}>Home</Link></div>
                    <div className='flex-auto'><Link to="/tools" className={textStyles}>Mon matériel</Link></div>
                    <div className='flex-auto'><Link to="/services" className={textStyles}>Services</Link></div>
                    <div className='flex-auto'><Link to="/about" className={textStyles}>A propos</Link></div>
                    <div className='flex-auto'><Link to="/contact" className={textStyles}>Contact</Link></div>
                </div>
                <div>
                    <div className='md:hidden lg:hidden xl:hidden ' style={menuStyles}>
                        <div className='text-3xl font-skyvision  block py-2 text-center text-amber-400 '><h1>SkyVision</h1></div>
                        <Link to="/" className=' block py-2 text-center text-amber-200'>Home</Link>
                        <Link to="/tools" className='block py-2  text-center text-amber-200'>Mon matériel</Link>
                        <Link to= "/services" className='block py-2 text-center text-amber-200'>Services</Link>
                        <Link to="/about" className=' block py-2 text-center text-amber-200'>A propos</Link>
                        <Link to="/contact" className=' block py-2 text-center text-amber-200'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
