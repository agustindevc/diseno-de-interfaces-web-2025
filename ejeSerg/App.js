import { useState } from "react";
import "./App.css";
import BotonSaludar from './Componentes/BotonSaludar';
import CampoTexto from './Componentes/CampoTexto';
import Imagen from './Componentes/Imagen';
import Mensaje from './Componentes/Mensaje';
import Reiniciar from './Componentes/Reiniciar';



function App() {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("un maromo");
    const [mensaje, setMensaje] = useState("");
    const [imagen, setImagen] = useState("https://static.vecteezy.com/system/resources/previews/015/219/683/non_2x/cartoon-knight-holding-a-sword-vector.jpg");

    const reiniciar = () => {
      setNombre("");
      setEdad("");
      setMensaje("Prueba otra vez")
    }

    const botonSaludar = () => {
      if (!nombre.trim() || !edad.trim()) {
        setMensaje("¿Qué pasa? ¿Ni escribir sabes?");
      
        return;
      }

      let segunEdad = "un@ yogurin";
      if (edad > 60) segunEdad = "un@ persona con un pie ya en la tumba";
      else if (edad > 30) segunEdad = "un@ poquito viej@ para estar jugando";
      else if (edad > 18) segunEdad = "mayor de edad espero que estes currando";

      setMensaje(`Hola ${nombre}, tienes ${edad} años y eres ${genero}. Eres ${segunEdad}.`);
  };

    const tocaImagen = () => {
        if (genero === "un maromo") {
          setGenero("una mujer de bandera");
            setImagen("https://imgsvr.radiocut.site/get/crop/center/200/200/cuts_logos/18/6d/186d9d0f-3b29-4e84-b1c0-43830b97d9bc.jpg");
        } else {
          setGenero("un maromo");
            setImagen("https://static.vecteezy.com/system/resources/previews/015/219/683/non_2x/cartoon-knight-holding-a-sword-vector.jpg");
        }
    };

    return (
      <div className="container">
      <h1>¡Bienvenido!</h1>
      <CampoTexto type="text" placeholder="Nombre" value={nombre} onChange={setNombre} />
      <CampoTexto type="number" placeholder="Edad" value={edad} onChange={setEdad} />
      <BotonSaludar saluda={botonSaludar} />
      <Mensaje texto={mensaje} />
      <Imagen imagen={imagen} onClick={tocaImagen} />
      <Reiniciar reiniciar={reiniciar} />
  </div>
    );
}

export default App;
