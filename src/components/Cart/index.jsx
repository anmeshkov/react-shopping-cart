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

  // увеличение товара в корзине
  const increaseProduct = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1,
          priceTotal: product.priceTotal * (product.count + 1),
        };
      }
      return product;
    });
    setCart(newCart);
  };

  // уменьшение товара в корзине
  const decreaseProduct = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        const newCount = (product.count - 1 > 1) ? product.count - 1 : 1

        return {
          ...product,
          count: newCount,
          // priceTotal: (product.count - 1 > 1) ? product.price * (product.count - 1) : product.price,
          priceTotal: newCount > 1 ? product.price * (product.count - 1) : product.price,
        };
      }
      return product;
    });
    setCart(newCart);
  };

  // удаление товара из корзины
  const deleteProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const products = cart.map((product) => (
    <Product
      increaseProduct={increaseProduct}
      decreaseProduct={decreaseProduct}
      deleteProduct={deleteProduct}
      product={product}
      key={product.id}
    />
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
