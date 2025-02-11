import React from 'react'

export default function LineaPuntuacion(props) {
  return (
      <p>{props.etiqueta} <span id={props.id}>{props.numero}</span></p>
  )
}
