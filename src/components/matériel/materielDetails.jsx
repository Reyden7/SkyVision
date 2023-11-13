import React from 'react';
import './materiels.css';
import Navbar from '../Navbare/navbar';
import Footer from '../bandeau/bandeau';
import img1 from '../../img/djifpv.png';
import img2 from '../../img/avata.png';
import './materiels.css';

function MaterielDetail() {
  return (
    <div>
      <div className='text-center mt-20 2xl:text-neutral-800 text-5xl lg:text-6xl font-signikaSemiBold text-shadow-sm shadow-black'>Notre matériel</div>
      <div className=' grid 2xl:grid-rows-2 w-full '>
        <div>
          <img className='image-container md:ml-36 2xl:ml-0 trans scale-50' src={img1}/>
          <div className='container 2xl:-mt-96 -mt-20 2xl:w-3/6 w-5/6 mx-auto p-5 bg-neutral-800 2xl:pt-10 2xl:mx-auto border-4 rounded-3xl  shadow-2xl shadow-black border-neutral-900'>
            <div className='font-signikaBold 2xl:text-center   2xl:text-4xl text-2xl md:text-4xl 2xl:-ml-96  text-amber-400 '>DJI FPV</div>
            <div className='font-signikaLight 2xl:text-xl text-sm md:text-xl md:ml-10 md:pt-5 2xl:ml-56 2xl:mt-5 2xl:w-1/2 text-neutral-200  2xl:pb-5  '>
              <ul className="list-disc 2xl:ml-0 ">
                <li>
                  <strong>Définition vidéo :</strong>
                  <ul className="list-disc ml-5">
                    <li>4K : 3840x2160 à 50/60 ip</li>
                    <li>FHD : 1920x1080 à 50/60/100/120 ips</li>
                  </ul>
                </li>
                <li><strong>Formats de vidéo :</strong> MP4/MOV (H.264/MPEG-4 AVC, H.265/HEVC)</li>
                <li><strong>Résolution photo max :</strong> 3840 x 2160 pixels</li>
                <li>
                  <strong>Stabilisation :</strong>
                  <ul className="list-disc ml-5">
                    <li>Axe unique (inclinaison)</li>
                    <li>Axe de roulis électronique</li>
                  </ul>
                </li>
                <li>
                  <strong>Vitesse d'ascension max :</strong>
                  <ul className="list-disc ml-5">
                    <li>15 m/s (mode S)</li>
                    <li>8 m/s (mode N)</li>
                  </ul>
                </li>
                <li>
                  <strong>Vitesse de descente max :</strong>
                  <ul className="list-disc ml-5">
                    <li>10 m/s (mode S)</li>
                    <li>5 m/s (mode N)</li>
                  </ul>
                </li>
                <li><strong>Accélération max :</strong> 0-100 km/h en 2 secondes</li>
                <li><strong>Plafond pratique :</strong> 6000 m</li>
                <li><strong>Résistance au vent :</strong> 39 à 49 km/h</li>
                <li><strong>Système de satellite :</strong> GPS + GLONASS + Galileo</li>
                <li><strong>Temps de vol max :</strong> environ 20 minutes</li>
                <li><strong>Temps de vol stationnaire max :</strong> environ 16 minutes</li>
                <li><strong>Poids :</strong> 795 g</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='2xl:mt-40'>
          <img className='image-container md:ml-36 2xl:ml-0' src={img2}/>
          <div className='container 2xl:-mt-96 2xl:w-3/6 w-5/6 mx-auto p-5 bg-neutral-800 2xl:pt-10 2xl:mx-auto border-4 rounded-3xl  shadow-2xl shadow-black border-neutral-900'>
            <div className='font-signikaBold 2xl:text-center   2xl:text-4xl text-2xl  md:text-4xl 2xl:-ml-96 text-amber-400 '>DJI AVATA</div>
            <div className='font-signikaLight 2xl:text-xl text-sm 2xl:ml-56 2xl:mt-5  md:pt-5 md:ml-10 md:text-xl 2xl:w-1/2 text-neutral-200  2xl:pb-5  '>
              <ul className="list-disc 2xl:ml-0  ">
                <li>
                  <strong>Définition vidéo :</strong> 4K à 50/60 ips, 2,7K à 50/60/100 ips, 1 080p à 50/60/100 ips
                </li>
                <li>
                  <strong>Vitesse d'ascension max :</strong> 6 m/s
                </li>
                <li>
                  <strong>Vitesse de descente max :</strong> 6 m/s
                </li>
                <li>
                  <strong>Vitesse max :</strong> 8 m/s (mode Normal), 14 m/s (mode Sport), 27 m/s (mode Manuel)
                </li>
                <li>
                  <strong>Résistance au vent max :</strong> 10.7 m/s (5 sur l'échelle de Beaufort)
                </li>
                <li>
                  <strong>Autonomie :</strong> 18 minutes
                </li>
                <li>
                  <strong>Dimensions :</strong> 180 x 180 x 80 mm
                </li>
                <li>
                  <strong>Poids :</strong> 410 g
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mb-56 text-white'>test</div>
      </div>
    </div>
  );
}

export default MaterielDetail;
