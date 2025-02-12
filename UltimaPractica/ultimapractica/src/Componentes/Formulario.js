import React, {useState} from 'react'

export default function Formulario({comparar}) {
 
  const comprobar=()=>{
    comparar(num);
    console.log(num)
  }

  const [num,setNum] =useState();

  const modificar=(evento)=>{
    //console.log(e);
    setNum(evento.target.value); //evento es el evento (onChange. Se dice que el aprametro es el evento, luego el target.value almcanea en el input donde se producjo el evento, el valor que se ha ingresado.)
  }
 
  return (
    <div class="guess-section">
        
        <input onChange={modificar} type={num} id="guess" placeholder="Número" min="1" max="20"/>
        <button onClick={comprobar}>Check!</button>
    </div>
  )
}
