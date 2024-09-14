import { NavBar } from "./NavBar";
<<<<<<< HEAD
import "./App.css";

import { Footer } from "./Footer";
import { Main } from "./Main";

function App() {
  const list = ["Sobre Nosotros", "Contactos", "Contactos"];
  const subList = [
    "Corte",
    "Peinados",
    "Manicure",
    "Pedicure",
    "Depilación",
    "Color",
    "Keratina",
  ];

  return (
    <>
      <div className="w-full h-full bg-white">
        <NavBar data={list} subData={subList} />
        <Main />
        <Footer />
=======
import pollo from "../../src/assets/img/pollo.png";

function App() {
  const list = ["Sobre Nosotros", "Contactos", "About"];
  const subList = ["Corte", "Peinados", "Manicure"];
  return (
    <>
      <div className="w-full h-screen bg-white">
        <NavBar data={list} subData={subList} />
        <img src={pollo} alt="" />
>>>>>>> bce6eefcdd7a21e11f9b6511d96bc7047f301c73
      </div>
    </>
  );
}

export default App;
