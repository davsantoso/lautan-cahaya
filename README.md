# ✦ Lautan Cahaya Elektrikal

Lautan Cahaya adalah toko dan penyedia kebutuhan instalasi listrik terlengkap yang melayani pembelian ritel maupun pengadaan proyek skala besar. Website profil perusahaan ini dirancang khusus untuk merepresentasikan profesionalisme dan kelengkapan produk Lautan Cahaya, dengan antarmuka yang modern, dinamis, dan responsif.

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* modern:

- **Framework:** [Next.js](https://nextjs.org/) (Menggunakan fitur App Router yang lebih cepat)
- **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) untuk desain yang fleksibel dan modular.
- **Library Animasi:** [Framer Motion](https://www.framer.com/motion/) untuk menghadirkan animasi berbasis skrol (*scroll animations*) dan transisi yang *smooth*.
- **Ikon:** [Lucide React](https://lucide.dev/) untuk visual antarmuka yang bersih dan konsisten.

## ✨ Fitur Utama & Struktur Halaman

Website ini terdiri dari komponen modular yang diposisikan sedemikian rupa untuk membentuk profil perusahaan utuh:

- `Beranda` (`/`): Menyatukan seluruh informasi utama toko seperti *Hero Banner*, Pengantar Singkat, Layanan Utama, Kelebihan (*Why Choose Us*), Galeri Produk, dan Kontak.
- `Tentang Kami` (`/tentang`): Menceritakan perjalanan dan profil mendalam Lautan Cahaya.
- `Layanan` (`/layanan`): Rincian lengkap mengenai konsultasi proyek dan instalasi listrik.
- `Katalog Produk` (`/produk`): Menampilkan kategori peralatan elektrikal secara elegan menggunakan gaya *Gallery Grid*.
- `Lokasi & Kontak` (`/lokasi`): Menyajikan integrasi interaktif dengan peta area toko beserta formulir pertanyaan.

## 🛠️ Instalasi & Menjalankan di Lokal

Pastikan Anda memiliki [Node.js](https://nodejs.org/) yang telah terpasang pada komputer Anda.

1. Beralih ke direktori proyek lokal di terminal:
```bash
cd lautan-cahaya
```

2. Instal seluruh *dependencies* yang dibutuhkan:
```bash
npm install
```

3. Jalankan aplikasi dalam mode pengembangan (*development*):
```bash
npm run dev
```

4. Buka peramban Anda dan kunjungi `http://localhost:3000` untuk melihat hasilnya secara langsung.

## 📦 Build untuk Produksi (Deployment)

Untuk menyiapkan proyek ini agar ringan dan siap di-hosting ke layanan publik (seperti Vercel, Netlify, atau layanan server lainnya), jalankan tahap *build* berikut:

```bash
npm run build
```
Proses ini akan mengkompilasi kode dan menghasilkan struktur *Static Site Generation (SSG)* di mana mungkin, mempercepat waktu muat halaman secara drastis.

Setelah proses *build* (*Compiled successfully*) selesai, Anda bisa mensimulasikan server produksi dengan:
```bash
npm start
```

## 🎨 Konfigurasi Tema (Theme Customization)
Warna tema aplikasi ini berpusat pada nuansa Kelistrikan (*Electric Blue* dan *Amber*). Pengaturan tema ini dapat diedit langsung melalui variabel CSS global di dalam `app/globals.css`.

- `--primary`: Warna dasar dominan, cocok untuk teks cetak tebal dan *footer* (Default: `Deep Blue`).
- `--secondary`: Aksen *call-to-action* untuk memandu mata audiens (Default: `Warning Amber/Yellow`).
