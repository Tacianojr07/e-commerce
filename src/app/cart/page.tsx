"use client";
import React from "react";
import { StyledEmptyCart, StyledMain } from "./style";
import Image from "next/image";
import { StyledItemsCart } from "./style";
import { useContext } from "react";
import { Context } from "@/context/CartContext";
import Link from "next/link";

function Cart() {
  const { cart } = useContext(Context);

  return (
    <StyledMain>
      <h1>My cart</h1>
      <section>
        {cart.length === 0 && (
          <StyledEmptyCart>
            <p>seu carrinho está vazio</p>
            <Link href="/">Volte para página de compras</Link>
          </StyledEmptyCart>
        )}

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

            <strong>subtotal: R${item.total}</strong>
          </StyledItemsCart>
        ))}
      </section>
    </StyledMain>
  );
}

export default Cart;
