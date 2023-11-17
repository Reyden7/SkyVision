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
    <div className=' p-5 mt-20'>
      <div className='text-center text-neutral-800 text-5xl lg:text-6xl font-signikaSemiBold 3xl:text-9xl text-shadow-sm shadow-black'>Pourquoi nous contacter ?</div>
      <div className='mt-8 text-center text-neutral-500 text-md md:text-md lg:text-lg lg:text-xl xl:text-xl font-signikaSemiBold italic'></div>
      <div className=" 2xl:ml-60 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-4 sm:gap-4 md:gap-4 lg:gap-2 xl:gap-8 ml-2 mr-5  ">
        <div className=' '>
            <img className=' 2xl:mt-0 mt-0 ' src={img1}/>
            <img className='2xl:mt-10 mt-5 ' src={img2}/>
            <img className='2xl:mt-10 mt-5' src={img3}/>
        </div>
        <div className=' 2xl:mt-40'>
            <img src={img4}/>
            <img className=' 2xl:mt-10 mt-5 ' src={img5}/>
        </div>
        <div className=' 2xl:mt-40 2xl:ml-20 w-full  '>
            <div className='font-signikaLight md:text-md lg:text-lg md:mt-5 lg:mt-5 xl:text-2xl 2xl:mt-20  2xl:text-3xl 3xl:text-3xl 2xl:mb-10 z-20 text-neutral-800 '>
                Nous intervenons pour différents type de mission :
            </div>
            <div className='font-signikaLight 2xl:text-xl 2xl:mt-5 text-neutral-800 '> - Les évènements festifs privé type anniversaires, mariages.</div>
            <div className='font-signikaLight 2xl:text-xl 2xl:mt-5 text-neutral-800 '> - Les interventions publicitaires, films promotionnel, clip musicals.</div>
            <div className='font-signikaLight 2xl:text-xl 2xl:mt-5 text-neutral-800 '> - Les réalisations de film pour un évènement public, course de motos, voitures.</div>
            
        </div>
        
      </div>
      
    </div>
  );
}

export default Missions;
