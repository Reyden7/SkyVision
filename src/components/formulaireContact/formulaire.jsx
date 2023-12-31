import React, { useState } from 'react';
import './formulaire.css';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import img from '../../img/djifpv.png';

import './formulaire.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Formulaire() {
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaVerify = (token) => {
    if (token) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isCaptchaVerified) {
      const user_name = document.getElementById('user_name').value;
      const user_email = document.getElementById('user_email').value;
      const message = document.getElementById('message').value;

      try {
        await emailjs.send('service_6obyt2j', 'template_10yzwg9', {user_name, user_email, message}, 'KkUUG4r1_kd-GNXYA');
        
        toast.success('Message envoyé !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
          });
        console.log(user_name, user_email, message);
       
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire par e-mail', error);
        toast.error('Une erreur est survenue lors de l envoie', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
          });
      }
    } else {
      alert('Veuillez vérifier le CAPTCHA.');
    }
  };

  return (
    <div className="bg-neutral-900 text-neutral-100  pb-96 w-full ">
      <div className="flex flex-col 2xl:flex-row lg:flex-row  justify-center  ">
        {/* Partie texte */}
        <div className="lg:w-1/2 2xl:w-1/2 w-full md:w-1/2 xl:w-1/2  z-10">
          <h2 className=" pl-10 text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-signikaSemiBold mt-20">
            Notre travail vous intéresse ?
          </h2>
          <p className=" pl-10 text-lg mt-4 ml-10 mr-10">
            Besoin d'un devis ? <br/> des questions ?<br/> des commentaires ? <br/><br/>
            Votre avis nous intéresse.
          </p>
        </div>
        {/* Partie formulaire */}
        <img className='absolute 2xl:mt-28 lg:mt-28 md:ml-40 md:-mt-40  2xl:ml-12 z-1 transform 3xl:scale-150 2xl:scale-150 md:scale-125 lg:scale-150' src={img} alt="Dji fpv" />
        <div className="2xl:w-1/2 lg:w-full lg:mr-10 w-full 3xl:w-1/2 md:w-full 2xl:ml-10 2xl:mr-10 3xl:mt-52 mt-4 z-0 3xl:-ml-96 px-5">
          <div className="bg-neutral-800 bg-opacity-80 p-8 rounded-md  shadow-md mt-10 2xl:mt-48 lg:mt-48  z-1 formulaire-card">
            <form onSubmit={handleFormSubmit}>
              <div className="grid  grid-cols-2 gap-4 font-signikaSemiBold">
                <div className="mt-4 z-0 opacity-1">
                  <label htmlFor="user_name" className="block text-2xl text-amber-400 font-semibold">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="w-full border text-xl text-neutral-800 border-neutral-500 rounded p-2 formulaire-input"
                  />
                </div>
                <div className="mt-4 z-0">
                  <label htmlFor="user_email" className="block text-2xl text-amber-400 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="w-full border text-xl text-neutral-800 border-neutral-500 rounded p-2 formulaire-input"
                  />
                </div>
                {/* ... Autres champs du formulaire ... */}
                <div className="mt-4 col-span-2 z-0">
                  <label htmlFor="message" className="block text-2xl text-amber-400 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border text-neutral-800 text-xl border-neutral-500 rounded p-2 formulaire-input"
                    rows="4"
                    name="message"
                  ></textarea>
                </div>
                <div className=" mt-4 col-span-2 text-center z-0">
                  <ReCAPTCHA
                  className='md:block transform scale-50 md:scale-100 '
                    sitekey="6LeIpAwpAAAAAHB4EsTmZ633r9YPDd7hwU6SOWDV"
                    onChange={handleCaptchaVerify}
                  />
                  <button
                    type="submit"
                    className="mt-10 text-2xl z-0 bg-amber-400 text-neutral-800 font-semibold rounded-full px-4 py-2 hover:bg-amber-500"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div><ToastContainer />
     
    </div>
  );
}

export default Formulaire;
