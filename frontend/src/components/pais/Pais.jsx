import { useContext } from "react";
import PaisContext from "../../context/pais/PaisContext";
const Pais = () => {
    const paiscontext = useContext(PaisContext);
    const {paisSeleccionado} = paiscontext;
    return ( 
        <h1>{paisSeleccionado}</h1>
     );
}
 
export default Pais;