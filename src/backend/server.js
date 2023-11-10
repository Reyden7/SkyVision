// backend/server.js

import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
const { urlencoded, json } = bodyParser;

const app = express();

app.use(bodyParser.json());

const recaptchaSecretKey = '6LcaqAopAAAAAK_au4xIFLzKjV3xMRvmcBlDZfl6'; // Remplacez par votre clé secrète reCAPTCHA

app.post('/send-email', async (req, res) => {
  const { nom, email, message, recaptchaToken } = req.body;

  // Vérifiez la réponse avec la clé secrète reCAPTCHA
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;

  try {
    const response = await fetch(verificationURL, { method: 'POST' });
    const responseData = await response.json();

    // Utilisez responseData.success pour déterminer si la réponse est valide
    if (responseData.success) {
      // La réponse est valide, continuez le traitement du formulaire (envoi d'e-mails)

      // Configurer le transporteur
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sky.vision.fpv@gmail.com',
          pass: 'sqgr tbxn ebvd bcac',
        },
      });

      // Paramètres de l'e-mail
      let mailOptions = {
        from: 'sky.vision.fpv@gmail.com',
        to: 'sky.vision.fpv@gmail.com',
        subject: 'Nouveau message depuis le formulaire de contact',
        text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Envoyer l'e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).send('E-mail envoyé avec succès');
    } else {
      // La réponse reCAPTCHA n'est pas valide
      res.status(400).send('Veuillez vérifier le CAPTCHA.');
    }
  } catch (error) {
    console.error('Erreur lors de la vérification reCAPTCHA', error);
    res.status(500).send('Erreur serveur lors de la vérification reCAPTCHA');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});
