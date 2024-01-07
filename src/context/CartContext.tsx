"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface IContextProviderProps {
  children: ReactNode;
}
interface IContextProps {
  cart: ICartProps[];
  CartAmout: number;
}

interface ICartProps {
  id: number;
  name: string;
  cover: string;
  price: number;
  description: string;
  amout: number;
  total: number;
}

export const Context = createContext({} as IContextProps);

function ContextProvider({ children }: IContextProviderProps) {
  const [cart, setCart1] = useState<ICartProps[]>([]);

  return (
    <Context.Provider value={{ cart, CartAmout: cart.length }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
