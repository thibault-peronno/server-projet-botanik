const express = require('express');
require('dotenv').config();
const router = express.Router();
// faire attention à avoir la version 2 de node fetch car, sinon l'import ne fonctionne pas. Le document est en CommomJS et donc non compatible avec ESM
const fetch = require('node-fetch');

const params = {
  // origin: 'http://127.0.0.1:5173',
  origin: 'https://botanik-3bb39.web.app',
  token: process.env.token
}
// attention ne pas inverser req et res, sinon erreur
router.get("/", async (req, res) =>{
    /*res.json({test: 'la route get'})*/
    try{
      const response = await fetch(
        'https://trefle.io/api/auth/claim', {
          method: 'post',
          body: JSON.stringify(params),
          headers: { 'Content-Type': 'application/json' }
        });
      const json = await response.json();
      res.json(json);

    }catch (error) {
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);
  }
});

module.exports = router;