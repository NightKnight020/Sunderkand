// ============================================================
// 📅 SCHEDULE DATA — Edit this array to update the website!
// ============================================================
const scheduleData = [
  {
    day: "Tuesday",
    time: "7:00 PM",
    location: "Community Centre",
    address: "35 Brant Ave, Brantford, ON",
    host: "Patel Family",
  },
  {
    day: "Thursday",
    time: "7:00 PM",
    location: "Sri Hanuman Mandir",
    address: "120 King George Rd, Brantford, ON",
    host: "Sharma Ji",
  },
  {
    day: "Saturday",
    time: "10:00 AM",
    location: "Rotating — Check WhatsApp",
    address: "Various locations in Brantford",
    host: "",
  },
  {
    day: "Sunday",
    time: "6:00 PM",
    location: "Temple Hall",
    address: "55 Colborne St, Brantford, ON",
    host: "Gupta Family",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📅</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mb-4">
            Weekly Schedule
          </h2>
          <p className="text-saffron-900/70 text-lg">
            Join us at any of our recitation gatherings
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
                      🏠 Hosted by {item.host}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-saffron-900/50 text-sm mt-8">
          Schedule may change — check our WhatsApp group for the latest updates
        </p>
      </div>
    </section>
  );
}
