import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import FeaturedProjects from "@/components/FeaturedProjects";
import WantMore from "@/components/WantMore";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import About from "@/components/About";
import ProofOfWork from "@/components/ProofOfWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Hero />
      <Statement />
      <FeaturedProjects />
      <WantMore />
      <TechnicalArsenal />
      <About />
      <ProofOfWork />
      <Contact />
      <Footer />
    </div>
  );
}
