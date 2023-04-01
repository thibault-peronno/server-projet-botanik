require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.port;

const app = express();

app.use(cors({
    origin: ['http://127.0.0.1:5173', 'https://botanik-3bb39.web.app/'],
    method: ['GET']
}));

/* We tested, is work : ok
app.get("/express", (req, res) =>{
    res.json({test: 'la route get'})
});
*/
// le '/' ne fonctionne pas
app.use('/trefle', require('./routes/routes'));

app.listen(port, ()=> console.log('Server launched on port 5000'));
