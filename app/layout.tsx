import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.className} text-primary bg-background overflow-x-hidden selection:bg-secondary selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
