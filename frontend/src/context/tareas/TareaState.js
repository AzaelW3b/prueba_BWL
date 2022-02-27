import { useReducer } from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import clienteAxios from '../../config/axios';
import {
    OBTENER_TAREAS,
    AGREGAR_TAREA,
    ELIMINAR_TAREA,
    ACTUALIZAR_TAREA
} from '../../types';


const TareaState = props => {

    const initialState = {
        tareas: [],
        taraesCompletadas:[],

    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const obtenerTareas = async () => {
        try {
            const resultado = await clienteAxios.get('/api/tareas');
            dispatch({
                type: OBTENER_TAREAS,
                payload:resultado.data.tareas,
            });
        } catch (error) {
            console.log(error);
        }
    }
    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas',tarea);
            console.log(resultado);
            dispatch({
                type: AGREGAR_TAREA,
                payload: resultado.data.tarea,
            });
        } catch (error) {
            console.log(error);
        }
    }
    const actualizarTarea = async tarea => {
        try {
        const resultado = await clienteAxios.put(`api/tareas/${tarea._id}`, tarea);
        console.log(resultado);
        // dispatch({
        //     type: ACTUALIZAR_TAREA,
        //     payload: resultado.data.tarea,
        // });
        } catch (error) {
            console.log(error);
        }
    }

    // const eliminarTarea = async (id, proyecto) => {

    //     try {
    //         await clienteAxios.delete(`/api/tareas/${id}`,{params:{proyecto:proyecto}});
    //         dispatch({
    //             type: ELIMINAR_TAREA,
    //             payload: id,
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                taraesCompletadas: state.taraesCompletadas,
                // errortarea: state.errortarea,
                // tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                actualizarTarea
                // eliminarTarea,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;