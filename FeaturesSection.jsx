import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette, Eye } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="glass-effect rounded-xl p-8 text-center hover-lift pulse-glow"
  >
    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Fitur Revolusioner
          </h2>
          <p className="text-xl text-gray-300">Teknologi terdepan untuk pengalaman berbelanja yang tak terlupakan</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Camera className="w-8 h-8 text-white" />}
            title="AR Try-On"
            description="Coba kaos secara virtual dengan teknologi Augmented Reality yang canggih"
            delay={0}
          />
          <FeatureCard 
            icon={<Palette className="w-8 h-8 text-white" />}
            title="Custom Design"
            description="Buat desain unik dengan tools design builder yang mudah digunakan"
            delay={0.2}
          />
          <FeatureCard 
            icon={<Eye className="w-8 h-8 text-white" />}
            title="360° View"
            description="Lihat produk dari segala sudut dengan tampilan 360 derajat yang interaktif"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;