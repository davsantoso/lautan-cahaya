import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Tentang <span className="text-secondary">Kami</span></h1>
          <p className="text-textsoft text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat perjalanan Lautan Cahaya sebagai penyedia kebutuhan listrik terpercaya pilihan masyarakat.
          </p>
        </div>
        <About />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
