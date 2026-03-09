import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function LayananPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Layanan <span className="text-secondary">Kami</span></h1>
          <p className="text-textsoft text-lg max-w-2xl mx-auto">
            Solusi yang kami tawarkan tidak terbatas pada penyediaan produk, tetapi juga pelayanan komprehensif bagi sistem kelistrikan Anda.
          </p>
        </div>
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
