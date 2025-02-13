import React from "react";

const Mensaje = ({ texto }) => {
    return texto ? <p className="mensaje">{texto}</p> : null;
};

export default Mensaje;
