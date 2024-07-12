/* ----------------------------------------------------------------
  Product Component
---------------------------------------------------------------- */
import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";

const Product = (props) => {
  const {img, title, price } = props.product;
  const dir = "./img/products/"

  return (
    <section className="product">
      <div className="product__img">
        <img src={dir + img}  alt={title} title={title}/>
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count />
      </div>
      <div className="product__price">{price} руб.</div>
      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;
