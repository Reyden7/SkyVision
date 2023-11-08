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

    const navbarClass = `bg-${window.innerWidth >= 640 ? (scrolling ? 'neutral-800' : 'neutral-800 opacity-80 ') : 'neutral-800 '} color p-4 w-full font-quicksand  ${
        window.innerWidth >= 640 ? (scrolling ? 'sm:fixed sm:top-0 sm:z-10 lg:fixed lg:top-0 lg xl:fixed xl:top-0 xl:z-10:z-10 bg-neutral-800 sm:bg-neutral-800 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out') : ''
    };`
    
    
    
    const menuStyles = {
        maxHeight: isOpen ? '300px' : '40px',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out',
    };

    const burgerStyles = {
        position: 'absolute',
        top: '10px',
        left: '20px',
    };

    const textStyles = ` md:text-sm xl:text-xl 2xl:text-xl 3xl:text-xl  ${scrolling ? 'text-white' : 'text-white'} text-center md:hover:text-amber-400 border hover:border-amber-400 border-transparent border-0 hover:border-t-2 hover:border-b-2 p-4 transition duration-300`;


    return (
        <nav className={navbarClass}> 
            <div className='container w-full flex justify-center'>
                <div className='md:hidden lg:hidden xl:hidden' style={burgerStyles}>
                    <Hamburger color="#EEB42C" easing="ease-in" toggled={isOpen} toggle={setOpen} />
                </div>

                {/* Logo à gauche de la navbar */}
                <div className=' font-skyvision text-amber-400 md:text-2xl xl:text-2xl lg:ml-20 xl:ml-56  op flex items-center sm:block hidden'>
                    <h1>SkyVision</h1>
                </div>

                <div className='hidden  sm:flex flex lg:space-x-8 md:space-x-2 lg:space-x-8 xl:space-x-8 2xl:space-x-20 xl:mr-20  ml-auto mr-0  '>
                    <div className='flex-auto font-signikaBold'><Link to="/" className={textStyles}>Home</Link></div>
                    <div className='flex-auto font-signikaBold'><Link to="/tools" className={textStyles}>Le matériel</Link></div>
                    <div className='flex-auto font-signikaBold'><Link to="/services" className={textStyles}>Services</Link></div>
                    <div className='flex-auto font-signikaBold'><Link to="/about" className={textStyles}>A propos</Link></div>
                    <div className='flex-auto font-signikaBold'><Link to="/contact" className={textStyles}>Contact</Link></div>
                </div>
                <div>
                    <div className='md:hidden lg:hidden xl:hidden ' style={menuStyles}>
                        <div className='text-3xl font-skyvision  block py-2 text-center text-amber-400 '><h1>SkyVision</h1></div>
                        <Link to="/" className=' block py-2 text-center text-amber-200'>Home</Link>
                        <Link to="/tools" className='block py-2  text-center text-amber-200'>Le matériel</Link>
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
