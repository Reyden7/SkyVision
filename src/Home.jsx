import React, { useState, useEffect,  useRef } from "react";
import Navbare from "./components/Navbare/navbar";
import Video from './img/videoSite.mp4';
import './Home.css';
import Prestations from './components/Prestations/prestation'
import Materiel from './components/matériel/materiels'
import Footer from './components/bandeau/bandeau'

export default function Home (){
  const videoRef = useRef(null);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Lancer la vidéo lors de l'interaction de l'utilisateur
    }
  };

  useEffect(() => {
    startVideo(); // Lancer la vidéo automatiquement
  }, []);


  return(
  <div>
    <div className="relative z-20">
        <Navbare />
      </div>
      <div className="container absolute  2xl:left-1/2 transform 2xl:-translate-x-full   md:w-2/5 md:text-sm 2xl:-translate-y-40 md:translate-y-8 bg-neutral-800 bg-opacity-30  2xl:w-auto 2xl:pl-20 2xl:pr-20 z-10  hidden md:block 2xl:block xl:block 2xl:mt-56 p-4 rounded-md">
        <div className="font-signikaBold 2xl:text-9xl z-20 text-white">SkyVision</div>
        <div className="font-signikaLight 2xl:mt-20 2xl:text-4xl z-20 text-yellow-50">La société de prise de vue bourguignonne. Spécialisés dans la captation aérienne de qualité, nous couvrons des événements, des manifestations et réalisons des films aériens.  </div>
        <div className="font-signikaLight 2xl:mt-5 2xl:text-4xl z-20 text-yellow-50">De plus, nous offrons des services de montage vidéo pour donner vie à vos images aériennes.</div>
        <div className="font-signikaLight 2xl:mt-20 2xl:text-4xl z-20 text-yellow-50 italic">"Transformez vos idées en réalité visuelle avec SkyVision."</div>
      </div>
      
      
      <div className="sm:w-full sm:block md:block hidden h-screen flex items-center font-signikaLight  sm:-mt-80 justify-center bg-gray-100  ">
      
        
            <video
            ref={videoRef}
              className=" w-full h-auto -mt-5 z-1 object-cover inset-0 brightness-50 md:mt-56 2xl:mt-52 3xl:-mt-32 hidden 2xl:block md:block "
              width="1920" // Spécifiez la largeur de la vidéo
              height="1080" // Spécifiez la hauteur de la vidéo
              autoPlay
              loop
              muted
              
              // Ajoutez une image de poster si nécessaire
            >
            <source src={Video}   />
            Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
        </div>
        <div className="hidden md:block lg:block 2xl:block container absolute z-10 2xl:mt-72 3xl:-mt-96  lg:-mt-32 md:-mt-96  w-full transform md:-translate-y-96 2xl:-translate-y-96  lg:md:-translate-y-72  ">
          <div className=" text-amber-400   2xl:mt-0 font-signikaBold 2xl:text-xl mx-auto text-center ">SCROLL</div>
          <div className=" arrow">
            <span></span>
            
          </div>
        </div>
       
        <div className="sm:hidden block font-signikaRegular text-2xl pl-14 pr-14 mt-14 text-center "><b>Skyvision</b>, la société de prise de vue aérienne </div>
        <div className="sm:hidden block font-signikaLight text-xl mt-5  text-center italic "> "Transformez vos idées en réalité visuelle avec SkyVision" </div>
        <div className="3xl:mt-40 3xl:block  hidden  ">test</div>
        <div className="sm:mt-40 md:-mt-96 mt-14 2xl:mt-40 3xl:mt-96 xl:mt-40 lg:-mt-96 transform lg:translate-y-32  md:-translate-y-60 2xl:-translate-y-0   "><Prestations/></div>
        <div className="lg:mt-40 2xl:mt-0"><Materiel/></div>
        <div className='text-center mt-20 text-neutral-800 text-5xl sm:text-6xl m-10 font-signikaSemiBold'>Notre travail vous intéresse ?</div>
        <div className='text-center mt-5  text-neutral-800 text-2xl sm:text-2xl font-signikaSemiBold'>
        <a href="/contact" className="bg-neutral-800 text-amber-400 font-signikaSemiBold px-4 py-2 rounded-full hover:bg-neutral-900 hover:text-amber-500 transition duration-300 ease-in-out">
            Nous contacter
        </a>
        <div className="mt-20 h-20"></div>
        <div className=""><Footer/></div>
        
    </div>
      
      
      
  </div>
  );
}