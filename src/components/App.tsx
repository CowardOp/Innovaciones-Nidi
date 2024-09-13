import { NavBar } from "./NavBar";
import "./App.css";
import pollo from "../../src/assets/img/pollo.png";
import audioPollo from "../assets/img/gallina.mp3";
import { useRef } from "react";
import { Footer } from "./Footer";

function App() {
  const list = ["Sobre Nosotros", "Contactos", "About"];
  const subList = [
    "Corte",
    "Peinados",
    "Manicure",
    "Pedicure",
    "Depilación",
    "Color",
    "Keratina",
  ];

  const audioRef = useRef(new Audio(audioPollo));

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <>
      <div className="w-full h-screen bg-white">
        <NavBar data={list} subData={subList} />
        <img src={pollo} alt="" className="" onClick={playSound} />
        <Footer />
      </div>
    </>
  );
}

export default App;
