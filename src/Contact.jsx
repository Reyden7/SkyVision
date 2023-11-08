import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";
import Formulaire from "./components/formulaireContact/formulaire";

export default function Contact (){
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div className=""><Formulaire/></div>
  </div>
  
  );
}