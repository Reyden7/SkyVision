import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";

export default function About (){
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div className="">A propos</div>
  </div>
  );
}