// backend/server.js

import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const { urlencoded, json } = bodyParser;

const app = express();

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { nom, email, message } = req.body;

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
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('E-mail envoyé avec succès');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});
