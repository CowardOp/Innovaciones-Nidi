import { useState } from "react";
import "./Aside.css";
import logoGif from "../../assets/img/logo pagina.gif";
import logoicon from "../../assets/img/logo_icon.png";

interface Props {
  data: string[];
  clase: string[];
}

const Aside = ({ data, clase }: Props) => {
  const [moved, setMoved] = useState(false);

  const moveOnClick = () => {
    setMoved(!moved);
  };
  return (
    <aside className={`aside  ${moved ? "move" : ""}`}>
      <img src={logoicon} alt={logoicon} className="logo_icon" />
      <img src={logoGif} alt={logoGif} className="logo_gif" />
      <button onClick={moveOnClick} className={`icono`}>
        <i className={`icono_i fa-solid fa-arrow-left`}></i>
      </button>
      <h1 className="nombre_icono">Innovaciones Nidi</h1>
      <ul className="text-black gap-1 flex flex-col">
        {data.map((item, i) => (
          <li className="lista_icono" key={i}>
            <a className="flex items-center gap-2 py-px" href="">
              <img src={clase[i]} alt={item} className="imagen_icono" />{" "}
              <p className="texto_icono">{item}</p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
