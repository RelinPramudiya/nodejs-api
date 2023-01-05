// (1)
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
mongoose.set('strictQuery', false);

// (6) body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
     }
     else {
       next();
     }});
 

// (7) import routes mahasiswa, dll
const senjataRoutes = require('./routes/senjata')
const authRoutes = require('./routes/auth')

// (8) daftarkan mahasiswaRoutes ke Express
app.use('/senjata', senjataRoutes)
app.use('/auth', authRoutes)

// (3) koneksi ke mongodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

// jika error
db.on('error', console.error.bind(console, 'Error establishing a database connection'))
// jika success
db.once('open', () => {
    console.log('Database is connected');
})

// (2) listen port
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})
