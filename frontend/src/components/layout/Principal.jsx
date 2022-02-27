import Navegacion from './Navegacion';
import authContext from '../../context/auth/authContext';
import Clima from '../clima/Clima';
import Tareas from '../tareas/Tareas';
import TareasCompletadas from '../tareas/TareasCompletadas';
import Hora from '../hora/Hora';
import ZonasHorarias from '../hora/ZonasHorarias';
import Pais from '../pais/Pais';
import PaisDisponible from '../pais/PaisDisponible';

import { useContext, useEffect } from 'react';
const Principal = () => {
    const authcontext = useContext(authContext);
    const { usuarioAutenticado } = authcontext;
    useEffect(() => {
        usuarioAutenticado();
    }, []);
    return (
        <main className="principal">
            <Navegacion />
            <div className="contenedor contenedor-dashboard">
                <div className="dashboard__fila1 fila">
                    <Clima />
                </div>
                <div className="dashboard__fila2 fila">
                    <Tareas />
                </div>
                <div className="dashboard__fila3 fila">
                    <TareasCompletadas />
                </div>
                <div className="dashboard__fila4 fila">
                    <Pais />
                </div>
                <div className="dashboard__fila5 fila">
                    <Hora />
                </div>
                <div className="dashboard__fila6 fila">
                    <ZonasHorarias />
                </div>
                <div className="dashboard__fila7 fila">
                    <PaisDisponible />
                </div>
            </div>
        </main>
    );
}
export default Principal;