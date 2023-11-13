import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";
import Formulaire from "./components/formulaireContact/formulaire";
import Footer from '../src/components/bandeau/bandeau';

export default function Contact (){
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div className=""><Formulaire/></div>
      <div className=' w-full bottom-0 text-center'><Footer/></div>
  </div>
  
  );
}