"use client";
import React from "react";
import { StyledMain } from "./style";
import Image from "next/image";
import { StyledItemsCart } from "./style";
import { useContext } from "react";
import { Context } from "@/context/CartContext";

function Cart() {
  const { cart } = useContext(Context);

  return (
    <StyledMain>
      <h1>My cart</h1>
      <section>
        {cart.map((item) => (
          <StyledItemsCart key={item.id}>
            <Image
              src={item.cover}
              alt={item.name}
              width={100}
              height={100}
              quality={100}
              layout="responsive"
            />
            <strong>price: R${item.price}</strong>

            <button>+</button>
            <p>{item.amount}</p>
            <button>-</button>

            <strong>subtotal: R${item.price}</strong>
          </StyledItemsCart>
        ))}
      </section>
    </StyledMain>
  );
}

export default Cart;
