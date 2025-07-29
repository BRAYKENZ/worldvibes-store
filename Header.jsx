import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="relative z-50 glass-effect border-b border-purple-500/10">
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

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">Beranda</a>
            <a href="#products" className="text-white hover:text-purple-400 transition-colors">Produk</a>
            <a href="#features" className="text-white hover:text-purple-400 transition-colors">Fitur</a>
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-purple-500/10"
          >
            <div className="px-4 py-4 space-y-2">
              <a href="#home" className="block text-white hover:text-purple-400 py-2">Beranda</a>
              <a href="#products" className="block text-white hover:text-purple-400 py-2">Produk</a>
              <a href="#features" className="block text-white hover:text-purple-400 py-2">Fitur</a>
              <a href="#about" className="block text-white hover:text-purple-400 py-2">Tentang</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;