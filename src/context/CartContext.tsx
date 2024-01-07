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

  function addItemCart(newItem: IProductsProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      //se if for verdadeiro somamos mais item e calculamos o total
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return;
    }

    //adiciona um item na nossa lista

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((prevCart) => [...prevCart, data]);
  }

  return (
    <Context.Provider value={{ cart, CartAmout: cart.length, addItemCart }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
