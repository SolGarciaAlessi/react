
import "./CartWidget.css"
import { BsFillCartFill } from "react-icons/bs";


export const CartWidget = () => {
  return (
    <div className="container-cart">
      <BsFillCartFill
        style={{
          fontSize: "2rem",
          color: "violet",
        }}
        />
    </div>
  );
};

