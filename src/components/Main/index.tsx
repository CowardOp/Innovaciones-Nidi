import Aside from "../Aside/index.";
import "./main.css";
const Main = () => {
  const list = ["Corte", "Peinados", "Color", "Manicure"];
  const classList = [
    "fa-thin fa-scissors",
    "fa-regular fa-user-hair-buns",
    "fa-solid fa-pen-paintbrush",
    "fa-solid fa-hand",
  ];
  return (
    <>
      <Aside data={list} clase={classList} />
      <div className="w-full h-full">
        <div>
          <img
            className="imagen"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_KwHPCjYSQPF5XuWCzXO2-4A2YXEvkmHVw&s"
            alt="shampoo"
          />
        </div>
      </div>
    </>
  );
};

export { Main };
