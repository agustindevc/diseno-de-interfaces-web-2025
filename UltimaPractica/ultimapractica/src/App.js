import {useState} from 'react';
import './App.css';
import NumeroSecreto from './Componentes/NumeroSecreto';
import Reiniciar from './Componentes/Reiniciar';
import Formulario from './Componentes/Formulario';
import Puntuacion from './Componentes/Puntuacion';


function App() {

  const generarNumSecreto=()=>{
    return Math.trunc(Math.random()*20)+1
  }

  const reiniciar =()=>{
    setNumSecreto(generarNumSecreto);
    setMensaje("Empiece a adivinar...");
    setPuntuacion(20);
  }


  const comparar=(numero)=>{
    if(!numero){
      setMensaje("Pon un número");
    } else if(Number(numero)===numSecreto){
        setMensaje("Ganaste");
        document.body.style.backgroundColor="green";

        if(score<puntuacion){
          setScore(puntuacion);
        }
      }else if (Number(numero)<numSecreto){
        setMensaje("Tu número es bajo");
        setPuntuacion(puntuacion-1);
      }
      else {
        setMensaje("Tu numero es alto")
        setPuntuacion(puntuacion-1);
      }

      if(puntuacion==0){
        setMensaje("Has perdido");
        document.body.style.backgroundColor="red";
      }
    }
  

  const [numSecreto,setNumSecreto] =useState(generarNumSecreto);
  const [mensaje,setMensaje]=useState("Empiece a adivinar...");
  const [puntuacion,setPuntuacion] =useState(20);
  const [score,setScore]=useState(0);


  return (
    <div className="container">
      <Reiniciar reiniciar={reiniciar}/> {/*LLAMO AL BOTON REINICIAR y le paso por parametro la funcion reiniciar*/}
      <h1>¡Adivina mi número!{numSecreto}</h1>
      <NumeroSecreto/>
      <br/>
      <Formulario comparar={comparar}/>
      <Puntuacion param={mensaje} puntuacion={puntuacion} score={score}/>
    </div>
  );
}

export default App;
