"use client"

import Image from "next/image"
import { useState } from "react"

type Props ={
    product:Product,
    fill?: boolean
}

const ProductImage = ({product,fill}:Props) => {
    const [loading, setLoading] = useState(true)
  return (
    <>
    {
        fill? (
            <Image src={product.image} alt={product.title} fill   className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                loading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              }`}
              onLoadingComplete={()=>setLoading(false)}
              />
        ):(
            <Image src={product.image} width={400} height={1000} alt={product.title} className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                loading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              }`}
              onLoadingComplete={()=>setLoading(false)}
              />
        )
    }
    </>
  )
}

export default ProductImage