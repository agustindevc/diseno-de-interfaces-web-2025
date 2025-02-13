const CampoTexto = ({ props }) => {
    return (
        <input 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => onChange(e.target.value)}
            className="campo-texto"
        />
    );
};

export default CampoTexto;
