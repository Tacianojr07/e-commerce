"use client";
import React from "react";
import { StyledMain } from "./style";
import Image from "next/image";
import shoesman from "../../assets/pexels-aman-jakhar-2048548.jpg";
import { StyledItemsCart } from "./style";

function Cart() {
  return (
    <StyledMain>
      <h1>My cart</h1>
      <section>
        <StyledItemsCart>
          <Image src={shoesman} alt="shoes" />
          <strong>price: R$1000</strong>

          <button>+</button>
          <p>1</p>
          <button>-</button>

          <strong>subtotal: R$1000000</strong>
        </StyledItemsCart>
        <p>total: R$40010</p>
      </section>
    </StyledMain>
  );
}

export default Cart;
