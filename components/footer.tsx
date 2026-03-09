import Link from "next/link";
import { Zap, Facebook, Instagram, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12">
        {/* TOP COMPONENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* BRAND TEXT */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-6 group">
              <div className="p-2 bg-secondary text-primary rounded-lg">
                <Zap size={24} fill="currentColor" />
              </div>
              <span>Lautan <span className="text-secondary">Cahaya</span></span>
            </Link>

            <p className="text-sm text-white/70 tracking-wide leading-relaxed mb-6">
              Mitra terpercaya untuk segala jenis kebutuhan instalasi dan distribusi listrik Anda. Menyediakan produk original bergaransi resmi.
            </p>

            {/* Newsletter Setup */}
            <div className="flex bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
              <input
                type="text"
                placeholder="Masukkan email/WA..."
                className="w-full px-4 py-3 bg-transparent text-white text-sm outline-none placeholder:text-white/40"
              />
              <button className="bg-secondary text-primary font-bold px-5 text-sm hover:bg-amber-400 transition-colors">
                Gabung
              </button>
            </div>
            <p className="text-xs text-white/40 mt-3">Dapatkan info promo spesial.</p>
          </div>

          {/* PAGE LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              Halaman
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li><Link href="/" className="hover:text-secondary transition-colors">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-secondary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/produk" className="hover:text-secondary transition-colors">Katalog Produk</Link></li>
              <li><Link href="/layanan" className="hover:text-secondary transition-colors">Layanan</Link></li>
              <li><Link href="/lokasi" className="hover:text-secondary transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              Layanan & Info
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Panduan Instalasi</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pengadaan Proyek Besar</li>
              <li className="hover:text-white transition-colors cursor-pointer">Klaim Garansi</li>
              <li className="hover:text-white transition-colors cursor-pointer">Metode Pembayaran</li>
              <li className="hover:text-white transition-colors cursor-pointer">Syarat & Ketentuan</li>
            </ul>
          </div>

          {/* SOCIALS & CONTACT */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              Hubungi Spesialis Kami
            </h4>

            <ul className="space-y-4 text-sm text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Ruko Libersa Garden No.16 <br /> Jl. Karang Satria, Duren Jaya <br />Bekasi Timur, Kota Bekasi<br />Jawa Barat 17111<br /> Indonesia</span>
              </li>
            </ul>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm font-medium text-white/50">
          <p>© {new Date().getFullYear()} Lautan Cahaya Elektrikal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
