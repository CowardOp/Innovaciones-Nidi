import Aside from "../Aside/index.";
import "./main.css";
const Main = () => {
  const list = ["Corte", "Peinados", "Color", "Manicure"];
  const classList = [
    "https://cdn-icons-png.flaticon.com/512/32/32069.png",
    "https://cdn-icons-png.flaticon.com/512/40/40575.png",
    "https://cdn-icons-png.flaticon.com/512/83/83027.png",
    "https://cdn-icons-png.flaticon.com/512/3461/3461937.png",
  ];
  return (
    <>
      <Aside data={list} clase={classList} />

      <div className="h-screen"></div>
    </>
  );
};

export { Main };
