
import {
    OBTENER_TAREAS,
    AGREGAR_TAREA,
    ELIMINAR_TAREA,
} from '../../types';

export default (state, action) =>{
    switch(action.type){
        case OBTENER_TAREAS:
            return{
                // ...state,
                // //serian los resultados ya filtrados
                // tareasproyecto: action.payload
            }
        case AGREGAR_TAREA:
            return{
                // ...state,
                // //cambiamos las posiciones para que se agregue al inicio del arreglo
                // tareasproyecto: [ action.payload, ...state.tareasproyecto],
                // errortarea: false,
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