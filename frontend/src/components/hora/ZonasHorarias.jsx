import { useContext } from "react";
import PaisContext from "../../context/pais/PaisContext";
const ZonasHorarias = () => {
    const zonasMexico = ['Veracruz', 'Monterrey', 'Tijuana'];
    const zonasCanada = ['Ottawa', 'Toronto'];
    const zonasChile = ['Santiago'];
    const paiscontext = useContext(PaisContext);
    const { paisSeleccionado,obtenerHora } = paiscontext;
    return (
        <div className="zonas">
            <ul>
                {
                    paisSeleccionado === 'Mexico' ?
                    zonasMexico.map((zona, i)=>(
                        <li onClick={()=>obtenerHora(zona)}key={i}>{zona}</li>
                    )):
                    paisSeleccionado === 'Canada' ?
                    zonasCanada.map((zona, i)=>(
                        <li onClick={()=>obtenerHora(zona)} key={i}>{zona}</li>
                    )):
                    zonasChile.map((zona, i)=>(
                        <li onClick={()=>obtenerHora(zona)} key={i}>{zona}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ZonasHorarias;