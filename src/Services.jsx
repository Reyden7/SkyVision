import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";
import Prestations from './components/Prestations/prestation';
import img1 from './img/mavic-2-pro-12.jpg'
import img2 from './img/fpv.jpg'
import './Service.css'
import Footer from "./components/bandeau/bandeau";
import Grille from './components/grilleDeplacement';

export default function Services (){

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const maxScroll = window.innerHeight * 0.01;

      const handleScroll = () => {
        if (window.scrollY < maxScroll) {
          window.scrollTo({ top: maxScroll, behavior: 'auto' });
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return(
  <div>
    <div><Navbare/></div>
    <div className=" mt-20 md:mt-20 lg:mt-40 2xl:mt-40 3xl:mt-40  "><Prestations/></div>
    <hr className="border-t-2 mt-16 sm:ml-96 sm:mr-96 mr-24 ml-24 border-neutral-500 my-2 " />
    <div className="mt-20 md:mt-10 lg:mt-20 xl:mt-24 2xl:mt-24 3xl:mt-24  ">
    <div className=" container mt-40 mx-auto">
    <div className=" 2xl:-mt-56  3xl:mt-96  space-x-5 2xl:w-full 3xl:w-full  3xl:h-auto md:w-full md:mx-auto md:p-2  flex 2xl:space-x-96 md:space-x-20   justify-center transform 2xl:scale-50 3xl:scale-100 3xl:space-x-40 ">
      <div className="md:w-2/5 2xl:w-2/5 3xl:4/5  h-full  pb-5 w-1/2  2xl:pl-20 2xl:pr-20 px-4  2xl:py-24  3xl:py-24  bg-neutral-800 rounded-3xl bgAnim-container shadow-2xl shadow-black  "> 
        <img className="w-full rounded-3xl 2xl:-mt-20 transform scale-125 shadow-2xl shadow-black image-container  " src={img1} />
        <div className=" mt-8 text-center text-amber-400  md:text-5xl 2xl:text-5xl text-xl font-signikaBold 2xl:pt-5">Les drones stabilisé</div>
        <div className="mt-8 text-center text-neutral-200 2xl:text-4xl md:text-2xl text-xs lg:text-lg xl:text-xl font-signikaLight  ">Connus du grand public, les drones stabilisés sont idéaux pour obtenir des plans rectilignes fluides.</div>
      </div>
      <div className="md:w-2/5 2xl:mb-36 mb-20 2xl:w-2/5 w-1/2  px-4  2xl:pl-20 2xl:pr-20 2xl:pb-5  bg-neutral-800 rounded-3xl bgAnim-container shadow-2xl shadow-black ">
        <img className="w-full rounded-3xl 2xl:-mt-20 transform scale-125 shadow-2xl shadow-black image-container  " src={img2} />
        <div className="mt-8 text-center text-amber-400 2xl:text-5xl md:text-5xl font-signikaBold 2xl:pt-5 text-xl">Les drones FPV</div>
        <div className="mt-8 text-center text-neutral-200 2xl:text-4xl md:text-2xl lg:text-lg  text-xs xl:text-xl pb-5 font-signikaLight "> À la différence des drones stabilisés, les drones FPV sont moins connus. Ils offrent une approche distincte de la réalisation vidéo, apportant davantage de dynamisme aux images. </div>
        <div className="mt-2 text-center text-neutral-200 2xl:text-4xl md:text-2xl lg:text-lg  text-xs xl:text-xl pb-5 font-signikaLight ">  Cepedant leur utilisation est de plus en plus répandue à Hollywood, notamment lorsqu'il s'agit de filmer des courses-poursuites. </div>
      </div>
    </div>
    </div>
    <div className="2xl:mt-0 2xl:pl-20 2xl:pr-20 2xl:ml-24 2xl:mr-24 2xl:-mt-24 m-5 2xl:mb-24 bg-neutral-800 rounded-lg  shadow-2xl shadow-black">
      <div className="mt-20 3xl:mt-20 md:mt-10 2xl:mt-0  text-center  text-amber-400 2xl:text-3xl text-sm p-3 2xl:pl-20 2xl:pr:20 2xl:pt-8 2xl:pb-8 3xl:text-6xl font-signikaLight md:text-3xl ">Tout nos drones sont pilotables en mode FPV manuel mais également en mode stabilisé.</div>
    </div>
    
    
      <hr className="border-t-2 mt-16 sm:ml-96 sm:mr-96 mr-24 ml-24 border-neutral-500 my-2 " />
      <div className="">
        <h1 className="mt-16 text-center text-neutral-800 text-2xl md:text-4xl font-signikaSemiBold">Comment sont calculés nos tarifs ?</h1>
        <div className=" mt-5 text-neutral-800 text-center text-xl md:text-3xl  font-signikaSemiBold ">
        Les tarifs sont définis par 4 éléments  : 
          <div className="p-5 mt-5 text-center text-amber-700  text-xl md:text-2xl  font-signikaSemiBold ">
            <div>- Le coût du matériel utilisé</div>
            <div>- Le temps de réalisation</div>
            <div>- La compléxité de la réalisation</div>
            <div>- Les frais de déplacement (voir grille forfaitaire) </div>
          </div>
          <div>
          <h1 className="p-5 mt-16 text-center text-neutral-800 text-2xl md:text-4xl font-signikaSemiBold">Grille forfaitaire coût de déplacement</h1>
            <Grille/>
          </div>
          
        </div>
      </div>
      <div className="text-center w-full mt-20 "> <Footer/></div>
        
     
    </div>
  </div>
  );
}