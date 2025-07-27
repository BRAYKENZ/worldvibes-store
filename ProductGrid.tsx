"use client";
import Image from "next/image";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-black font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
