"use client";

import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";
import { sections, invocation } from "@/data/sunderkand-text";

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
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="text-saffron-600 hover:text-saffron-800 text-sm font-medium transition-colors"
          >
            {t.sunderkandPath.backHome}
          </a>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mt-4 text-center">
            {t.sunderkandPath.title}
          </h1>
          <p className="text-saffron-700/70 text-center mt-2">
            {t.sunderkandPath.subtitle}
          </p>

          {/* Font size controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-sm text-saffron-700">{t.sunderkandPath.fontSize}:</span>
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
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Table of Contents */}
        <details className="mb-8 bg-white rounded-2xl border border-saffron-100 shadow-sm">
          <summary className="cursor-pointer px-6 py-4 font-serif text-lg font-semibold text-saffron-800 hover:bg-saffron-50 rounded-2xl transition-colors">
            📖 {t.sunderkandPath.tableOfContents}
          </summary>
          <div className="px-6 pb-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            <a
              href="#invocation"
              className="text-center py-1.5 px-2 rounded-lg bg-saffron-50 text-saffron-700 text-sm hover:bg-saffron-100 transition-colors"
            >
              🙏
            </a>
            {sections.map((s) => (
              <a
                key={s.dohaNumber}
                href={`#doha-${s.dohaNumber}`}
                className="text-center py-1.5 px-2 rounded-lg bg-saffron-50 text-saffron-700 text-sm hover:bg-saffron-100 transition-colors"
              >
                {s.dohaNumber}
              </a>
            ))}
          </div>
        </details>

        {/* Invocation */}
        <div id="invocation" className="mb-8">
          <div className="bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
            <h2 className="font-serif text-xl font-bold mb-4 text-center opacity-90">
              ॥ {t.sunderkandPath.invocation} ॥
            </h2>
            <pre
              className="whitespace-pre-wrap text-center leading-relaxed font-sans"
              style={{ fontSize }}
            >
              {invocation}
            </pre>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.dohaNumber} id={`doha-${section.dohaNumber}`} className="mb-6">
            {section.verses.map((verse, vi) => (
              <div
                key={vi}
                className={`mb-3 rounded-xl p-4 md:p-6 ${
                  verse.type === "doha"
                    ? "bg-gradient-to-r from-saffron-100 to-saffron-50 border-l-4 border-saffron-500"
                    : "bg-white border border-saffron-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      verse.type === "doha"
                        ? "bg-saffron-500 text-white"
                        : "bg-saffron-200 text-saffron-700"
                    }`}
                  >
                    {verse.type === "doha"
                      ? `${t.sunderkandPath.doha} ${section.dohaNumber}`
                      : t.sunderkandPath.chaupai}
                  </span>
                </div>
                <pre
                  className="whitespace-pre-wrap leading-relaxed text-saffron-900 font-sans"
                  style={{ fontSize }}
                >
                  {verse.text}
                </pre>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-saffron-500 text-white text-xl shadow-lg hover:bg-saffron-600 transition-all z-50"
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
