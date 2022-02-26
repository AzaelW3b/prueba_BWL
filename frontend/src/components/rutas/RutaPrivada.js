import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from '../../context/auth/authContext';
//higher order component
const RutaPrivada = ({ Component, ...props }) => {
    const authcontext = useContext(authContext);
    const { registrado, usuarioAutenticado } = authcontext;

    useEffect(() => {
        usuarioAutenticado();
         // eslint-disable-next-line
    },[]);

    return registrado ? <Component {...props} /> : <Navigate replace to= "/"/>
}
export default RutaPrivada;