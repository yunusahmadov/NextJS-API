"use client";

import Product from "./components/Product";

export default async function Home() {

const res =await fetch('https://fakestoreapi.com/products');
const products:Product[] =await res.json()

  return (
    <main className="">
      <section className="flex flex-col space-y-12 pb-44 items-center"> 
        <h1 className="text-5xl font-bold text-center">DEALS OF THE DAY</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

      </section>
    </main>
  );
}
