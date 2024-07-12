/* ----------------------------------------------------------------
  ButtonDelete Component
---------------------------------------------------------------- */

const ButtonDelete = ({ deleteProduct, id }) => {
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
