import { useContext } from "react";
import PaisContext from "../../context/pais/PaisContext";

const Clima = () => {
  const paiscontext = useContext(PaisContext);
  const { clima } = paiscontext;
  if (Object.keys(clima).length === 0) return null;
  return (
    <div className="clima">
      <h2>Clima</h2>
      <div className="clima__informacion">
        <img src={clima.current.condition.icon} alt="imagen del clima" />
        <p>{clima.current.temp_c}° <span>{clima.current.condition.text}</span></p>
      </div>
    </div>
  );
}

export default Clima;