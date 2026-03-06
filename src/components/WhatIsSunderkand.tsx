export default function WhatIsSunderkand() {
  return (
    <section id="sunderkand" className="py-20 px-6 bg-warm-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📖</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mb-4">
            What is Sunderkand?
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-saffron-100 mb-10">
          <p className="text-lg text-saffron-900/80 leading-relaxed mb-6">
            The <strong>Sunderkand</strong> is the fifth chapter of the{" "}
            <em>Ramcharitmanas</em>, composed by{" "}
            <strong>Goswami Tulsidas Ji</strong> in the 16th century. It narrates
            the heroic journey of <strong>Lord Hanuman</strong> to Lanka in
            search of Mata Sita.
          </p>
          <p className="text-lg text-saffron-900/80 leading-relaxed mb-6">
            This sacred text describes Hanuman Ji&apos;s unwavering devotion,
            extraordinary courage, and divine power. It is considered one of the
            most powerful chapters for spiritual practice.
          </p>

          {/* Verse */}
          <blockquote className="border-l-4 border-saffron-400 pl-6 py-2 my-8 bg-saffron-50/50 rounded-r-xl">
            <p className="font-serif text-xl text-saffron-800 italic leading-relaxed">
              &ldquo;मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्&rdquo;
            </p>
            <p className="text-saffron-700/70 text-sm mt-2">
              — Salutations to Hanuman, swift as the mind, fast as the wind, master of the senses, foremost among the wise
            </p>
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-saffron-100">
            <h3 className="font-serif text-xl font-semibold text-saffron-700 mb-4">
              🙏 Benefits of Recitation
            </h3>
            <ul className="space-y-3 text-saffron-900/75">
              {[
                "Removes obstacles and negativity from life",
                "Brings peace of mind and spiritual strength",
                "Invokes the blessings of Lord Hanuman",
                "Strengthens devotion and faith",
                "Creates positive energy in the home",
                "Builds community bonds",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-saffron-500 mt-0.5">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-saffron-100">
            <h3 className="font-serif text-xl font-semibold text-saffron-700 mb-4">
              🤗 What to Expect
            </h3>
            <ul className="space-y-3 text-saffron-900/75">
              {[
                "Warm welcome from the community",
                "Group recitation of the Sunderkand (~90 minutes)",
                "Copies of the text are available if you don't have one",
                "Aarti and prasad after the recitation",
                "Chai and fellowship with the community",
                "No experience needed — just come with an open heart",
              ].map((b, i) => (
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
