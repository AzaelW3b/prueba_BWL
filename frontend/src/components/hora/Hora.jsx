import { useContext } from "react";
import PaisContext from "../../context/pais/PaisContext";
import moment from 'moment';
import 'moment/locale/es';
const Hora = () => {
  moment.locale('es-Mx');
  const paiscontext = useContext(PaisContext);
  const { hora } = paiscontext;
  if(Object.keys(hora).length === 0 ) return null;
  console.log(hora);
    return (
        <div className="hora">
          <h2>Hora</h2>
          <p>{moment(hora.localtime).format('LT')}</p>
        </div>
      );
}
 
export default Hora;