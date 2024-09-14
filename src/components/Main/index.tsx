import { useState } from "react";
import "./main.css";
const Main = () => {
  const [moved, setMove] = useState(false);

  const moveOnClick = () => {
    setMove(!moved);
  };

  return (
    <>
      <div className="w-full">
        <div onClick={moveOnClick} className={`icono ${moved ? "move" : ""}`}>
          <i className="icono_i_dos fa-solid fa-arrow-right"></i>
          <i
            onClick={moveOnClick}
            className={`icono_i fa-solid fa-arrow-left`}
          ></i>
        </div>
        <div></div>
      </div>
    </>
  );
};

export { Main };
