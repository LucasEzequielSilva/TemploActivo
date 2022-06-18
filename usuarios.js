const express = require('express');
const router = express.Router();
 
const mongoose =  require('mongoose')


const usuariosSchema =  new mongoose.Schema({
    nombre:{type:String, requerid: true},
    email:{type:String, requerid: true},
    idusuario:{type:String}
})

const ModeloUsuarios = mongoose.model('usuarios', usuariosSchema)

router.post('/agregarusuario', (req, res) => {
    const nuevoUsuarios = new ModeloUsuarios({
        nombre: req.body.nombre,
        email: req.body.email
    })
    nuevoUsuarios.save(function (err){
        if(!err){
            res.send('usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})
router.get('/agregarusuario', function(res, res){
    res.end('ok')
})
module.exports = router
