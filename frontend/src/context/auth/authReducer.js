import Login from '../../components/auth/Login';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                registrado:true,
                mensaje:null,
            }
        case OBTENER_USUARIO:
            return{
                ...state,
                registrado:true,
                usuario:action.payload,
            }
        case REGISTRO_ERROR:
            return{
                ...state,
                token:null,
                usuario:null,
                registrado:null,
                mensaje:action.payload,
            }
        default:
            return state;
    }
}