import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Vous pouvez utiliser d'autres icônes selon vos besoins
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 text-xl font-signikaMedium  sm:bottom-0 w-full bg-neutral-800 text-white p-4 border-t-4 border-amber-400">
      
      <div className="sm:col-span-1 sm:border-r  sm:border-amber-400  pr-4 md:text-lg">
        <div style={{ userSelect: "none" }}>
        <FontAwesomeIcon icon={faEnvelope} bounce style={{color: "#fbb623",}} /> sky&#46;vision&#46;fpv&#64;gmail&#46;com
        </div>
      </div>

      
      <div className="sm:col-span-1 sm:border-r sm:border-amber-400  pr-4">
        <div style={{ userSelect: "none" }}>
        <FontAwesomeIcon icon={faPhone} fade style={{color: "#ffca38",}} /> 06&#46;03&#46;50&#46;99&#46;79
        </div>
      </div>

      
      <div className="sm:col-span-1">
        <div>
          Suivez-nous :
          <a href="https://www.facebook.com/profile.php?id=61552250003254" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-amber-500"><FontAwesomeIcon icon={faFacebook} style={{color: "#e8b017",}} /></a>
          <a href="https://www.instagram.com/skyvisionfpv/" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-amber-500"><FontAwesomeIcon icon={faInstagram} style={{color: "#e8b017",}} /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
