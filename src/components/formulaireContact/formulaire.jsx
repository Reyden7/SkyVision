import React, { useState } from 'react';
import './formulaire.css';
import ReCAPTCHA from 'react-google-recaptcha';
import img from '../../img/djifpv.png';

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
      const nom = document.getElementById('nom').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nom, email, message }),
        });

        if (response.ok) {
          alert('Formulaire soumis avec succès');
        } else {
          alert('Erreur lors de la soumission du formulaire');
        }
      } catch (error) {
        console.error('Erreur réseau', error);
        alert('Erreur réseau lors de la soumission du formulaire');
      }
    } else {
      alert('Veuillez vérifier le CAPTCHA.');
    }
  };


  return (
    <div className="bg-neutral-900 text-neutral-100 h-screen">
      <div className="flex flex-col 2xl:flex-row justify-center ml-10 mr-10">
        {/* Partie texte */}
        <div className="lg:w-1/2 2xl:w-1/2 md:w-full z-10">
          <h2 className="text-4xl 2xl:text-6xl font-signikaSemiBold mt-20">
            Notre travail vous intéresse ?
          </h2>
          <p className="text-lg mt-4 ml-10 mr-10">
            Besoin d'un devis ? <br/> des questions ?<br/> des commentaires ? <br/><br/>
            Votre avis nous intéresse.
          </p>
        </div>
        {/* Partie formulaire */}
        <img className='absolute 2xl:mt-28 lg:-mt-56 md:ml-40 md:-mt-40 lg:ml-96 2xl:ml-12 z-1 transform 3xl:scale-150 2xl:scale-150 md:scale-125 lg:scale-150' src={img} alt="Dji fpv" />
        <div className="2xl:w-1/2 3xl:w-1/2 md:w-full 2xl:ml-10 2xl:mr-10 3xl:mt-52 mt-4 z-0 3xl:-ml-96">
          <div className="bg-neutral-800 bg-opacity-80 p-8 rounded-md  shadow-md 2xl:mt-48 lg:mt-0  z-1 formulaire-card">
            <form onSubmit={handleFormSubmit}>
              <div className="grid  grid-cols-2 gap-4 font-signikaSemiBold">
                <div className="mt-4 z-0 opacity-1">
                  <label htmlFor="nom" className="block text-2xl text-amber-400 font-semibold">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="w-full border text-xl text-neutral-800 border-neutral-500 rounded p-2 formulaire-input"
                  />
                </div>
                <div className="mt-4 z-0">
                  <label htmlFor="email" className="block text-2xl text-amber-400 font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
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
                  ></textarea>
                </div>
                <div className="mt-4 col-span-2 text-center z-0">
                  <ReCAPTCHA
                    sitekey="6Ld46_koAAAAAJwq7BFbsaN7UWpooijbe5IowNXU"
                    onChange={handleCaptchaVerify}
                  />
                  <button
                    type="submit"
                    className="text-2xl z-0 bg-amber-400 text-neutral-800 font-semibold rounded-full px-4 py-2 hover:bg-amber-500"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
