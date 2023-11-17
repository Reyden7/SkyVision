import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbare/navbar';
import Footer from '../bandeau/bandeau';
import img1 from '../../img/drone.png';
import img2 from '../../img/pilote.png';
import '../Prestations/detailsPage.css';
import bg from '../../img/bg.jpg';

const DetailPage = () => {
  const { id } = useParams();
  const elements = [
    {
      id: '1',
      titre: "Réalisation basique",
      Prix: 100,
      Description: "Confiez-nous la réalisation d'images ou de vidéos aériennes de qualité professionnelle pour vos projets. Ce format cette prestation  propose des vidéos brutes, sans artifices ni effets spéciaux, offrant ainsi une flexibilité totale pour personnaliser la post-production selon votre vision créative."
    },
    {
      id: '2',
      titre: "Réalisation avancée",
      Prix: 400,
      Description: "Nos compétences de pilotes FPV professionnels sont à votre disposition pour des prises de vues aériennes avancées. Nous excellons dans la réalisation de plan impressionnants et la capture de scènes dynamiques pour vos projets. Cette offre vous propose des images brutes de haute qualité, vous laissant la liberté de personnaliser la post-production selon vos besoins créatifs."
    },
    {
      id: '3',
      titre: "Réalisation simple + PostProduction",
      Prix: 300,
      Description: "Notre expertise en pilotage FPV va bien au-delà du simple tournage. Nous sommes capables de capturer des images aériennes exceptionnelles, que nous pouvons ensuite peaufiner grâce à des retouches et des effets spéciaux, donnant ainsi naissance à une vidéo finale saisissante. Confiez-nous la réalisation complète, du tournage à la post-production, pour concrétiser votre vision de manière spectaculaire."
    },
    {
      id: '4',
      titre: "Réalisation avancée + PostProduction",
      Prix: 400,
      Description: "Confiez-nous la réalisation d'images ou de vidéos aériennes de qualité professionnelle pour vos projets. Que ce soit en utilisant des drones FPV pour des prises de vues dynamiques ou des drones stabilisés pour des plans fluides. Notre équipe vous offre assurera une prise en charge complète de la post-production, garantissant ainsi des résultats exceptionnels pour vos projets."
    },
    {
      id: '5',
      titre: "Personnalisé",
      Prix: "---",
      Description: "Vous avez une vision unique pour votre projet, et nous sommes là pour la concrétiser. Nous proposons des offres sur mesure, adaptées à vos besoins spécifiques. Pour discuter de votre projet et obtenir une offre personnalisée, n'hésitez pas à nous contacter. Vous pouvez nous joindre via notre site web, nos réseaux sociaux ou par e-mail. Nous sommes impatients de collaborer avec vous pour donner vie à votre vision créative."
    }
  ];
  const element = elements.find((elem) => elem.id === id);

  return (
    <div className="h-screen"> 
      <Navbar/>
      <div className='absolute transform -scale-50 scale-y-50 2xl:-scale-x-100 2xl:scale-y-100 2xl:w-2xl w-xl left-0 2xl:mt-20 2xl:left-12 -ml-20 mt-10 w-60 '><img className='image-container 2xl:w-full w-96' src={img1}/></div>
      <div className='w-full mt-10'>
        <div className='font-signikaLight 2xl:w-1/2 md:pl-10 md:pr-10 2xl:mt-32 2xl:ml-96 text-center md:text-justify text h-auto'>
          <div className='font-signikaRegular text-neutral-800 text-2xl 2xl:text-3xl '>{element ? element.titre : 'Élément non trouvé'}</div>
          <hr className='mt-5 border-2 rounded-full'></hr>
          <div className='mt-2 font-signikaSemiBold text-neutral-800 '>Description de la prestation</div>
          <div className='font-signikaLight text-neutral-800 text-justify px-5 md:px-0 '>{element ? element.Description : 'Element non trouvé'}</div>
          <div className='mt-10 text-center '>
            <a href="/contact" className="bg-neutral-800 text-amber-400 font-signikaSemiBold px-4 py-2 rounded-full hover:bg-neutral-900 hover:text-amber-500 transition duration-300 ease-in-out">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
      <div className='absolute transform scale-50 -scale-x-50 md:scale-100 md:-scale-x-100 lg:scale-100 lg:-scale-x-100 w-2xl bottom-0 right-0'>
        <img src={img2} className='w-96' />
      </div>
      <div className='fixed bottom-0 w-full text-center'><Footer/></div>
    </div>
  );
};

export default DetailPage;
