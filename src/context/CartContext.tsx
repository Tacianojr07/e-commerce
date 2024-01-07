"use client";
import { IProductsProps } from "@/app/page";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface IContextProviderProps {
  children: ReactNode;
}
interface IContextProps {
  cart: ICartProps[];
  CartAmout: number;
  addItemCart: (newItem: IProductsProps) => void;
  removeItemCart: (item: IProductsProps) => void;
  total: string;
}

interface ICartProps {
  id: number;
  name: string;
  cover: string;
  price: number;
  description: string;
  amount: number;
  total: number;
}

export const Context = createContext({} as IContextProps);

function ContextProvider({ children }: IContextProviderProps) {
  const [cart, setCart] = useState<ICartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: IProductsProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      //se if for verdadeiro somamos mais item e calculamos o total
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);

      return;
    }

    //adiciona um item na nossa lista

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((prevCart) => [...prevCart, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(item: IProductsProps) {
    const indexItem = cart.findIndex((itemCart) => itemCart.id === item.id);

    if (cart[indexItem].amount > 1) {
      //irá remover 1
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);

      return;
    }

    const removeItem = cart.filter((itemCart) => itemCart.id !== item.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: IProductsProps[]) {
    const myCart = items;
    const result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);
    const resultFormated = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setTotal(resultFormated);
  }

  return (
    <Context.Provider
      value={{
        cart,
        CartAmout: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
