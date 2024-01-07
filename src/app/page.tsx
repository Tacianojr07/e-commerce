"use client";
import Image from "next/image";
import shoes1 from "../assets/pexels-aman-jakhar-2048548.jpg";
import { StyledItem, StyledMain, StyledRight, StyledSection } from "./style";
import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { useContext } from "react";
import { Context } from "@/context/CartContext";

export interface IProductsProps {
  id: number;
  name: string;
  cover: string;
  description: string;
  price: number;
}

export default function Home() {
  const { addItemCart } = useContext(Context);

  useEffect(() => {
    async function getProducuts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducuts();
  }, []);

  const [products, setProducts] = useState<IProductsProps[]>([]);

  function handleAddItem(products: IProductsProps) {
    addItemCart(products);
  }
  return (
    <StyledMain>
      <h1>Man</h1>

      <StyledSection>
        {products.map((products) => (
          <StyledItem key={products.id}>
            <Image
              src={products.cover}
              width={100}
              height={100}
              quality={100}
              alt="shoes man"
              layout="responsive"
            />
            <p>{products.name} </p>
            <StyledRight>
              <p>${products.price}</p>
              <button onClick={() => handleAddItem(products)}>
                add to cart
              </button>
            </StyledRight>
          </StyledItem>
        ))}
      </StyledSection>
    </StyledMain>
  );
}
