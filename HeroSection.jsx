import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ onARTryOn, onCustomDesign }) => {
  return (
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
              onClick={onARTryOn}
            >
              <Camera className="w-5 h-5 mr-2" />
              Coba AR Try-On
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full"
              onClick={onCustomDesign}
            >
              <Palette className="w-5 h-5 mr-2" />
              Design Custom
            </Button>
          </div>
        </motion.div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;