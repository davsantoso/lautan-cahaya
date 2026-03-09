"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-background via-indigo-50/30 to-background">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6 border border-secondary/20">
              <Zap size={16} fill="currentColor" />
              Toko Alat Listrik Nomor 1
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary">
              Menerangi Setiap <br/>
              Sudut dengan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-600">
                Kualitas Terbaik
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-textsoft leading-relaxed mb-8">
              Lautan Cahaya menyediakan berbagai perlengkapan distribusi dan instalasi listrik terlengkap untuk rumah, kantor, maupun industri dengan jaminan mutu dan harga kompetitif.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#kontak"
                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all font-semibold shadow-lg shadow-primary/30 transform hover:-translate-y-1"
              >
                Pesan Sekarang
                <ArrowRight size={18} />
              </a>

              <a
                href="/produk"
                className="flex items-center gap-2 border-2 border-primary/20 text-primary px-8 py-4 rounded-xl hover:bg-primary/5 hover:border-primary transition-all font-semibold"
              >
                Lihat Katalog
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm font-medium text-textsoft">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-secondary" size={20} />
                <span>Produk Original</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-secondary" size={20} />
                <span>Garansi Resmi</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className="relative w-full aspect-square max-w-lg mx-auto lg:mr-0 z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-t-[100px] rounded-br-[100px] rounded-bl-3xl mix-blend-multiply filter blur-2xl"></div>
              
              <div className="relative w-full h-full bg-white p-6 rounded-t-[100px] rounded-br-[100px] rounded-bl-3xl border border-gray-100 shadow-2xl overflow-hidden flex items-center justify-center group transform transition-transform hover:scale-105 duration-500">
                 {/* Decorative grid */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
                 
                 <Image
                  src="/img/lampu.png" // Assumes this image exists in public as seen in original code
                  alt="Instalasi Listrik"
                  width={500}
                  height={500}
                  className="object-contain relative z-20 w-3/4 h-3/4 drop-shadow-2xl group-hover:-translate-y-4 transition-transform duration-700"
                  priority
                />
              </div>

               {/* Floating Badges */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }} 
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                 className="absolute top-10 -left-10 bg-white p-4 justify-center items-center flex flex-col rounded-2xl shadow-xl border border-gray-100 z-30"
               >
                 <span className="text-3xl font-extrabold text-secondary">10+</span>
                 <span className="text-xs font-semibold text-textsoft">Tahun<br/>Pengalaman</span>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-20 -right-6 bg-white p-4 flex items-center gap-3 rounded-2xl shadow-xl border border-gray-100 z-30"
               >
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="text-green-600" size={20} fill="currentColor" />
                 </div>
                 <div>
                   <p className="text-xs text-textsoft font-medium">Ribuan</p>
                   <p className="text-sm font-bold text-primary">Klien Puas</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
