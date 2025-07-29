import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CtaSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
  );
};

export default CtaSection;