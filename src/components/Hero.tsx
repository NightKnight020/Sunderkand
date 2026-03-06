"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-saffron-500 via-saffron-400 to-saffron-600">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20rem] md:text-[28rem] text-white/[0.07] font-serif leading-none animate-gentle-pulse">
          ॐ
        </span>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="animate-fade-in-up text-white/90 text-lg md:text-xl tracking-widest uppercase mb-4">
          {t.hero.greeting}
        </p>
        <h1 className="animate-fade-in-up font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </h1>
        <p className="animate-fade-in-up-delay text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#schedule"
            className="inline-block bg-white text-saffron-600 font-semibold px-8 py-3 rounded-full hover:bg-saffron-50 transition-colors shadow-lg"
          >
            {t.hero.viewSchedule}
          </a>
          <a
            href="#join"
            className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            {t.hero.joinUs}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 54C96 48 192 36 288 42C384 48 480 72 576 78C672 84 768 72 864 60C960 48 1056 36 1152 36C1248 36 1344 48 1392 54L1440 60V120H0V60Z"
            className="fill-warm-50"
          />
        </svg>
      </div>
    </section>
  );
}
