import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import img1 from '../../img/anniversaire.jpg';
import img2 from '../../img/voiture.jpg';
import img3 from '../../img/tracteur.jpg';
import img4 from '../../img/champs.jpg';
import img5 from '../../img/monument.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Missions() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='p-7 mt-20 2xl:mt-10 '>
      <div className='text-center mt-20 text-neutral-800 text-5xl sm:text-6xl m-10 font-signikaSemiBold text-shadow-sm shadow-black'>
        Pourquoi nous contacter ?
      </div>
      <div className=''></div>
      <div className=" grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3  md:ml-40 2xl:ml-0   2xl:mr-96 ">
        <div  className=' w-auto md:w-60  2xl:w-72 lg:w-60 md:-ml-14 2xl:ml-44 3xl:ml-96    mx-auto'>
          <img  className='mt-0 2xl:mt-0 shadow-lg shadow-black' src={img1}  alt="Image 1" />
          <img   className='mt-4 2xl:mt-8 shadow-lg shadow-black' src={img2} alt="Image 2" />
          <img  className='mt-4 2xl:mt-8 shadow-lg shadow-black' src={img3} alt="Image 3" />
        </div>
        <div className='w-auto 2xl:ml-0 md:w-60 2xl:w-80 lg:w-60 ml-4 lg:-ml-16 xl:-ml-52 3xl:ml-0    mx-auto 2xl:mt-40 3xl:-ml-52 mt-20'>
          <img  className='shadow-lg shadow-black' src={img4} alt="Image 4" />
          <img  className='2xl:mt-8 mt-4 shadow-lg shadow-black' src={img5} alt="Image 5" />
        </div>
        <div  className='mt-56 mx-auto 2xl:block lg:block xl:-ml-56 2xl:ml-0 hidden  '>
          <div className='text-neutral-800  font-signikaSemiBold text-2xl 2xl:text-2xl'>
            Nous intervenons pour différents types de mission :
          </div>
          <div className='font-signikaLight mt-5 text-neutral-800 2xl:text-xl '>
            - Les évènements festifs privé type anniversaires, mariages.
          </div>
          <div className='font-signikaLight mt-5 text-neutral-800 2xl:text-xl'>
            - Les interventions publicitaires, films promotionnels, clips musicaux.
          </div>
          <div className='font-signikaLight mt-5 text-neutral-800 2xl:text-xl'>
            - Les réalisations de film pour un évènement public, course de motos, voitures ou même court métrage.
          </div>
        </div>
      </div>
      <div  className='mt-10 mx-auto 2xl:hidden lg:hidden block   '>
          <div className='text-neutral-800  font-signikaSemiBold 2xl:text-2xl'>
            Nous intervenons pour différents types de mission :
          </div>
          <div className='font-signikaLight mt-5 text-neutral-800 2xl:text-xl '>
            - Les évènements festifs privé type anniversaires, mariages.
          </div>
          <div className='font-signikaLight mt-5 text-neutral-800 2xl:text-xl'>
            - Les interventions publicitaires, films promotionnels, clips musicaux.
          </div>
          <div className='font-signikaLight mt-5 text-neutral-800 2xl:text-xl'>
            - Les réalisations de film pour un évènement public, course de motos, voitures ou même court métrage.
          </div>
        </div>
    </div>
  );
}

export default Missions;
