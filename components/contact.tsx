"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontak" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
              Hubungi Kami
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Siap Membantu Kebutuhan Anda
            </h2>
            <p className="text-textsoft text-lg mb-10 leading-relaxed">
              Punya pertanyaan mengenai produk atau butuh penawaran harga untuk proyek Anda? Jangan ragu untuk menghubungi tim Lautan Cahaya.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-shrink-0 items-center justify-center text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Telepon / WhatsApp</h4>
                  <p className="text-textsoft leading-relaxed">+62 812 3456 7890<br />Senin - Minggu (08:00 - 21:00)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-shrink-0 items-center justify-center text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Email</h4>
                  <p className="text-textsoft leading-relaxed">halo@lautancahaya.com<br />sales@lautancahaya.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-shrink-0 items-center justify-center text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Lokasi Toko</h4>
                  <p className="text-textsoft leading-relaxed">Ruko Libersa Garden No.16 <br /> Jl. Karang Satria, Duren Jaya <br />Bekasi Timur, Kota Bekasi<br />Jawa Barat 17111<br /> Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Nama Lengkap</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-secondary transition-colors" placeholder="Nama Lengkap" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-secondary transition-colors" placeholder="email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Subjek</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-secondary transition-colors" placeholder="Penawaran Proyek / Info Produk" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Pesan</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-secondary transition-colors" placeholder="Tulis pesan Anda disini..."></textarea>
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-2 bg-secondary text-primary font-bold px-8 py-4 rounded-xl hover:bg-amber-400 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1">
                Kirim Pesan
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
