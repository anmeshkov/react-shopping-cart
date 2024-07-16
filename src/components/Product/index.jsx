/* ----------------------------------------------------------------
  Product Component
---------------------------------------------------------------- */
import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import priceFormatter from "../../utils/priceFormatter";
import "./style.scss";

const Product = ({ product }) => {
  const { id, img, title, count, price, priceTotal } = product;
  const dir = "./img/products/";

  return (
    <section className="product">
      <div className="product__img">
        <img src={dir + img} alt={title} title={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count count={count} id={id} />
      </div>
      <div className="product__price">
        {priceFormatter.format(priceTotal)} руб.
      </div>
      <div className="product__controls">
        <ButtonDelete id={id} />
      </div>
    </section>
  );
};

export default Product;
