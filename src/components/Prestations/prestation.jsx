import React from 'react';
import './prestations.css';
import Card from '../Prestations/card/card';
import img1 from '../../img/s1.jpg';
import img2 from '../../img/s2.jpg';
import img3 from '../../img/s3.jpg';
import img4 from '../../img/s4.jpg';
import img5 from '../../img/s5.jpg';

function Prestations() {
  const cardsData = [
    {
      title: "réalisation basique",
      imageUrl: img1,
      detailLink: "/produit1",
      price: "100€",
    },
    {
      title: "réalisation avancée",
      imageUrl: img2,
      detailLink: "/produit2",
      price: "400€",
    },
    {
        title: "réalisation basique + postProduction",
        imageUrl: img3,
        detailLink: "/produit2",
        price: "300€",
      },
      {
        title: "réalisation avancée + postProduction",
        imageUrl: img4,
        detailLink: "/produit2",
        price: "700€",
      },
      {
        title: "Devis personalisé",
        imageUrl: img5,
        detailLink: "/produit2",
        price: "---",
      },
    // Ajoutez plus de données de carte ici
  ];

  

  return (
    <div>
      <div className='mt-16 text-center text-neutral-800 text-5xl sm:text-6xl font-signikaSemiBold'>Nos prestations</div>
      <div className='mt-8 text-center text-neutral-500 sm:text-xl font-signikaSemiBold italic'> Que ce soit de la réalisation basique à avancée, en passant par la postProduction notre équipe le fera avec passion  </div>
      <div className="sm:flex sm:flex-row sm:mt-24 sm:ml-16 sm:mr-16 text-center mt-16 space-y-28 sm:space-x-8  sm:space-y-0 ml-10 mr-10 ">
        <div className="w-full sm:w-1/2 flex flex-col"><Card {...cardsData[0]} /></div>
        <div className="w-full sm:w-1/2 flex flex-col"><Card {...cardsData[1]} /> </div>
        <div className="w-full sm:w-1/2 flex flex-col"><Card {...cardsData[2]} /></div>
        <div className="w-full sm:w-1/2 flex flex-col"><Card {...cardsData[3]} /></div>
        <div className="w-full sm:w-1/2 flex flex-col"><Card {...cardsData[4]} /></div>
      </div>
    </div>
  );
}

export default Prestations;
