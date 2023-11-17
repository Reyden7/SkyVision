import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../img/anniversaire.jpg';
import img2 from '../../img/voiture.jpg';
import img3 from '../../img/tracteur.jpg';
import img4 from '../../img/champs.jpg';
import img5 from '../../img/monument.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Missions() {
 

  return (
    <div className=' container p-5 mt-20'>
      <div className='text-center text-neutral-800 text-5xl lg:text-6xl font-signikaSemiBold 3xl:text-9xl text-shadow-sm shadow-black'>Pourquoi nous contacter ?</div>
      <div className='grid grid-cols-2'></div>
      <div>test</div>
      <div>test</div>
    </div>
  );
}

export default Missions;
