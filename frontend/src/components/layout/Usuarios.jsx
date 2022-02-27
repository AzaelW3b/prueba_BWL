import { useEffect, useState, useContext } from "react";
import clienteAxios from "../../config/axios";
import Navegacion from "./Navegacion";
import authContext from "../../context/auth/authContext";
import moment from 'moment';
import 'moment/locale/es';
const Usuarios = () => {
    const authcontext = useContext(authContext);
    const { usuarioAutenticado } = authcontext;
    const [usuarios, obtenerUsuarios] = useState([]);
    useEffect(() => {
        usuarioAutenticado();
        const consultarApi = async () => {
            const respuesta = await clienteAxios.get('/api/usuarios')
            obtenerUsuarios(respuesta.data.usuarios);
        }
        consultarApi();
    }, []);
    moment.locale('es-Mx');
    return (
        <>
            <Navegacion />
            <div className="contenedor">
                {usuarios.length === 0 ? (<p>No hay usuarios registrados.</p>) :
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo electrónico</th>
                                <th>Fecha de registro</th>
                                <th>Último Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr
                                    key={usuario._id}
                                >
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.correo}</td>
                                    <td>{moment(usuario.registro).format('LL')}</td>
                                    <td>{moment(usuario.ultimoLogin).format('LLLL')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}
            </div>
        </>

    );
}
export default Usuarios;