/* ----------------------------------------------------------------
  ButtonDelete Component
---------------------------------------------------------------- */
import { useContext } from "react";
import { AppContext } from "../Cart";

const ButtonDelete = ({ id }) => {

  const {deleteProduct} = useContext(AppContext)

  const onButtonClick = () => {
    deleteProduct(id);
  };

  return (
    <button onClick={onButtonClick} type="button" title="Удалить из корзины">
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  );
};

export default ButtonDelete;
