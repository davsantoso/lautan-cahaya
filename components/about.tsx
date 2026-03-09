"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    "Produk Original & Bersertifikat",
    "Harga Grosir Terjangkau",
    "Konsultasi Instalasi Gratis",
    "Pengiriman Cepat & Aman"
  ];

  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/50 skew-x-12 transform origin-top-right -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* IMAGE SECTION */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="/img/about.png"
                alt="Aktivitas Toko Lautan Cahaya"
                width={600}
                height={700}
                className="object-cover w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply opacity-60"></div>
            </div>

            {/* DECORATION */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-secondary/20 blur-xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-primary/10 blur-2xl -z-10" />
            
            {/* Experience Badge */}
            <motion.div 
              className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-2xl">
                10+
              </div>
              <div>
                <p className="text-xl font-bold text-primary">Tahun</p>
                <p className="text-sm text-textsoft">Melayani Pelanggan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT SECTION */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4">
              Tentang Kami
            </motion.p>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Mitra Terpercaya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">Kebutuhan Listrik</span> Anda
            </motion.h2>

            <motion.p variants={itemVariants} className="text-textsoft text-lg leading-relaxed mb-8">
              Lautan Cahaya berkomitmen menyediakan produk kelistrikan berkualitas unggul, aman, dan berstandar nasional (SNI) maupun internasional. Kami menggabungkan inovasi teknologi dengan pelayanan sepenuh hati.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span className="text-primary font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 pb-10 border-b border-gray-100">
              <div>
                <h3 className="text-3xl font-extrabold text-primary mb-1">10k+</h3>
                <p className="text-sm text-textsoft font-medium">Produk Tersedia</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-primary mb-1">98%</h3>
                <p className="text-sm text-textsoft font-medium">Kepuasan Klien</p>
              </div>
              <div className="hidden md:block">
                <h3 className="text-3xl font-extrabold text-primary mb-1">24/7</h3>
                <p className="text-sm text-textsoft font-medium">Dukungan Teknis</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="/tentang"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl hover:bg-blue-900 transition-all font-semibold shadow-lg hover:-translate-y-1"
              >
                Selengkapnya Tentang Kami
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
