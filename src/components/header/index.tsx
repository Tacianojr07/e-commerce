"use client";
import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { StyledAmount, StyledHeader, StyledUl } from "./style";

function Header() {
  return (
    <StyledHeader>
      <h1>VENDRE</h1>
      <nav>
        <StyledUl>
          <Link href="#">Man</Link>
          <Link href="#">Woman</Link>
        </StyledUl>
      </nav>

      <div className="circle">
        <StyledAmount>1</StyledAmount>
        <button>
          <Link href="#">
            <IoBagOutline size={28} color="#000" />
          </Link>
        </button>
      </div>
    </StyledHeader>
  );
}

export default Header;
