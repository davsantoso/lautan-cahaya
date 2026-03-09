import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";

export default function ProdukPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Katalog <span className="text-secondary">Produk</span></h1>
          <p className="text-textsoft text-lg max-w-2xl mx-auto">
            Jelajahi koleksi lengkap perlengkapan listrik kami. Mulai dari perumahan hingga kebutuhan industri berskala besar.
          </p>
        </div>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
