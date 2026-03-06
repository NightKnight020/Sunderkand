import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import WhatIsSunderkand from "@/components/WhatIsSunderkand";
import Instagram from "@/components/Instagram";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-warm-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <WhatIsSunderkand />
      <Instagram />
      <JoinUs />
      <Footer />
    </main>
  );
}
