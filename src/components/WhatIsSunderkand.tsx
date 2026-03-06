"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function WhatIsSunderkand() {
  const { t } = useLanguage();

  return (
    <section id="sunderkand" className="py-20 px-6 bg-warm-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📖</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mb-4">
            {t.sunderkandSection.heading}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-saffron-100 mb-10">
          <p
            className="text-lg text-saffron-900/80 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: t.sunderkandSection.p1 }}
          />
          <p className="text-lg text-saffron-900/80 leading-relaxed mb-6">
            {t.sunderkandSection.p2}
          </p>

          {/* Verse - stays in Devanagari always */}
          <blockquote className="border-l-4 border-saffron-400 pl-6 py-2 my-8 bg-saffron-50/50 rounded-r-xl">
            <p className="font-serif text-xl text-saffron-800 italic leading-relaxed">
              &ldquo;मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्&rdquo;
            </p>
            <p className="text-saffron-700/70 text-sm mt-2">
              {t.sunderkandSection.verseTranslation}
            </p>
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-saffron-100">
            <h3 className="font-serif text-xl font-semibold text-saffron-700 mb-4">
              {t.sunderkandSection.benefitsTitle}
            </h3>
            <ul className="space-y-3 text-saffron-900/75">
              {t.sunderkandSection.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-saffron-500 mt-0.5">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-saffron-100">
            <h3 className="font-serif text-xl font-semibold text-saffron-700 mb-4">
              {t.sunderkandSection.expectTitle}
            </h3>
            <ul className="space-y-3 text-saffron-900/75">
              {t.sunderkandSection.expectations.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-saffron-500 mt-0.5">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
