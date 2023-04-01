const express = require('express');
require('dotenv').config();
const router = express.Router();
// faire attention à avoir la version 2 de node fetch car, sinon l'import ne fonctionne pas. Le document est en CommomJS et donc non compatible avec ESM
const fetch = require('node-fetch');

const params = {
  origin: 'http://127.0.0.1:5173',
  // origin: 'https://botanik-3bb39.web.app/',
  token: process.env.token
}
// attention ne pas inverser req et res, sinon erreur
router.get("/", async (req, res) =>{
    /*res.json({test: 'la route get'})*/
   
        const response = await fetch(
          'https://trefle.io/api/auth/claim', {
            method: 'post',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
          });
        const json = await response.json();
        res.json(json);
});

module.exports = router;