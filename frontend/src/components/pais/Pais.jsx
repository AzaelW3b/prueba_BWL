import { useContext } from "react";
import PaisContext from "../../context/pais/PaisContext";
const Pais = () => {
    const paiscontext = useContext(PaisContext);
    const { paisSeleccionado } = paiscontext;
    return (
        <div className="pais">
            <h2>Pais seleccionado</h2>
            <p>{paisSeleccionado}</p>
        </div>
    );
}

export default Pais;