"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function JoinUs() {
  const { t } = useLanguage();

  return (
    <section
      id="join"
      className="py-20 px-6 bg-gradient-to-br from-saffron-500 via-saffron-400 to-saffron-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <span className="text-[16rem] text-white/[0.05] font-serif">🙏</span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
          {t.joinUsSection.heading}
        </h2>
        <p className="text-xl text-white/90 leading-relaxed mb-4">
          {t.joinUsSection.p1}
        </p>
        <p className="text-lg text-white/80 leading-relaxed mb-10">
          {t.joinUsSection.p2}
        </p>

        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10 inline-block">
          <p className="text-white font-serif text-lg mb-4">{t.joinUsSection.getInTouch}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-saffron-600 font-semibold px-6 py-3 rounded-full hover:bg-saffron-50 transition-colors shadow-lg"
            >
              {t.joinUsSection.whatsapp}
            </a>
            <a
              href="https://instagram.com/brantfordsunderkand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              {t.joinUsSection.instagramBtn}
            </a>
          </div>
        </div>

        <p className="text-2xl text-white font-serif">
          {t.joinUsSection.closing}
        </p>
      </div>
    </section>
  );
}
