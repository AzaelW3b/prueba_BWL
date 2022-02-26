import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import authContext from "../../context/auth/authContext";
const Navegacion = () => {
    const authcontext = useContext(authContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authcontext;
    useEffect(() => {
        usuarioAutenticado();
    }, []);
    const primeraLetra = () => {
        return usuario.nombre.charAt(0).toUpperCase();

    }

    return (
        <div className="navegacion-contenedor">
            <nav className="navegacion contenedor">
                <div className="navegacion__enlaces">
                    <Link to={'/principal'}>Inicio</Link>
                    <Link to={'/usuarios'}>Usuarios</Link>
                </div>
                <div className="navegacion__usuario">
                    <div className="navegacion__usuario-informacion">
                        {usuario ? <p>{primeraLetra()} </p> : null}
                        {usuario ? <span>{usuario.nombre}</span> : null}
                    </div>
                    <div className="navegacion__cerrar-sesion">
                        <button
                            onClick={cerrarSesion}
                        >Cerrar Sesión</button>
                    </div>
                </div>
            </nav>
            {/* <div className="hamburguesa">
                <span></span>
                <span></span>
                <span></span>
            </div> */}
        </div>
    );
}

export default Navegacion;