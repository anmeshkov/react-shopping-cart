/* ----------------------------------------------------------------
  Count Component
---------------------------------------------------------------- */
import "./style.scss";

const Count = ({ count, id, increaseProduct, decreaseProduct, changeValue }) => {
  
  const onIncreaseClick = () => {
    increaseProduct(id);
  };
  
  const onDecreaseClick = () => {
    decreaseProduct(id);
  };

  const changeInputValue = (event) => {
    const inputValue = Number(event.target.value)
    changeValue(id, inputValue)
  };

  return (
    <div className="count">
      <div className="count__box">
        <input
          onChange={changeInputValue}
          type="number"
          className="count__input"
          min={1}
          max={100}
          value={count}
        />
      </div>
      <div className="count__controls">
        <button onClick={onIncreaseClick} type="button" className="count__up">
          <img src="./img/icons/icon-up.svg" alt="Increase" />
        </button>
        <button onClick={onDecreaseClick} type="button" className="count__down">
          <img src="./img/icons/icon-down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  );
};

export default Count;
