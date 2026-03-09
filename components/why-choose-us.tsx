"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, ThumbsUp, Medal } from "lucide-react";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const reasons = [
    {
      icon: <ShieldCheck size={40} className="text-secondary" />,
      title: "Kualitas Terjamin",
      description: "Kami hanya menjual produk asli dan berstandar nasional maupun internasional."
    },
    {
      icon: <Clock size={40} className="text-secondary" />,
      title: "Layanan Cepat",
      description: "Proses pesanan dan pengiriman yang cepat untuk memastikan proyek Anda berjalan lancar."
    },
    {
      icon: <ThumbsUp size={40} className="text-secondary" />,
      title: "Harga Kompetitif",
      description: "Menawarkan harga grosir dan eceran terbaik tanpa mengorbankan kualitas."
    },
    {
      icon: <Medal size={40} className="text-secondary" />,
      title: "Berpengalaman",
      description: "Lebih dari 10 tahun melayani berbagai kebutuhan listrik rumah tangga dan industri."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="container mx-auto px-6 md:px-12 position-relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Mengapa Memilih <span className="text-secondary">Lautan Cahaya</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg"
          >
            Dedikasi kami adalah memberikan yang terbaik untuk setiap pelanggan melalui produk unggulan dan layanan prima.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
