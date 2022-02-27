import {OBTENER_CLIMA,OBTENER_PAIS, OBTENER_HORA} from '../../types';

export default (state, action)=>{
    switch(action.type){
        case OBTENER_CLIMA:
            return{
                ...state,
                clima:action.payload
            }
        case OBTENER_PAIS:
            return{
                ...state,
                paisSeleccionado:action.payload
            }
        case OBTENER_HORA:
            return{
                ...state,
                hora:action.payload
            }
    }
}