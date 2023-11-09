import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";
import Footer from './components/bandeau/bandeau';

export default function About (){
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div className="">A propos</div>
      <div className="fixed bottom-0 w-full text-center"><Footer/></div>
  </div>
  );
}