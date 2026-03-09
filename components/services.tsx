"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wrench, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
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

  const services = [
    {
      icon: <Lightbulb size={32} className="text-secondary" />,
      title: "Penjualan Produk Listrik",
      description: "Menyediakan lampu, kabel, saklar, stop kontak, dan berbagai perlengkapan distribusi listrik berkualitas tinggi.",
      delay: 0
    },
    {
      icon: <Wrench size={32} className="text-secondary" />,
      title: "Konsultasi Instalasi",
      description: "Tim ahli kami siap membantu Anda merencanakan dan memilih produk listrik yang paling tepat dan efisien.",
      delay: 0.1
    },
    {
      icon: <Building2 size={32} className="text-secondary" />,
      title: "Pengadaan Proyek",
      description: "Melayani supply material kelistrikan dalam jumlah besar untuk proyek residensial, komersial, maupun industri.",
      delay: 0.2
    },
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      title: "Garansi & After Sales",
      description: "Produk dilengkapi garansi resmi dan kami menjamin layanan purna jual yang responsif.",
      delay: 0.3
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
              Layanan Kami
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Solusi Terintegrasi <br />
              untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">Sistem Kelistrikan</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-textsoft text-lg max-w-md leading-relaxed md:text-right">
              Layanan komprehensif dari penyediaan komponen hingga konsultasi ahli, memastikan instalasi listrik Anda aman dan efisien.
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-textsoft leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/layanan"
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all font-semibold shadow-lg shadow-primary/20 hover:-translate-y-1"
          >
            Lihat Semua Layanan
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/produk"
            className="flex items-center gap-2 border-2 border-primary/20 text-primary px-8 py-4 rounded-xl hover:bg-primary/5 hover:border-primary transition-all font-semibold"
          >
            Eksplorasi Produk
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
