import React from 'react';
import './prestations.css';
import { Link } from 'react-router-dom';
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
      price: "100€",
      id: 1,
    },
    {
      title: "réalisation avancée",
      imageUrl: img2,
      price: "400€",
      id: 2,
    },
    {
      title: "réalisation basique + postProduction",
      imageUrl: img3,
      price: "300€",
      id: 3,
    },
    {
      title: "réalisation avancée + postProduction",
      imageUrl: img4,
      price: "700€",
      id: 4,
    },
    {
      title: "Devis personalisé",
      imageUrl: img5,
      price: "---",
      id: 5,
    },
    // Ajoutez plus de données de carte ici
  ];

  return (
    <div className=''>
      <div className='text-center text-neutral-800 text-5xl lg:text-6xl font-signikaSemiBold 3xl:text-9xl'>Nos prestations</div>
      <div className='mt-8 text-center text-neutral-500 lg:text-xl font-signikaSemiBold italic'>Que ce soit de la réalisation basique à avancée, en passant par la postProduction notre équipe le fera avec passion</div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-4 md:gap-4 lg:gap-2 xl:gap-8 ml-2 mr-5 mt-16">
        {cardsData.map((card) => (
          <div key={card.id}>
            <Link to={`/detailsPage/${card.id}`}></Link>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestations;
