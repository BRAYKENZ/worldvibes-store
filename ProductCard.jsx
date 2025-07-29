import React from 'react';
import { ShoppingBag, Heart, RotateCcw, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProductCard = ({ product, isFavorited, onToggleFavorite, on360View }) => {
  return (
    <div className="product-card rounded-xl p-6 hover-lift group">
      <div className="relative mb-4 ar-scanner rounded-lg overflow-hidden">
        <img 
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
         src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
        
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button
            size="icon"
            variant="ghost"
            className="bg-black/50 hover:bg-black/70 text-white"
            onClick={() => onToggleFavorite(product.id)}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-black/50 hover:bg-black/70 text-white"
            onClick={on360View}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        <div className="absolute bottom-2 left-2">
          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
            {product.category}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">({product.rating})</span>
        </div>

        <div className="flex items-center space-x-2">
          {product.colors.map((color, i) => (
            <div 
              key={i}
              className={`w-6 h-6 rounded-full border-2 border-gray-600 ${
                color === 'black' ? 'bg-black' :
                color === 'white' ? 'bg-white' :
                color === 'navy' ? 'bg-blue-900' :
                color === 'purple' ? 'bg-purple-600' :
                color === 'gray' ? 'bg-gray-500' :
                color === 'neon' ? 'bg-gradient-to-r from-green-400 to-cyan-400' :
                color === 'cyan' ? 'bg-cyan-500' :
                color === 'beige' ? 'bg-yellow-100' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gradient">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
            onClick={() => {
              toast({
                title: "Ditambahkan ke Keranjang",
                description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
              });
            }}
          >
            <ShoppingBag className="w-4 h-4 mr-1" />
            Beli
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;