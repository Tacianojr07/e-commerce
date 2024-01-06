"use client";
import Image from "next/image";
import shoes1 from "../assets/pexels-aman-jakhar-2048548.jpg";
import { StyledItem, StyledMain, StyledRight, StyledSection } from "./style";
import { useState, useEffect } from "react";
import { api } from "@/services/api";

interface IProductsProps {
  id: number;
  name: string;
  cover: string;
  description: string;
  price: number;
}

export default function Home() {
  useEffect(() => {
    async function getProducuts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducuts();
  }, []);

  const [products, setProducts] = useState<IProductsProps[]>([]);
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
      </StyledSection>
    </StyledMain>
  );
}
