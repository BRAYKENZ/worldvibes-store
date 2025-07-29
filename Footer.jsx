import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-black/60 py-12 px-4 border-t border-purple-500/10">
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
        
        <div className="border-t border-purple-500/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 WORLDVIBES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;