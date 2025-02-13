const Imagen = ({ imagen, onClick }) => {
    return (
        <div className="imagen-container">
            <img src={imagen} alt="Imagen" onClick={onClick} />
            <p>Haz clic en la imagen para cambiar de género</p>
        </div>
    );
};

export default Imagen;
