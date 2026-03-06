"use client";

import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";

const PDFS = {
  gujarati: "/SundarkandGujarati.pdf",
};

function SunderkandContent() {
  const { t } = useLanguage();
  const [fontSize, setFontSize] = useState(18);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-warm-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-saffron-100 to-warm-50 pt-8 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="text-saffron-600 hover:text-saffron-800 text-sm font-medium transition-colors"
          >
            ← Back to Home
          </a>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mt-4 text-center">
            श्री सुन्दरकाण्ड | Shri Sunderkand
          </h1>
          <p className="text-saffron-700/80 text-center mt-2 max-w-2xl mx-auto" style={{ fontSize }}>
            Complete Sunderkand from Shri Ramcharitmanas by Goswami Tulsidas, as published by Gita Press Gorakhpur
          </p>

          {/* Font size controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-sm text-saffron-700">Font Size:</span>
            <button
              onClick={() => setFontSize((s) => Math.max(14, s - 2))}
              className="w-8 h-8 rounded-full bg-saffron-200 text-saffron-800 font-bold hover:bg-saffron-300 transition-colors"
            >
              A-
            </button>
            <span className="text-sm text-saffron-600 w-8 text-center">{fontSize}</span>
            <button
              onClick={() => setFontSize((s) => Math.min(32, s + 2))}
              className="w-8 h-8 rounded-full bg-saffron-200 text-saffron-800 font-bold hover:bg-saffron-300 transition-colors"
            >
              A+
            </button>
          </div>

          {/* Download button */}
          <div className="flex justify-center mt-4">
            <a
              href={PDFS.gujarati}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-saffron-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-saffron-700 transition-colors shadow-lg"
            >
              📥 Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-saffron-100">
          <iframe
            src={PDFS.gujarati}
            className="w-full border-0"
            style={{ height: "80vh", minHeight: "600px" }}
            title="Shri Sunderkand - Gita Press Gorakhpur"
          />
        </div>

        {/* Note */}
        <div className="mt-6 bg-saffron-50 border border-saffron-200 rounded-xl p-4 text-center">
          <p className="text-saffron-700 text-sm" style={{ fontSize: Math.max(14, fontSize - 4) }}>
            📖 This text is sourced from Gita Press Gorakhpur publications. For the most authentic experience, we recommend using a physical copy of Shri Ramcharitmanas.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-saffron-600 text-white rounded-full shadow-lg hover:bg-saffron-700 transition-colors text-xl font-bold z-40"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default function SunderkandPathPage() {
  return (
    <LanguageProvider>
      <SunderkandContent />
    </LanguageProvider>
  );
}
