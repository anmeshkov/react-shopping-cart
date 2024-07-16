/* ----------------------------------------------------------------
  Cart Component
---------------------------------------------------------------- */

import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
// import data from "../../data";
import { useEffect, useState } from "react";

const url = "http://localhost:8080/products";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(null);

  // запрос на сервер
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }, []);

  useEffect(() => {
    if (cart) {
      setTotal({
        price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
        count: cart.reduce((prev, curr) => prev + curr.count, 0),
      });
    }
  }, [cart]);

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
        const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

        return {
          ...product,
          count: newCount,
          // priceTotal: (product.count - 1 > 1) ? product.price * (product.count - 1) : product.price,
          priceTotal:
            newCount > 1 ? product.price * (product.count - 1) : product.price,
        };
      }
      return product;
    });

    setCart(newCart);
  };

  // изменения значения в input руками
  const changeValue = (id, value) => {
    const newCart = cart.map((product) => {
      const newCount = value > 0 ? value : value * -1;

      if (product.id === id) {
        return {
          ...product,
          count: newCount,
          priceTotal: product.price * newCount,
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

  const renderCart = () => {
    const products = cart.map((product) => (
      <Product
        increaseProduct={increaseProduct}
        decreaseProduct={decreaseProduct}
        changeValue={changeValue}
        deleteProduct={deleteProduct}
        product={product}
        key={product.id}
      />
    ));
    return products;
  };

  return (
    <section className="cart">
      <CartHeader />
      {cart && renderCart()}
      {total && <CartFooter total={total} />}
    </section>
  );
};

export default Cart;
