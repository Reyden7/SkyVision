import React, { useState, useEffect } from "react";
import Navbare from "./components/Navbare/navbar";

export default function Home (){
  return(
  <div>
    <div className="relative">
        <Navbare />
      </div>
      <div className=" bg">Home</div>
  </div>
  );
}