/* ----------------------------------------------------------------
  Product Component
---------------------------------------------------------------- */
import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";

const Product = ({product, increaseProduct, decreaseProduct, deleteProduct}) => {
  const { id, img, title, count, price, priceTotal } = product;
  const dir = "./img/products/";

  return (
    <section className="product">
      <div className="product__img">
        <img src={dir + img} alt={title} title={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count increaseProduct={increaseProduct} decreaseProduct={decreaseProduct} count={count} id={id}/>
      </div>
      <div className="product__price">{priceTotal} руб.</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id}/>
      </div>
    </section>
  );
};

export default Product;
