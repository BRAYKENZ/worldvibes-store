import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CtaSection from '@/components/sections/CtaSection';
import { toast } from '@/components/ui/use-toast';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

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
    toast({
      title: "AR Try-On Diaktifkan",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const handleCustomDesign = () => {
    toast({
      title: "Design Builder Dibuka",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const handle360View = () => {
    toast({
      title: "360° View",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Kamu bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection onARTryOn={handleARTryOn} onCustomDesign={handleCustomDesign} />
        <ProductsSection favorites={favorites} onToggleFavorite={toggleFavorite} on360View={handle360View} />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;