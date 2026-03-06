"use client";

import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";

const openingDohas = [
  {
    lines: ["श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।", "बरनउँ रघुबर बिमल जसु, जो दायकु फल चारि॥"],
  },
  {
    lines: ["बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार।", "बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥"],
  },
];

const chaupais = [
  { num: 1, lines: ["जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥", "राम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा॥"] },
  { num: 2, lines: ["महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥", "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥"] },
  { num: 3, lines: ["हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै॥", "शंकर सुवन केसरी नंदन। तेज प्रताप महा जग बंदन॥"] },
  { num: 4, lines: ["विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥", "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥"] },
  { num: 5, lines: ["सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥", "भीम रूप धरि असुर सँहारे। रामचंद्र के काज सँवारे॥"] },
  { num: 6, lines: ["लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये॥", "रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥"] },
  { num: 7, lines: ["सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥", "सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥"] },
  { num: 8, lines: ["जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सके कहाँ ते॥", "तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥"] },
  { num: 9, lines: ["तुम्हरो मंत्र बिभीषन माना। लंकेश्वर भए सब जग जाना॥", "जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥"] },
  { num: 10, lines: ["प्रभु मुद्रिका मेलि मुख माहीं। जलधि लाँघि गये अचरज नाहीं॥", "दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥"] },
  { num: 11, lines: ["राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥", "सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डरना॥"] },
  { num: 12, lines: ["आपन तेज सम्हारो आपै। तीनों लोक हाँक तें काँपै॥", "भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥"] },
  { num: 13, lines: ["नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥", "संकट तें हनुमान छुडावै। मन क्रम बचन ध्यान जो लावै॥"] },
  { num: 14, lines: ["सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥", "और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥"] },
  { num: 15, lines: ["चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥", "साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥"] },
  { num: 16, lines: ["अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥", "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥"] },
  { num: 17, lines: ["तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥", "अंतकाल रघुबर पुर जाई। जहाँ जन्म हरिभक्त कहाई॥"] },
  { num: 18, lines: ["और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥", "संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥"] },
  { num: 19, lines: ["जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥", "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥"] },
  { num: 20, lines: ["जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥", "तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥"] },
];

const closingDoha = {
  lines: ["पवनतनय संकट हरन, मंगल मूरति रूप।", "राम लखन सीता सहित, हृदय बसहु सुर भूप॥"],
};

function HanumanChalisaContent() {
  const { t } = useLanguage();
  const [fontSize, setFontSize] = useState(20);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-warm-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-saffron-100 to-warm-50 pt-8 pb-6 px-4">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="text-saffron-600 hover:text-saffron-800 text-sm font-medium transition-colors"
          >
            ← Back to Home
          </a>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-saffron-800 mt-4 text-center">
            🙏 श्री हनुमान चालीसा
          </h1>
          <p className="text-saffron-700/70 text-center mt-2">
            Shri Hanuman Chalisa — by Goswami Tulsidas
          </p>

          {/* Font size controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-sm text-saffron-700">Font Size:</span>
            <button
              onClick={() => setFontSize((s) => Math.max(14, s - 2))}
              className="w-8 h-8 rounded-full bg-saffron-200 text-saffron-800 font-bold hover:bg-saffron-300 transition-colors"
            >
              A-
            </button>
            <span className="text-sm text-saffron-600 w-8 text-center">{fontSize}</span>
            <button
              onClick={() => setFontSize((s) => Math.min(36, s + 2))}
              className="w-8 h-8 rounded-full bg-saffron-200 text-saffron-800 font-bold hover:bg-saffron-300 transition-colors"
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* Opening Dohas */}
        <div className="text-center font-medium text-saffron-700 text-sm uppercase tracking-wider mb-2">
          ॥ दोहा ॥
        </div>
        {openingDohas.map((doha, i) => (
          <div
            key={`doha-${i}`}
            className="bg-gradient-to-r from-saffron-50 to-orange-50 border border-saffron-200 rounded-xl p-5 text-center"
          >
            {doha.lines.map((line, j) => (
              <p key={j} className="text-saffron-900 leading-relaxed" style={{ fontSize }}>
                {line}
              </p>
            ))}
          </div>
        ))}

        {/* Chaupais */}
        <div className="text-center font-medium text-saffron-700 text-sm uppercase tracking-wider mt-6 mb-2">
          ॥ चौपाई ॥
        </div>
        {chaupais.map((c) => (
          <div
            key={c.num}
            className="bg-white border border-saffron-100 rounded-xl p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="bg-saffron-100 text-saffron-700 font-bold text-sm rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                {c.num}
              </span>
              <div className="flex-1 text-center">
                {c.lines.map((line, j) => (
                  <p key={j} className="text-saffron-900 leading-relaxed" style={{ fontSize }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Closing Doha */}
        <div className="text-center font-medium text-saffron-700 text-sm uppercase tracking-wider mt-6 mb-2">
          ॥ दोहा ॥
        </div>
        <div className="bg-gradient-to-r from-saffron-50 to-orange-50 border border-saffron-200 rounded-xl p-5 text-center">
          {closingDoha.lines.map((line, j) => (
            <p key={j} className="text-saffron-900 leading-relaxed" style={{ fontSize }}>
              {line}
            </p>
          ))}
        </div>

        {/* Jai Shree Ram */}
        <div className="text-center py-6">
          <p className="text-2xl text-saffron-600 font-serif font-bold">॥ जय श्री राम ॥</p>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-saffron-600 text-white rounded-full shadow-lg hover:bg-saffron-700 transition-colors text-xl font-bold z-40"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default function HanumanChalisaPage() {
  return (
    <LanguageProvider>
      <HanumanChalisaContent />
    </LanguageProvider>
  );
}
