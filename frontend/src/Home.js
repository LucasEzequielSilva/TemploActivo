import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText'
import Belén from './images/BelenMichiArbol.jpg';
import Button from '@mui/material/Button';
import axios from 'axios';
import uniquid from 'uniquid'
const Home = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  const agregarUsuarios = () => {
    let usuario = {
      nombre: nombre,
      email: email,
      idusuario: uniquid()
    }
    console.log(usuario)
    axios.post('/api/usuarios/agregarusuario', usuario)
    .then(res=>{
      alert(res)
    })
    .then(err=>console.log(err))
  }
  return (
    <React.Fragment>
              
      
              <div className="backgroundHome" style={{backgroundImage:`url(${Belén})`}}>
         
         </div>
 
  <div className="formControl"> 
     
   <FormControl >
   <InputLabel htmlFor="nombre">Nombre</InputLabel>
   <Input id="nombre" aria-describedby="my-helper-text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} />
   <FormHelperText id="my-helper-text">Nombre y apellido.</FormHelperText>
   </FormControl>
 
   <FormControl >
 
   <InputLabel htmlFor="correo">Correo</InputLabel>
   <Input id="correo" aria-describedby="my-helper-text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
   <FormHelperText id="my-helper-text">Deja el correo que más uses 🍉.</FormHelperText>
 </FormControl>
 <Button variant="text" onClick={agregarUsuarios}>Text</Button>
 </div>  
       
 </React.Fragment>
)
}

export default Home