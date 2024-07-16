/* ----------------------------------------------------------------
  Button Component
---------------------------------------------------------------- */
import "./style.scss";
import { useContext } from "react";
import { AppContext } from "../Cart";

const Buttom = ({title}) => {
  const {addProduct} = useContext(AppContext)

  return (
    <section className="button-wrapper">
      <button onClick={addProduct} className="button">{title}</button>
    </section>
  );
};

export default Buttom;
