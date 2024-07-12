/* ----------------------------------------------------------------
  Cart Component
---------------------------------------------------------------- */

import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "../../data";
import { useState } from "react";

const Cart = () => {
  const [cart, editCart] = useState(data);
  const products = cart.map((product) => <Product product={product} key={product.id}/>);

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
