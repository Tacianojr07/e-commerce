"use client";
import Image from "next/image";
import shoes1 from "../assets/pexels-aman-jakhar-2048548.jpg";
import { StyledItem, StyledMain, StyledRight, StyledSection } from "./style";
export default function Home() {
  return (
    <StyledMain>
      <h1>Man</h1>

      <StyledSection>
        <StyledItem>
          <Image src={shoes1} alt="shoes man" />
          <p>Nike air force </p>
          <StyledRight>
            <p>$300,00</p>
            <button>add to cart</button>
          </StyledRight>
        </StyledItem>
        <StyledItem>
          <Image src={shoes1} alt="shoes man" />
          <p>Nike air force </p>
          <StyledRight>
            <p>$300,00</p>
            <button>add to cart</button>
          </StyledRight>
        </StyledItem>
        <StyledItem>
          <Image src={shoes1} alt="shoes man" />
          <p>Nike air force </p>
          <StyledRight>
            <p>$300,00</p>
            <button>add to cart</button>
          </StyledRight>
        </StyledItem>
        <StyledItem>
          <Image src={shoes1} alt="shoes man" />
          <p>Nike air force </p>
          <StyledRight>
            <p>$300,00</p>
            <button>add to cart</button>
          </StyledRight>
        </StyledItem>
      </StyledSection>
    </StyledMain>
  );
}
