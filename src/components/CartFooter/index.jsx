/* ----------------------------------------------------------------
  #### Component
---------------------------------------------------------------- */
import priceFormatter from "../../utils/priceFormatter";
import "./style.scss";

const CartFooter = (props) => {
  const {price, count} = props.total

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} ед.</div>
      <div className="cart-footer__price">{priceFormatter.format(price)} руб.</div>
    </footer>
  );
};

export default CartFooter;
