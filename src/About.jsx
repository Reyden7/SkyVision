import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbare from "./components/Navbare/navbar";
import Footer from './components/bandeau/bandeau';
import pilote from './img/pilote.png';
import drone from './img/drone.png';
import './about.css'

export default function About (){
  useEffect(() => {
    AOS.init();
  }, []);
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div className="w-40 md:w-60 lg:w-80 xl:w-96 2xl:w-80   2xl:block absolute right-0 2xl:mr-12 -mr-2 transform 2xl:scale-125 scale-90  2xl:mt-20 mt-4"><img className=" image-container-drone" src={drone}/></div>
      <div className="container mx-auto flex flex-col 2xl:w-1/2 w-5/6  2xl:h-auto  px-10 pt-10 pb-20 mt-10 bg-neutral-800 bg-opacity-80 center rounded-3xl border-4 border-neutral-500 2xl:mb-20 mb-40  ">
        
          <div data-aos="fade-up" className=" mt-5 mb-10 text-center text-neutral-200 text-3xl md:text-5xl lg:text-5xl font-signikaSemiBold">Qui sommes nous ?</div>
          <div data-aos="fade-up" className=" text-amber-400 2xl:text-3xl text-start text-2xl lg:text-4xl font-signikaSemiBold 2xl:pt-5 mt-10">Notre histoire </div>
          <div data-aos="fade-up" className="text-neutral-200 2xl:text-2xl text-justify text-center mb-5 text-md lg:text-3xl font-signikaRegular 2xl:mt-5">Fondée récemment avec une passion commune pour la captation aérienne, SkyVision est une entreprise dynamique basée à Chevigny-Saint-Sauveur, en Côte-d'Or (21). Bien que nous soyons une nouvelle venue sur la scène, notre engagement envers la qualité et la créativité est notre force motrice. </div>
          <div data-aos="fade-up" className=" text-amber-400 2xl:text-3xl text-start text-2xl lg:text-4xl font-signikaSemiBold 2xl:pt-5">Où sommes nous ? </div>
          <div data-aos="fade-up" className="text-neutral-200 2xl:text-2xl text-justify text-center mb-5 text-md lg:text-3xl font-signikaRegular 2xl:mt-5">Nous sommes fiers d'être implantés au cœur de la Bourgogne, où nous sommes impatients de contribuer à la beauté visuelle de notre région</div>
          <div data-aos="fade-up" className=" text-amber-400 2xl:text-3xl text-start text-2xl lg:text-4xl font-signikaSemiBold 2xl:pt-5">Nos Services</div>
          <div data-aos="fade-up" className="text-neutral-200 2xl:text-2xl text-justify text-center mb-5 text-md lg:text-3xl font-signikaRegular 2xl:mt-5">Chez SkyVision, nous nous spécialisons dans la photographie et la vidéographie aériennes. En utilisant des drones stabilisés et FPV de pointe, nous aspirons à offrir des images saisissantes et uniques.</div>
          <div data-aos="fade-up" className=" text-amber-400 2xl:text-3xl text-start text-2xl lg:text-4xl font-signikaSemiBold 2xl:pt-5">Technologie Nouvelle Génération</div>
          <div data-aos="fade-up" className="text-neutral-200 2xl:text-2xl text-justify text-center mb-5 text-md lg:text-3xl font-signikaRegular 2xl:mt-5">Bien que nous soyons nouveaux sur le marché, nous investissons dans les dernières technologies pour garantir des prises de vue de haute qualité et des résultats visuels exceptionnels.</div>
          <div data-aos="fade-up" className=" text-amber-400 2xl:text-3xl text-start text-2xl lg:text-4xl font-signikaSemiBold 2xl:pt-5">Notre Vision</div>
          <div data-aos="fade-up" className="text-neutral-200 2xl:text-2xl text-justify text-center mb-5 text-md lg:text-3xl font-signikaRegular 2xl:mt-5">Transformer vos idées en réalité visuelle. Chez SkyVision, nous croyons en l'innovation, la passion et l'engagement envers chaque projet.</div>
          <div data-aos="fade-up" className=" text-amber-400 2xl:text-3xl text-start text-2xl lg:text-4xl font-signikaSemiBold 2xl:pt-5">Nous Contacter</div>
          <div data-aos="fade-up" className="text-neutral-200 2xl:text-2xl text-justify text-center mb-5 text-md lg:text-3xl font-signikaRegular 2xl:mt-5">Si vous êtes prêt à embarquer pour une aventure visuelle avec SkyVision, n'hésitez pas à nous contacter. Nous sommes impatients de discuter de vos projets et de collaborer avec vous.</div>
          <div data-aos="fade-up" className=" text-amber-400 2xl:text-3xl text-start text-2xl lg:text-4xl font-signikaSemiBold 2xl:pt-5">Suivez-Nous</div>
          <div data-aos="fade-up" className="text-neutral-200 2xl:text-2xl text-justify text-center mb-5 text-md lg:text-3xl font-signikaRegular 2xl:mt-5">Restez connectés avec nous sur les réseaux sociaux pour découvrir nos dernières réalisations, offres spéciales et actualités.</div>
      </div>
      <div className="w-96 hidden md:block lg:block xl:block 2xl:block  3xl:block bottom-0"><img className="transform 2xl:scale-150 md:scale-150 lg:scale-150 xl:scale-150 3xl:scale-150 -translate-y-40" src={pilote}/></div>
      <div className="fixed bottom-0 w-full text-center "><Footer/></div>
  </div>
  );
}