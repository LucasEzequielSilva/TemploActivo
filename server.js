const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
require('./database')

const app = express()
const PORT = process.env.PORT || 5000

const cors = require('cors')

//ruta y modelo
const bodyParser = require('body-parser')
const rutausuario = require('./usuarios')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/usuarios', rutausuario)

app.use(express.json())
app.use(cors())

app.use('/api/usuarios/ejemplo', (req, res)=>{
    res.end('ejemplo')
})


app.get('/api', function (req, res) {
    res.end('Anda')
})

app.listen(PORT, ()=>console.log('server ready on port ' + PORT))
