export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-warm-50">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-4xl mb-4 block">🙏</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mb-6">
          About Our Community
        </h2>
        <p className="text-lg text-saffron-900/80 leading-relaxed mb-6">
          We are a community Sunderkand recitation group based in{" "}
          <strong>Brantford, Ontario</strong>. We gather multiple times a week at
          various locations to recite the Sunderkand from{" "}
          <em>Shri Ramcharitmanas</em>.
        </p>
        <p className="text-lg text-saffron-900/80 leading-relaxed mb-8">
          All are welcome regardless of experience. Whether you&apos;ve been reciting
          for decades or are hearing about Sunderkand for the first time — you
          belong here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🙏",
              title: "Devotion",
              desc: "Come together in shared prayer and recitation",
            },
            {
              icon: "🤝",
              title: "Community",
              desc: "Build lasting bonds through spiritual practice",
            },
            {
              icon: "✨",
              title: "Blessings",
              desc: "Experience the divine grace of Hanuman Ji",
            },
          ].map((item) => (
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
