// app.js
const i18n = {
  en: {
    "nav.features": "Features",
    "nav.dashboard": "Dashboard",
    "nav.contact": "Contact",
    "cta.sos": "SOS",
    "hero.title": "Travel safer with AI, Geo‑Fencing and Digital ID",
    "hero.subtitle": "Real-time monitoring, private digital IDs, and rapid incident response for every tourist.",
    "cta.learnMore": "Learn more",
    "cta.getStarted": "Get started",
    "badge.blockchain": "Blockchain Digital ID",
    "badge.geofence": "Geo‑fencing Alerts",
    "badge.ai": "AI Anomaly Detection",
    "legend.highRisk": "High risk",
    "legend.mediumRisk": "Medium",
    "legend.lowRisk": "Low",
    "features.title": "Key Features",
    "features.didTitle": "Digital Tourist ID",
    "features.didDesc": "Secure, time‑bound IDs with KYC and selective disclosure.",
    "features.geofenceTitle": "Geo‑fencing",
    "features.geofenceDesc": "Smart alerts entering restricted or high‑risk zones.",
    "features.aiTitle": "AI Anomalies",
    "features.aiDesc": "Detect drop‑offs, deviations, and prolonged inactivity.",
    "features.responseTitle": "Rapid Response",
    "features.responseDesc": "SOS with live location to nearest unit and family.",
    "dashboard.title": "Operations Dashboard",
    "dashboard.map": "Live Map",
    "dashboard.live": "LIVE",
    "dashboard.alerts": "Alerts",
    "dashboard.alert1": "Distress signal near Tiger Hill",
    "dashboard.alert2": "Entry into restricted corridor",
    "dashboard.alert3": "Route back on track",
    "dashboard.stats": "Stats (24h)",
    "dashboard.sos": "SOS",
    "dashboard.totalAlerts": "Alerts",
    "dashboard.avgResponse": "Avg Response",
    "dashboard.note": "This is a static preview. Connect APIs for real data.",
    "contact.title": "Contact & Demo",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.accessibility": "Accessibility",
    "sos.title": "Send SOS?",
    "sos.subtitle": "Share your live location with responders and emergency contacts.",
    "sos.cancel": "Cancel",
    "sos.confirm": "Send SOS"
  },
  hi: {
    "nav.features": "विशेषताएँ",
    "nav.dashboard": "डैशबोर्ड",
    "nav.contact": "संपर्क",
    "cta.sos": "एसओएस",
    "hero.title": "एआई, जियो‑फेंसिंग और डिजिटल आईडी के साथ सुरक्षित यात्रा",
    "hero.subtitle": "वास्तविक‑समय निगरानी, निजी डिजिटल आईडी और त्वरित प्रतिक्रिया।",
    "cta.learnMore": "और जानें",
    "cta.getStarted": "शुरू करें",
    "badge.blockchain": "ब्लॉकचेन डिजिटल आईडी",
    "badge.geofence": "जियो‑फेंसिंग चेतावनी",
    "badge.ai": "एआई विसंगति पहचान",
    "legend.highRisk": "उच्च जोखिम",
    "legend.mediumRisk": "मध्यम",
    "legend.lowRisk": "कम",
    "features.title": "मुख्य विशेषताएँ",
    "features.didTitle": "डिजिटल टूरिस्ट आईडी",
    "features.didDesc": "सुरक्षित, समय‑सीमित आईडी KYC के साथ।",
    "features.geofenceTitle": "जियो‑फेंसिंग",
    "features.geofenceDesc": "प्रतिबंधित/जोखिम क्षेत्रों में जाते ही अलर्ट।",
    "features.aiTitle": "एआई विसंगतियाँ",
    "features.aiDesc": "ड्रॉप‑ऑफ, विचलन और निष्क्रियता का पता लगाएँ।",
    "features.responseTitle": "त्वरित प्रत्युत्तर",
    "features.responseDesc": "निकटतम यूनिट और परिवार को लाइव लोकेशन।",
    "dashboard.title": "ऑपरेशंस डैशबोर्ड",
    "dashboard.map": "लाइव मैप",
    "dashboard.live": "लाइव",
    "dashboard.alerts": "अलर्ट",
    "dashboard.alert1": "टाइगर हिल के पास संकट संकेत",
    "dashboard.alert2": "प्रतिबंधित कॉरिडोर में प्रवेश",
    "dashboard.alert3": "मार्ग फिर सही",
    "dashboard.stats": "आंकड़े (24घं)",
    "dashboard.sos": "एसओएस",
    "dashboard.totalAlerts": "अलर्ट",
    "dashboard.avgResponse": "औसत प्रतिक्रिया",
    "dashboard.note": "यह स्थैतिक पूर्वावलोकन है। वास्तविक डेटा के लिए API जोड़ें।",
    "contact.title": "संपर्क व डेमो",
    "contact.name": "नाम",
    "contact.email": "ईमेल",
    "contact.message": "संदेश",
    "contact.send": "भेजें",
    "footer.privacy": "गोपनीयता",
    "footer.terms": "नियम",
    "footer.accessibility": "सुलभता",
    "sos.title": "एसओएस भेजें?",
    "sos.subtitle": "रिस्पॉन्डर और आपात संपर्कों के साथ लोकेशन साझा करें।",
    "sos.cancel": "रद्द",
    "sos.confirm": "भेजें"
  },
  bn: {
    "nav.features": "বৈশিষ্ট্য",
    "nav.dashboard": "ড্যাশবোর্ড",
    "nav.contact": "যোগাযোগ",
    "cta.sos": "এসওএস",
    "hero.title": "এআই, জিও‑ফেন্সিং এবং ডিজিটাল আইডি সহ নিরাপদ ভ্রমণ",
    "hero.subtitle": "রিয়েল‑টাইম মনিটরিং, প্রাইভেট ডিজিটাল আইডি এবং দ্রুত রেসপন্স।",
    "cta.learnMore": "আরও জানুন",
    "cta.getStarted": "শুরু করুন",
    "badge.blockchain": "ব্লকচেইন ডিজিটাল আইডি",
    "badge.geofence": "জিও‑ফেন্সিং অ্যালার্ট",
    "badge.ai": "এআই অ্যানোমালি ডিটেকশন",
    "legend.highRisk": "উচ্চ ঝুঁকি",
    "legend.mediumRisk": "মধ্যম",
    "legend.lowRisk": "নিম্ন",
    "features.title": "মূল বৈশিষ্ট্য",
    "features.didTitle": "ডিজিটাল ট্যুরিস্ট আইডি",
    "features.didDesc": "সুরক্ষিত, সময়‑সীমাবদ্ধ আইডি KYC সহ।",
    "features.geofenceTitle": "জিও‑ফেন্সিং",
    "features.geofenceDesc": "ঝুঁকিপূর্ণ/নিষিদ্ধ এলাকায় ঢুকলে সতর্কতা।",
    "features.aiTitle": "এআই অ্যানোমালি",
    "features.aiDesc": "ড্রপ‑অফ, ডেভিয়েশন ও নিষ্ক্রিয়তা শনাক্ত করে।",
    "features.responseTitle": "দ্রুত রেসপন্স",
    "features.responseDesc": "লাইভ লোকেশন নিকটতম ইউনিট ও পরিবারে।",
    "dashboard.title": "অপারেশনস ড্যাশবোর্ড",
    "dashboard.map": "লাইভ ম্যাপ",
    "dashboard.live": "লাইভ",
    "dashboard.alerts": "অ্যালার্ট",
    "dashboard.alert1": "টাইগার হিলের কাছে এসওএস",
    "dashboard.alert2": "নিষিদ্ধ করিডোরে প্রবেশ",
    "dashboard.alert3": "রুটে প্রত্যাবর্তন",
    "dashboard.stats": "পরিসংখ্যান (২৪ঘ)",
    "dashboard.sos": "এসওএস",
    "dashboard.totalAlerts": "অ্যালার্ট",
    "dashboard.avgResponse": "গড় সাড়া",
    "dashboard.note": "এটি একটি স্ট্যাটিক প্রিভিউ। এপিআই সংযোগ করুন।",
    "contact.title": "যোগাযোগ ও ডেমো",
    "contact.name": "নাম",
    "contact.email": "ইমেইল",
    "contact.message": "বার্তা",
    "contact.send": "পাঠান",
    "footer.privacy": "প্রাইভেসি",
    "footer.terms": "টার্মস",
    "footer.accessibility": "অ্যাক্সেসিবিলিটি",
    "sos.title": "এসওএস পাঠাবেন?",
    "sos.subtitle": "রেসপন্ডার ও জরুরি কন্ট্যাক্টের সাথে লোকেশন শেয়ার করুন।",
    "sos.cancel": "বাতিল",
    "sos.confirm": "পাঠান"
  }
};

const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));

function setYear() {
  const y = new Date().getFullYear();
  $("#year").textContent = y;
}

function applyI18n(lang) {
  const dict = i18n[lang] || i18n.en;
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

function initLang() {
  const saved = localStorage.getItem("lang");
  const initial = saved || "en";
  $("#lang").value = initial;
  applyI18n(initial);
  $("#lang").addEventListener("change", (e) => applyI18n(e.target.value));
}

function initSOS() {
  const dlg = $("#sosDialog");
  $("#sosBtn").addEventListener("click", () => dlg.showModal());
  dlg.addEventListener("close", async () => {
    if (dlg.returnValue === "confirm") {
      $("#sosMsg").textContent = "Sending...";
      try {
        const pos = await getPosition(6000);
        // Simulate API call
        await sleep(800);
        $("#sosMsg").textContent = `SOS sent at ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}.`;
      } catch (e) {
        $("#sosMsg").textContent = "Unable to get location. SOS sent without coordinates.";
      }
      setTimeout(() => { $("#sosMsg").textContent = ""; }, 4000);
    }
  });
}

function getPosition(timeout = 8000) {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) return reject(new Error("no geo"));
    const onSuccess = (pos) => resolve(pos);
    const onError = () => reject(new Error("geo denied"));
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true, timeout });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function initForm() {
  $("#contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    $("#formMsg").textContent = "Sending...";
    try {
      // Replace with your backend endpoint
      await sleep(900);
      $("#formMsg").textContent = "Thanks! We'll be in touch.";
      e.currentTarget.reset();
    } catch (err) {
      $("#formMsg").textContent = "Failed to send. Please try again.";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initLang();
  initSOS();
  initForm();
});