
import {
    OBTENER_TAREAS,
    AGREGAR_TAREA,
    ELIMINAR_TAREA,
    ACTUALIZAR_TAREA
} from '../../types';


export default (state, action) =>{
    switch(action.type){
        case OBTENER_TAREAS:
            return{
                ...state,
                tareas: action.payload
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [ action.payload, ...state.tareas]
            }
        case ACTUALIZAR_TAREA:  
        return{
            ...state,
            tareas: state.tareas.map(tarea=> tarea._id === action.payload._id ? action.payload: tarea),
            taraesCompletadas: state.tareas.filter(tarea=> tarea.completada === true),
        }
        case ELIMINAR_TAREA:
            return{     
                // ...state,
                // tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload)
            }
        default:
            return state;
    }
}