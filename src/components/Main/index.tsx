import Aside from "../Aside/index.";
import "./main.css";

const Main = () => {
  return (
    <>
      <Aside />
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
