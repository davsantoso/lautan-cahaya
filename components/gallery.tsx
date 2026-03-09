"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/img/lampu.png", alt: "Lampu LED", title: "Lampu & Penerangan" },
    { src: "/img/kabel.png", alt: "Kabel Instalasi", title: "Kabel & Instalasi" },
    { src: "/img/stop.png", alt: "Saklar & Stop Kontak", title: "Komponen Elektrikal" },
    { src: "/img/mcb.png", alt: "Panel Listrik", title: "Panel & Distribusi" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4">
            Galeri Produk
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Koleksi Produk <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-500">Terbaik</span>
          </h2>
          <p className="text-textsoft text-lg">
            Temukan berbagai macam produk kelistrikan berkualitas yang siap memenuhi spesifikasi proyek Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-square cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500 z-10"></div>
              {/* Note: In a real app we'd use different images. Reusing existing ones for demo. */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 z-20"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
                <div className="w-12 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
