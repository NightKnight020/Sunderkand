"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const langOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिंदी" },
  { code: "gu", label: "ગુજરાતી" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#schedule", label: t.nav.schedule },
    { href: "#sunderkand", label: t.nav.sunderkand },
    { href: "#join", label: t.nav.joinUs },
  ];

  const currentLabel = langOptions.find((l) => l.code === lang)!.label;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-saffron-100">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-serif text-lg font-bold text-saffron-700">
          {t.nav.brand}
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-saffron-800 hover:text-saffron-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-sm text-saffron-700 border border-saffron-200 rounded-full px-3 py-1 hover:bg-saffron-50 transition-colors flex items-center gap-1"
            >
              🌐 {currentLabel}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-saffron-100 rounded-xl shadow-lg overflow-hidden min-w-[120px]">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => { setLang(opt.code); setLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-saffron-50 transition-colors ${lang === opt.code ? "text-saffron-600 font-semibold bg-saffron-50/50" : "text-saffron-800"}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile lang switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-sm text-saffron-700 border border-saffron-200 rounded-full px-2 py-1 hover:bg-saffron-50 transition-colors"
            >
              🌐 {currentLabel}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-saffron-100 rounded-xl shadow-lg overflow-hidden min-w-[120px] z-50">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => { setLang(opt.code); setLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-saffron-50 transition-colors ${lang === opt.code ? "text-saffron-600 font-semibold bg-saffron-50/50" : "text-saffron-800"}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="text-saffron-700 text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-saffron-100 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-saffron-800 hover:text-saffron-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
