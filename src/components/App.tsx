import { NavBar } from "./NavBar";
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
      </div>
    </>
  );
}

export default App;
