import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";
import Prestations from './components/Prestations/prestation';

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
    <div className=" sm:mt-40"><Prestations/></div>
    <div className=" mb-36">
      <hr className="border-t-2 mt-16 sm:ml-96 sm:mr-96 mr-24 ml-24 border-neutral-500 my-2 " />
      <div className="">
        <h1 className="mt-16 text-center text-neutral-800 text-2xl font-signikaSemiBold">Comment sont calculer nos tarifs ?</h1>
        <div className=" mt-5 text-neutral-800 text-center text-xl font-signikaSemiBold ">
          Les tarifs sont défini par 3 éléments : 
          <div className="mt-5 text-amber-700 text-justify-center text-xl font-signikaSemiBold ">
            <div>- Le coût du matériel utilisé</div>
            <div>- Le temps de réalisation</div>
            <div>- La compléxité de la réalisation</div>
          </div>
          
        </div>
      </div>
      
        
     
    </div>
  </div>
  );
}