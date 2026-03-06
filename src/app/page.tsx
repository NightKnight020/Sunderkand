"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RequestRecitation from "@/components/RequestRecitation";
import WhatIsSunderkand from "@/components/WhatIsSunderkand";
import Instagram from "@/components/Instagram";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-warm-50 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <RequestRecitation />
        <WhatIsSunderkand />
        <Instagram />
        <JoinUs />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
