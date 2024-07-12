/* ----------------------------------------------------------------
  Cart Component
---------------------------------------------------------------- */

import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "../../data";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(data);

  // удаление товара из корзины
  const deleteProduct = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  const products = cart.map((product) => (
    <Product deleteProduct={deleteProduct} product={product} key={product.id} />
  ));

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
