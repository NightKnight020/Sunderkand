"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Schedule() {
  const { t } = useLanguage();

  const scheduleData = [
    {
      day: t.schedule.tuesday,
      time: "7:00 PM",
      location: t.schedule.communityCenter,
      address: "35 Brant Ave, Brantford, ON",
      host: "Patel Family",
    },
    {
      day: t.schedule.thursday,
      time: "7:00 PM",
      location: t.schedule.temple,
      address: "120 King George Rd, Brantford, ON",
      host: "Sharma Ji",
    },
    {
      day: t.schedule.saturday,
      time: "10:00 AM",
      location: t.schedule.rotating,
      address: "Various locations in Brantford",
      host: "",
    },
    {
      day: t.schedule.sunday,
      time: "6:00 PM",
      location: t.schedule.templeHall,
      address: "55 Colborne St, Brantford, ON",
      host: "Gupta Family",
    },
  ];

  return (
    <section id="schedule" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📅</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mb-4">
            {t.schedule.heading}
          </h2>
          <p className="text-saffron-900/70 text-lg">
            {t.schedule.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scheduleData.map((item, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-saffron-50 to-warm-100 rounded-2xl p-6 border border-saffron-100 hover:border-saffron-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-saffron-500 text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                  {item.day.slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl font-semibold text-saffron-800">
                    {item.day}
                  </h3>
                  <p className="text-saffron-600 font-medium">{item.time}</p>
                  <p className="text-saffron-900/80 mt-2 font-medium">
                    📍 {item.location}
                  </p>
                  <p className="text-saffron-900/60 text-sm">{item.address}</p>
                  {item.host && (
                    <p className="text-saffron-700/70 text-sm mt-1">
                      🏠 {t.schedule.hostedBy} {item.host}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-saffron-900/50 text-sm mt-8">
          {t.schedule.disclaimer}
        </p>
      </div>
    </section>
  );
}
