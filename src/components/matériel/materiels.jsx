import React from 'react';
import './materiels.css';

import img1 from '../../img/djiremote.png';
import img2 from '../../img/v2.png';
import img3 from '../../img/avata.png';
import img4 from '../../img/djifpv.png';

function Materiels() {
  return (
    <div>
      <div className='text-center mt-32 text-neutral-800 text-5xl lg:text-6xl font-signikaSemiBold'>Notre matériel</div>
      <div className='text-center mt-5 text-neutral-800 text-2xl lg:text-2xl font-signikaSemiBold'>
        <a href="/materielDetails" className="bg-neutral-800 text-amber-400 font-signikaSemiBold px-4 py-1 rounded-full hover:bg-neutral-900 hover:text-amber-500 transition duration-300 ease-in-out">
            En savoir plus
        </a>
    </div>
    <div className='text-center mt-5 text-neutral-500 text-lg lg:text-2xl font-signikaSemiBold italic m-20 '>Tout nos drone sont pilotable en FPV manuellement mais également en stabilisé</div>
      <div className="lg:flex grid grid-cols-2 spa ml-5 mr-5 md:ml-40 lg:flex-row lg:mt-5  lg:ml-16 lg:mr-16 text-center -mt-10 md:-mt-10 lg:mt-16  lg:space-x-8  lg:space-y-0 font-signikaSemiBold text-2xl text-neutral-800  ">
        <div className="w-full   md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col">
          <div className='lg:-mt-10 lg:mr-0 mt-5 mr-5 '>
            <div>
              <img className=' md:transform lg:scale-75 xl:scale-100 md:scale-150 md:mb-5' src={img1} alt="Radiocommande v2 DJI" />
            </div>
          </div>
          <div className='lg:-mt-10 -mt-5 md:-ml-5'>Radiocommande v2 DJI</div>
        </div>
        <div className="w-full  md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col">
        <div className='lg:mt-10 mt-10'>Dji goggles v2</div> 
          <div className='lg:-mt-10 -mt-10 lg:mr-0 -mt-5 mr-5 md:mt-0 '>
            <div>
              <img className='md:transform lg:scale-75 xl:scale-100 md:scale-150' src={img2} alt="Dji goggles v2" />
            </div>
          </div>
         
        </div>
        <div className="w-full  md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col">
          <div className='lg:-mt-10 lg:ml-20 mt-5 mr-5 '>
            <div>
              <img className=' lg:w-60 scale-75  w-48 md:transform lg:scale-75 xl:scale-100 md:scale-125 md:mb-5 ' src={img3} alt="Dji avata" />
            </div>
          </div>
          <div className='-mt-10 -ml-14 lg:-ml-10'>Dji avata</div>
        </div>
        <div className="w-full  md:w-1/2 lg:w-1/4 xl:w-1/4 flex flex-col">
        <div className='lg:mt-10 lg:mr-28 -mb-10 lg:mb-0 md:mt-5'>Dji fpv</div>
          <div className='lg:-mt-10 lg:mr-28 mt-5 mr-5 '>
            <div>
              <img className='lg:w-auto  md:transform lg:scale-75 xl:scale-100 md:scale-150 md:mt-5' src={img4} alt="Dji fpv" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Materiels;
