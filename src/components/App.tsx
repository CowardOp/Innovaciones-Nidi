import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Main } from "./Main";
import "./App.css";

function App() {
  const list = ["Sobre Nosotros", "Contactos", "Productos"];
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
      <NavBar data={list} subData={subList} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
