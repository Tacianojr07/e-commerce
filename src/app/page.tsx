import Image from "next/image";
import shoes1 from "../assets/pexels-aman-jakhar-2048548.jpg";
export default function Home() {
  return (
    <main>
      <h1>Man</h1>

      <section>
        <div>
          <Image src={shoes1} alt="shoes man" />
          <p>Shoes man</p>
          <div>
            $300,00
            <button>add to cart</button>
          </div>
        </div>
      </section>
    </main>
  );
}
