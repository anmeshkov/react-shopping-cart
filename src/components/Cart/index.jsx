/* ----------------------------------------------------------------
  Cart Component
---------------------------------------------------------------- */

import Buttom from "../Button";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
// import data from "../../data";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext(null);

const Cart = () => {
  const url = "http://localhost:8080/products";
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(null);
  const [fetchData, setFetchData] = useState(true);

  // запрос на сервер
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, [fetchData]);

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
    const product = cart.find((product) => product.id === id);
    const data = {
      ...product,
      count: product.count + 1,
      priceTotal: product.price * (product.count + 1),
    };

    fetch(url + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setFetchData((value) => !value);
      }
    });
  };

  // уменьшение товара в корзине
  const decreaseProduct = (id) => {
    const product = cart.find((product) => product.id === id);
    const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

    const data = {
      ...product,
      count: newCount,
      priceTotal:
        newCount > 1 ? product.price * (product.count - 1) : product.price,
    };

    fetch(url + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setFetchData((value) => !value);
      }
    });
  };

  // изменения значения в input руками
  const changeValue = (id, value) => {
    const product = cart.find((product) => product.id === id);
    const newCount = value > 0 ? value : value * -1;
    const data = {
      ...product,
      count: newCount,
      priceTotal: product.price * newCount,
    };

    fetch(url + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setFetchData((value) => !value);
      }
    });
  };

  // удаление товара из корзины
  const deleteProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);

    fetch(url + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setFetchData((value) => !value);
      }
    });
  };

  const addProduct = () => {
    // рандомные данные
    const titles = ["Apple MacBook Air 13", "Apple watch", "Mac Pro"];
    const images = ["macbook.jpg", "apple-watch.jpg", "mac-pro.jpg"];
    const prices = [100000, 29000, 190000];

    const randomValue = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    };

    const price = randomValue(prices) * 1;
    const data = {
      img: randomValue(images),
      title: randomValue(titles),
      count: 1,
      price: price,
      priceTotal: price,
    };

    // отправляем данные на сервер
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setFetchData((value) => !value);
      }
    });
  };

  // разметка корзины
  const products = () => {
    return cart.map((product) => (
      <Product
        // increaseProduct={increaseProduct}
        // decreaseProduct={decreaseProduct}
        // changeValue={changeValue}
        // deleteProduct={deleteProduct}
        product={product}
        key={product.id}
      />
    ));
  };

  return (
    <AppContext.Provider
      value={{ increaseProduct, decreaseProduct, changeValue, deleteProduct, addProduct }}
    >
      <section className="cart">
        <Buttom title={"Добавить товар"} />
        <CartHeader />
        {cart && products()}
        {total && <CartFooter total={total} />}
      </section>
    </AppContext.Provider>
  );
};

export default Cart;
