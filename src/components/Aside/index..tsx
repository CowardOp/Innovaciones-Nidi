import { useState } from "react";
import "./Aside.css";

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
    <>
      <aside className={`aside  ${moved ? "move" : ""}`}>
        <button onClick={moveOnClick} className={`icono`}>
          <i
            onClick={moveOnClick}
            className={`icono_i fa-solid fa-arrow-left`}
          ></i>
        </button>
        <h1>Innovaciones Nidi</h1>
        <ul className="text-black">
          {data.map((item, i) => (
            <li key={i}>
              <a href="">
                <i className={clase[i]}></i> {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Aside;
