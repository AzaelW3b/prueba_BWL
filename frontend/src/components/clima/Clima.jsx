import { useContext } from "react";
import PaisContext from "../../context/pais/PaisContext";

const Clima = () => {
  const paiscontext = useContext(PaisContext);
  const { clima } = paiscontext;
  if(Object.keys(clima).length === 0 ) return null;
  return (
    <div className="clima">
      <p>{clima.current.temp_c}° <span>{clima.current.condition.text}</span></p>
      <img src={clima.current.condition.icon} alt="imagen del clima" />
    </div>
  );
}

export default Clima;