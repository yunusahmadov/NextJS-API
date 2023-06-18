import ProductImage from "@/app/components/ProductImage"
import Link from "next/link"
import Image from "next/image"
import backimg from '../../components/109618.png'

type Props={
    params:{
        id:string
    }
}

async function ProductPage({params: {id}}:Props) {

    const res =await fetch(`https://fakestoreapi.com/products/${id}`)
    const product :Product=await res.json()
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10 relative">
      <ProductImage product={product} />
      <Link href={"/"} className="absolute top-2 right-2 px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
        <Image src={backimg} height={20} width={20} alt='back'/>
      </Link>
      <div className="divide-y">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-semibold">
            {product.title}
          </h1>
          <h2 className="text-gray-600 font-bold text-xl md:text-3xl">
            ${product.price}
          </h2>
        </div>

        <div className="pt-8">
          <p className="text-sx md:text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  );
} 

export default ProductPage