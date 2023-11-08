import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";
import Footer from './components/bandeau/bandeau';
import MaterielDetail from "./components/matériel/materielDetails";
export default function Tools (){
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div className=""><MaterielDetail/></div>
      <div className="relative bottom-0 w-full text-center"><Footer/></div>
  </div>
  );
}