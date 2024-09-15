import { useState } from "react";
import "./Aside.css";

const Aside = () => {
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
      </aside>
    </>
  );
};

export default Aside;
