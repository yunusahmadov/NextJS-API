"use client";

import Product from "./components/Product";

export default async function Home() {

const res =await fetch('https://fakestoreapi.com/products');
const products:Product[] =await res.json()

  return (
    <main className="">
      <section className="flex flex-col space-y-12 pb-44"> 
        <h1 className="text-5xl font-bold text-center">DEALS OF THE DAY</h1>
        {
          products.map((product)=>( 
            //Передаем пропс продукт чтоб в файле Products могли взять его элементы
            <Product key={product.id} product={product}/>
          ))
        }
      </section>
    </main>
  );
}
