import React from 'react'
import Mensaje from './Mensaje';
import LineaPuntuacion from './LineaPuntuacion';

export default function Puntuacion() {
  return (
    <div class="score-section">
      <br/>
      <Mensaje/>
      <br/>
      <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero="20"/> {/*PASAR PARAMETROS(ETIQUERA ID Y NUMERO)*/}
      <LineaPuntuacion etiqueta="Puntaje Alto" id="higscore" numero="0"/>
    </div>
  )
}
