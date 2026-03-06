"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const cards = [
    { icon: "🙏", title: t.about.devotionTitle, desc: t.about.devotionDesc },
    { icon: "🤝", title: t.about.communityTitle, desc: t.about.communityDesc },
    { icon: "✨", title: t.about.blessingsTitle, desc: t.about.blessingsDesc },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-warm-50">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-4xl mb-4 block">🙏</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mb-6">
          {t.about.heading}
        </h2>
        <p
          className="text-lg text-saffron-900/80 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: t.about.p1 }}
        />
        <p className="text-lg text-saffron-900/80 leading-relaxed mb-8">
          {t.about.p2}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-saffron-100 hover:shadow-md hover:border-saffron-200 transition-all"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-serif text-xl font-semibold text-saffron-700 mb-2">
                {item.title}
              </h3>
              <p className="text-saffron-900/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
