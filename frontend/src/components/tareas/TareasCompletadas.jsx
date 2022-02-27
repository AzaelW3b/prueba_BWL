import { useContext, useEffect, useState } from "react";
import TareaContext from "../../context/tareas/TareaContext";
const TareasCompletadas = () => {
    const tareacontext = useContext(TareaContext);
    let { tareas } = tareacontext;
    const [tareasFiltro, guardarTareasFiltro] = useState([]);
    useEffect(() => {
        const obtenerTareasCompletadas = () => {
            tareas = tareas.filter(tarea => tarea.completada === true);
            guardarTareasFiltro(tareas);
        }
        obtenerTareasCompletadas();
    }, [tareas]);

    return (
        <div className="dasboard__tareas-completadas">
            <h2>Tareas completadas</h2>
            <ul>
                {tareasFiltro.length === 0 ? 'No hay tareas completadas' :
                    (tareasFiltro.map(tarea => (
                        <li key={tarea._id}>{tarea.nombre}</li>
                    )))
                }
            </ul>
        </div>
    );
}

export default TareasCompletadas;