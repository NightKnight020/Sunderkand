"use client";

import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";

function SunderkandContent() {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-warm-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-saffron-100 to-warm-50 pt-8 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-saffron-600 hover:text-saffron-800 text-sm font-medium transition-colors">
            ← Back to Home
          </a>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mt-6 text-center">
            श्री सुन्दरकाण्ड
          </h1>
          <h2 className="font-serif text-xl md:text-2xl text-saffron-700 mt-2 text-center">
            Shri Sunderkand
          </h2>
          <p className="text-saffron-700/70 text-center mt-4 max-w-2xl mx-auto text-sm">
            Complete Sunderkand from Shri Ramcharitmanas by Goswami Tulsidas.
            Open or download the PDF below to follow along during recitations.
          </p>

          {/* PDF Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            {/* Gujarati */}
            <div className="bg-white rounded-2xl shadow-lg border border-saffron-100 p-6 text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-serif text-xl font-bold text-saffron-800">ગુજરાતી</h3>
              <p className="text-saffron-600 text-sm mt-1">Sunderkand in Gujarati</p>
              <p className="text-xs text-saffron-500 mt-1">Source: Jay Shree Ram Sundarkand Parivar</p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="/SundarkandGujarati.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-saffron-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-saffron-700 transition-colors shadow-md"
                >
                  📄 Open PDF
                </a>
                <a
                  href="/SundarkandGujarati.pdf"
                  download="SundarkandGujarati.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-saffron-100 text-saffron-800 px-6 py-3 rounded-xl font-semibold hover:bg-saffron-200 transition-colors"
                >
                  📥 Download
                </a>
              </div>
            </div>

            {/* Hindi - Coming Soon */}
            <div className="bg-white rounded-2xl shadow-lg border border-saffron-100 p-6 text-center opacity-75">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-serif text-xl font-bold text-saffron-800">हिन्दी</h3>
              <p className="text-saffron-600 text-sm mt-1">Sunderkand in Hindi</p>
              <p className="text-xs text-saffron-500 mt-1">Gita Press Gorakhpur</p>
              <div className="flex flex-col gap-3 mt-4">
                <div className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold cursor-not-allowed">
                  🕐 Coming Soon
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-saffron-600/60 text-center mt-8 text-xs max-w-xl mx-auto">
            🙏 For the most authentic experience, we recommend using a physical copy of Shri Ramcharitmanas during recitations.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-saffron-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-saffron-700 transition-colors z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default function SunderkandPath() {
  return (
    <LanguageProvider>
      <SunderkandContent />
    </LanguageProvider>
  );
}