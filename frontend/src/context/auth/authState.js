import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = props =>{
    const initialState ={
        token: localStorage.getItem('token'),
        registrado:null,
        usuario:null,
        mensaje:null,
    }
    const [state, dispatch] = useReducer(authReducer, initialState);

    const registrarUsuario = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            dispatch({
                type:REGISTRO_EXITOSO,
                payload:respuesta.data,
            });
            //obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            const alerta ={
                msg:error.response.data.msg,
                categoria:'alerta-error',
            }
            dispatch({
                type:REGISTRO_ERROR,
                payload:alerta,
            })
        }
    }
    const iniciarSesion = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/auth',datos);
            dispatch({
                type:LOGIN_EXITOSO,
                payload:respuesta.data,
            });
            usuarioAutenticado();
        } catch (error) {
            const alerta = {
                msg:error.response.data.msg,
                categoria:'alerta-error',
            }
            dispatch({
                type:LOGIN_ERROR,
                payload:alerta,
            });
        }
    }
    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type:OBTENER_USUARIO,
                payload:respuesta.data.usuario,
            })
        } catch (error) {
            console.log(error)
        }
    }
    const cerrarSesion = () =>{
        dispatch({
            type:CERRAR_SESION,
        })
    }
    return(
        <authContext.Provider
            value={{
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
                mensaje:state.mensaje,
                registrado:state.registrado,
                usuario:state.usuario
            }}
        >
           {props.children} 
        </authContext.Provider>
    )

}
export default AuthState;