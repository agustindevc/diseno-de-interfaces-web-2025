import React from 'react'
import Mensaje from './Mensaje';
import LineaPuntuacion from './LineaPuntuacion';

export default function Puntuacion({param, puntuacion, score}) {
  return (
    <div class="score-section">
      <br/>
      <Mensaje men={param}/>
      <br/>
      <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero={puntuacion}/> {/*PASAR PARAMETROS(ETIQUERA ID Y NUMERO)*/}
      <LineaPuntuacion etiqueta="Puntaje Alto" id="higscore" numero={score}/>
    </div>
  )
}
