import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function LokasiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* Header Section */}
        <div className="container mx-auto px-6 md:px-12 text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Lokasi <span className="text-secondary">Toko</span></h1>
          <p className="text-textsoft text-lg max-w-2xl mx-auto">
            Kunjungi toko fisik Lautan Cahaya untuk melihat langsung dan berkonsultasi mengenai produk yang Anda butuhkan.
          </p>
        </div>

        {/* Map Section */}
        <section className="w-full h-[400px] md:h-[500px] bg-gray-200 relative">
          {/* Map */}
          <div className="w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2385154670374!2d107.02071687453132!3d-6.232256161031607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e96116517af%3A0xb6548fe2d81f9065!2sLautan%20Cahaya%20Elektrik!5e0!3m2!1sid!2sid!4v1773040619786!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
