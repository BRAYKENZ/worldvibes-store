
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, User, Heart, Star, Camera, Palette, RotateCcw, Zap, Sparkles, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isARMode, setIsARMode] = useState(false);
  const [isDesignMode, setIsDesignMode] = useState(false);
  const [currentView, setCurrentView] = useState('front');
  const [favorites, setFavorites] = useState([]);

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

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    toast({
      title: favorites.includes(productId) ? "Dihapus dari Favorit" : "Ditambahkan ke Favorit",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const handleARTryOn = () => {
    setIsARMode(true);
    toast({
      title: "AR Try-On Diaktifkan",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const handleCustomDesign = () => {
    setIsDesignMode(true);
    toast({
      title: "Design Builder Dibuka",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const handle360View = () => {
    setCurrentView(currentView === 'front' ? 'back' : 'front');
    toast({
      title: "360° View",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>WORLDVIBES - Premium T-Shirt Brand | Kaos Berkualitas Tinggi</title>
        <meta name="description" content="Temukan koleksi kaos premium WORLDVIBES dengan desain unik dan kualitas terbaik. Fitur AR try-on dan custom design tersedia." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        
        {/* Navigation */}
        <nav className="relative z-50 glass-effect border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-orbitron text-2xl font-bold text-gradient">WORLDVIBES</span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-white hover:text-purple-400 transition-colors">Beranda</a>
                <a href="#products" className="text-white hover:text-purple-400 transition-colors">Produk</a>
                <a href="#custom" className="text-white hover:text-purple-400 transition-colors">Custom</a>
                <a href="#about" className="text-white hover:text-purple-400 transition-colors">Tentang</a>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-400">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-400">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-400 relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-xs flex items-center justify-center">0</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden glass-effect border-t border-purple-500/20"
              >
                <div className="px-4 py-4 space-y-2">
                  <a href="#home" className="block text-white hover:text-purple-400 py-2">Beranda</a>
                  <a href="#products" className="block text-white hover:text-purple-400 py-2">Produk</a>
                  <a href="#custom" className="block text-white hover:text-purple-400 py-2">Custom</a>
                  <a href="#about" className="block text-white hover:text-purple-400 py-2">Tentang</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-gradient leading-tight">
                WORLDVIBES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Rasakan pengalaman berbelanja kaos yang revolusioner dengan teknologi AR dan custom design
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full neon-glow"
                  onClick={handleARTryOn}
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Coba AR Try-On
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full"
                  onClick={handleCustomDesign}
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Design Custom
                </Button>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full floating-animation"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/20 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="product-card rounded-xl p-6 hover-lift group"
                >
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
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/50 hover:bg-black/70 text-white"
                        onClick={handle360View}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
                Fitur Revolusioner
              </h2>
              <p className="text-xl text-gray-300">Teknologi terdepan untuk pengalaman berbelanja yang tak terlupakan</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-xl p-8 text-center hover-lift pulse-glow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AR Try-On</h3>
                <p className="text-gray-300">Coba kaos secara virtual dengan teknologi Augmented Reality yang canggih</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-effect rounded-xl p-8 text-center hover-lift pulse-glow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Design</h3>
                <p className="text-gray-300">Buat desain unik dengan tools design builder yang mudah digunakan</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-effect rounded-xl p-8 text-center hover-lift pulse-glow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">360° View</h3>
                <p className="text-gray-300">Lihat produk dari segala sudut dengan tampilan 360 derajat yang interaktif</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="gradient-border p-12 rounded-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
                Siap Merasakan Pengalaman Baru?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Bergabunglah dengan ribuan customer yang sudah merasakan revolusi fashion dengan WORLDVIBES
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full neon-glow"
                  onClick={() => {
                    toast({
                      title: "Mulai Berbelanja",
                      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
                    });
                  }}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Mulai Berbelanja
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full"
                  onClick={() => {
                    toast({
                      title: "Pelajari Lebih Lanjut",
                      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
                    });
                  }}
                >
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 py-12 px-4 border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-orbitron text-xl font-bold text-gradient">WORLDVIBES</span>
                </div>
                <p className="text-gray-400">
                  Revolusi fashion dengan teknologi terdepan untuk pengalaman berbelanja yang tak terlupakan.
                </p>
              </div>
              
              <div>
                <span className="text-white font-semibold mb-4 block">Produk</span>
                <div className="space-y-2">
                  <p className="text-gray-400 hover:text-purple-400 cursor-pointer">Kaos Premium</p>
                  <p className="text-gray-400 hover:text-purple-400 cursor-pointer">Limited Edition</p>
                  <p className="text-gray-400 hover:text-purple-400 cursor-pointer">Custom Design</p>
                </div>
              </div>
              
              <div>
                <span className="text-white font-semibold mb-4 block">Layanan</span>
                <div className="space-y-2">
                  <p className="text-gray-400 hover:text-purple-400 cursor-pointer">AR Try-On</p>
                  <p className="text-gray-400 hover:text-purple-400 cursor-pointer">Design Builder</p>
                  <p className="text-gray-400 hover:text-purple-400 cursor-pointer">360° View</p>
                </div>
              </div>
              
              <div>
                <span className="text-white font-semibold mb-4 block">Kontak</span>
                <div className="space-y-2">
                  <p className="text-gray-400">Email: hello@worldvibes.com</p>
                  <p className="text-gray-400">Phone: +62 812 3456 7890</p>
                  <p className="text-gray-400">Instagram: @worldvibes_id</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2024 WORLDVIBES. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;
