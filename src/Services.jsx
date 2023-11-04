import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";
import Prestations from './components/Prestations/prestation';
export default function Services (){
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div><Prestations/></div>
  </div>
  );
}