"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function RequestRecitation() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [occasion, setOccasion] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [hasBooks, setHasBooks] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="request" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-saffron-50 to-warm-100 rounded-3xl p-12 border border-saffron-200 shadow-lg">
            <span className="text-6xl block mb-6">🙏</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-saffron-800 mb-4">
              {t.requestForm.successTitle}
            </h2>
            <p className="text-saffron-900/70 text-lg">
              {t.requestForm.successMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const occasionOptions = [
    { value: "", label: t.requestForm.occasionSelect },
    { value: "regular", label: t.requestForm.occasionRegular },
    { value: "birthday", label: t.requestForm.occasionBirthday },
    { value: "anniversary", label: t.requestForm.occasionAnniversary },
    { value: "grihapravesh", label: t.requestForm.occasionGrihaPravesh },
    { value: "health", label: t.requestForm.occasionHealth },
    { value: "memory", label: t.requestForm.occasionMemory },
    { value: "festival", label: t.requestForm.occasionFestival },
    { value: "other", label: t.requestForm.occasionOther },
  ];

  const hearAboutOptions = [
    { value: "", label: t.requestForm.hearSelect },
    { value: "instagram", label: "Instagram" },
    { value: "wordofmouth", label: t.requestForm.hearWordOfMouth },
    { value: "family", label: t.requestForm.hearFamily },
    { value: "other", label: t.requestForm.hearOther },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-saffron-200 bg-white text-saffron-900 placeholder-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-semibold text-saffron-800 mb-1.5";

  return (
    <section id="request" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-4xl mb-4 block">🙏</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mb-4">
            {t.requestForm.heading}
          </h2>
          <p className="text-saffron-900/70 text-lg mb-4">
            {t.requestForm.subtitle}
          </p>
          <div className="inline-block bg-saffron-50 border border-saffron-200 rounded-xl px-5 py-3 text-saffron-800 text-sm">
            {t.requestForm.locationNote}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gradient-to-br from-saffron-50/50 to-warm-50 rounded-2xl p-6 md:p-8 border border-saffron-100 space-y-5">
            {/* Full Name */}
            <div>
              <label className={labelClass}>{t.requestForm.fullName} *</label>
              <input type="text" required className={inputClass} />
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>{t.requestForm.phone} *</label>
              <input type="tel" required className={inputClass} />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>{t.requestForm.email}</label>
              <input type="email" className={inputClass} />
            </div>

            {/* Preferred Date(s) */}
            <div>
              <label className={labelClass}>{t.requestForm.preferredDates}</label>
              <input
                type="text"
                className={inputClass}
                placeholder={t.requestForm.preferredDatesPlaceholder}
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label className={labelClass}>{t.requestForm.preferredTime}</label>
              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  { value: "morning", label: t.requestForm.timeMorning },
                  { value: "evening", label: t.requestForm.timeEvening },
                  { value: "flexible", label: t.requestForm.timeFlexible },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                      preferredTime === opt.value
                        ? "border-saffron-500 bg-saffron-100 text-saffron-800"
                        : "border-saffron-200 bg-white text-saffron-700 hover:border-saffron-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredTime"
                      value={opt.value}
                      checked={preferredTime === opt.value}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className={labelClass}>{t.requestForm.occasion}</label>
              <select
                className={inputClass}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                {occasionOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Occasion */}
            {occasion === "other" && (
              <div>
                <label className={labelClass}>{t.requestForm.occasionCustom}</label>
                <input type="text" className={inputClass} />
              </div>
            )}

            {/* Number of attendees */}
            <div>
              <label className={labelClass}>{t.requestForm.attendees}</label>
              <input type="number" min="1" className={inputClass} />
            </div>

            {/* Sunderkand books */}
            <div>
              <label className={labelClass}>{t.requestForm.hasBooks}</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  { value: "yes", label: t.requestForm.booksYes },
                  { value: "no", label: t.requestForm.booksNo },
                  { value: "notsure", label: t.requestForm.booksNotSure },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                      hasBooks === opt.value
                        ? "border-saffron-500 bg-saffron-100 text-saffron-800"
                        : "border-saffron-200 bg-white text-saffron-700 hover:border-saffron-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="hasBooks"
                      value={opt.value}
                      checked={hasBooks === opt.value}
                      onChange={(e) => setHasBooks(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special arrangements */}
            <div>
              <label className={labelClass}>{t.requestForm.specialArrangements}</label>
              <textarea
                rows={3}
                className={inputClass}
                placeholder={t.requestForm.specialArrangementsPlaceholder}
              />
            </div>

            {/* How did you hear */}
            <div>
              <label className={labelClass}>{t.requestForm.hearAbout}</label>
              <select className={inputClass}>
                {hearAboutOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-serif font-bold text-lg shadow-lg hover:shadow-xl hover:from-saffron-600 hover:to-saffron-700 transition-all transform hover:-translate-y-0.5"
          >
            {t.requestForm.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
