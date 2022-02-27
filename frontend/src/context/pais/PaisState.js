import { useReducer } from "react";
import PaisReducer from "./PaisReducer";
import PaisContext from "./PaisContext";
import { OBTENER_CLIMA, OBTENER_PAIS, OBTENER_HORA} from "../../types";
import clienteAxios from "../../config/axios";

const PaisState = props => {
    const initialState = {
        clima: {},
        paises:['Mexico', 'Canada', 'Chile'],
        paisSeleccionado:'',
        hora:{}

    }
    const [state, dispatch] = useReducer(PaisReducer, initialState);

    const obtenerClima = async (pais) => {
        const respuesta = await clienteAxios.get(`http://api.weatherapi.com/v1/forecast.json?key=98f04b8904974131901233249222602&q=${pais}&days=1&aqi=no&alerts=no`);
        dispatch({
            type: OBTENER_CLIMA,
            payload: respuesta.data,
        });
        dispatch({
            type:OBTENER_PAIS,
            payload:pais,
        })
    }
    const obtenerHora = async (estado)=>{
        const respuesta = await clienteAxios.get(`http://api.weatherapi.com/v1/timezone.json?key=98f04b8904974131901233249222602&q=${estado}&days=1&aqi=no&alerts=no`);
        dispatch({
            type:OBTENER_HORA,
            payload:respuesta.data.location
        })
    }
    return (
        <PaisContext.Provider
            value={{
                clima: state.clima,
                paises:state.paises,
                hora:state.hora,
                paisSeleccionado:state.paisSeleccionado,
                obtenerClima,
                obtenerHora,
            }}
        >
            {props.children}
        </PaisContext.Provider>
    )
}
export default PaisState;