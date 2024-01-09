"use client";
import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { StyledAmount, StyledHeader, StyledUl } from "./style";
import { useContext } from "react";
import { Context } from "@/context/CartContext";

function Header() {
  const { CartAmout } = useContext(Context);
  return (
    <StyledHeader>
      <h1>VENDRE</h1>
      <nav>
        <StyledUl>
          <Link href="/">Man</Link>
          <Link href="/woman">Woman</Link>
        </StyledUl>
      </nav>

      <div className="circle">
        {CartAmout > 0 && <StyledAmount>{CartAmout}</StyledAmount>}
        <button>
          <Link href="/cart">
            <IoBagOutline size={28} color="#000" />
          </Link>
        </button>
      </div>
    </StyledHeader>
  );
}

export default Header;
