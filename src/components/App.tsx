import { NavBar } from "./NavBar";
import pollo from "../../src/assets/img/pollo.png";

function App() {
  const list = ["Sobre Nosotros", "Contactos", "About"];
  const subList = ["Corte", "Peinados", "Manicure"];
  return (
    <>
      <div className="w-full h-screen bg-white">
        <NavBar data={list} subData={subList} />
        <img src={pollo} alt="" />
      </div>
    </>
  );
}

export default App;
