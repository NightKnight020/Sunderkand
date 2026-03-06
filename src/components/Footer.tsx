"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-saffron-900 text-saffron-200 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-serif text-xl text-saffron-100 mb-2">
          {t.footer.brand}
        </p>
        <p className="text-saffron-300/70 mb-4">
          {t.footer.location} &bull; {t.footer.tagline}
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://instagram.com/brantfordsunderkand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron-300 hover:text-white transition-colors"
          >
            {t.footer.instagram}
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron-300 hover:text-white transition-colors"
          >
            {t.footer.whatsapp}
          </a>
        </div>
        <p className="text-saffron-400/50 text-sm">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
