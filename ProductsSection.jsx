import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 1,
    name: "Cosmic Wanderer",
    price: 299000,
    image: "Stylish black t-shirt with cosmic galaxy print design",
    category: "Limited Edition",
    rating: 4.9,
    colors: ["black", "navy", "purple"]
  },
  {
    id: 2,
    name: "Urban Pulse",
    price: 249000,
    image: "Modern white streetwear t-shirt with geometric patterns",
    category: "Streetwear",
    rating: 4.8,
    colors: ["white", "gray", "black"]
  },
  {
    id: 3,
    name: "Neon Dreams",
    price: 279000,
    image: "Vibrant neon-colored t-shirt with futuristic design elements",
    category: "Futuristic",
    rating: 4.9,
    colors: ["neon", "cyan", "purple"]
  },
  {
    id: 4,
    name: "Minimalist Zen",
    price: 229000,
    image: "Clean minimalist t-shirt with subtle zen-inspired graphics",
    category: "Minimalist",
    rating: 4.7,
    colors: ["white", "beige", "gray"]
  }
];

const ProductsSection = ({ favorites, onToggleFavorite, on360View }) => {
  return (
    <section id="products" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Koleksi Terbaru
          </h2>
          <p className="text-xl text-gray-300">Temukan kaos dengan desain eksklusif dan kualitas premium</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard 
                product={product} 
                isFavorited={favorites.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
                on360View={on360View}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;