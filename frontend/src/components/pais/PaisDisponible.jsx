import { useContext } from "react";
import PaisContext from "../../context/pais/PaisContext";
const PaisDisponible = () => {
    const paiscontext = useContext(PaisContext);
    const { obtenerClima, paises} = paiscontext;
    return (
        <>
            <ul className="lista-paises">
                <h2>Paises disponibles</h2>
                {
                    paises.length === 0 ? <li>No hay paises disponibles.</li> :
                        (paises.map((paisDisponible, i) => (
                            <li key={i} onClick={()=>obtenerClima(paisDisponible)}>{paisDisponible}</li>
                        ))
                        )
                }
            </ul>
        </>
    );
}

export default PaisDisponible;