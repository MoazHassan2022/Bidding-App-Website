import { useState, useEffect } from 'react';
import './index.css';

// ============ Translations ============
const translations = {
  ar: {
    dir: "rtl",
    lang: "ar",
    nav: {
      home: "الرئيسية",
      how: "كيف يعمل",
      screens: "صور التطبيق",
      contact: "تواصل معنا",
      admin: "دخول الأدمن",
      langSwitch: "EN",
    },
    hero: {
      tagline: "مزادات إلكترونية موثوقة",
      title1: "زايد على الكل",
      title2: "وفز بأحدث الأجهزة",
      subtitle:
        "تطبيق زاود للمزادات الإلكترونية. ابدأ مزايدتك من ١ ريال فقط، واحصل على فرصة الفوز بأحدث الأجهزة الإلكترونية بأسعار تنافسية لا تُصدّق.",
      ctaApple: "حمّل من App Store",
      ctaGoogle: "حمّل من Google Play",
      bidFrom: "ابدأ المزاد من",
      currency: "ريال",
      liveNow: "مزادات مباشرة",
    },
    stats: {
      eyebrow: "أجهزة إلكترونية",
      title: "منتجات متنوّعة تنتظرك",
      subtitle: "من الجوال إلى الأجهزة المنزلية — فئات أوسع داخل التطبيق.",
      cats: [
        "جوالات",
        "لابتوبات",
        "سماعات",
        "ساعات ذكية",
        "تلفزيونات",
        "أجهزة لوحية",
        "كاميرات",
        "كونسولات ألعاب",
        "ثلاجات",
        "غسالات",
        "مكيفات",
        "روبوتات منزلية",
      ],
    },
    how: {
      eyebrow: "كيف يعمل",
      title: "ثلاث خطوات وتفوز",
      subtitle: "بسيط، شفّاف، وسريع. اتبع الخطوات وكُن المزايد الفائز.",
      steps: [
        {
          n: "01",
          title: "حمّل التطبيق وسجّل",
          desc: "حمّل تطبيق زاود، أنشئ حسابك خلال دقيقة واحدة، وتصفّح المزادات المتاحة.",
        },
        {
          n: "02",
          title: "اختر الجهاز وزايد",
          desc: "اختر الجهاز الذي يعجبك، وابدأ مزايدتك من ريال واحد فقط مع باقي المستخدمين.",
        },
        {
          n: "03",
          title: "اربح واستلم",
          desc: "إذا كنت صاحب أعلى مزايدة عند انتهاء الوقت، الجهاز لك ويُشحن مباشرة لباب بيتك.",
        },
      ],
    },
    screens: {
      eyebrow: "صور التطبيق",
      title: "نظرة داخل التطبيق",
      subtitle: "تصفّح المزادات، زايد مباشرة، وتابع الفائز لحظة بلحظة.",
      cap_home: "الشاشة الرئيسية",
      cap_auctions: "كل المزادات",
      cap_about_us: "معلومات عنا",
      cap_sold: "نتيجة المزاد",
      cap_packages: "باقات النقاط",
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "الدعم الفني في خدمتك",
      subtitle:
        "أي سؤال أو استفسار عن التطبيق أو المزادات، فريق الدعم متاح للرد عليك.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الجوال",
      hoursLabel: "أوقات العمل",
      hours: "من الأحد الى الخميس 9 ص – 5 م",
      whatsapp: "تواصل عبر واتساب",
    },
    footer: {
      tagline: "مزادات إلكترونية تبدأ من ريال.",
      companyLabel: "السجل التجاري",
      companyName: "شركة زادنو",
      crLabel: "رقم السجل",
      crNumber: "7051628597",
      rights: "© ٢٠٢٦ زادنو. جميع الحقوق محفوظة.",
      domain: "zadnow.com",
    },
  },
  en: {
    dir: "ltr",
    lang: "en",
    nav: {
      home: "Home",
      how: "How it works",
      screens: "Screenshots",
      contact: "Contact",
      admin: "Admin Login",
      langSwitch: "ع",
    },
    hero: {
      tagline: "Trusted online auctions",
      title1: "Outbid the rest.",
      title2: "Win the device.",
      subtitle:
        "Zawed is the online auction app where every bid starts at just 1 SAR. Win the latest electronics at unbeatable prices through a simple, transparent, and reliable shopping experience.",
      ctaApple: "Download on App Store",
      ctaGoogle: "Get it on Google Play",
      bidFrom: "Bidding starts at",
      currency: "SAR",
      liveNow: "Live auctions",
    },
    stats: {
      eyebrow: "Electronics",
      title: "A wide range waiting for you",
      subtitle: "From phones to home appliances — fresh categories live in the app.",
      cats: [
        "Phones",
        "Laptops",
        "Headphones",
        "Smartwatches",
        "TVs",
        "Tablets",
        "Cameras",
        "Game consoles",
        "Refrigerators",
        "Washers",
        "Air conditioners",
        "Robot vacuums",
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps to win",
      subtitle: "Simple, transparent, and fast. Follow the steps and become the winning bidder.",
      steps: [
        {
          n: "01",
          title: "Download and sign up",
          desc: "Get the Zawed app, create your account in under a minute, and browse the live auctions.",
        },
        {
          n: "02",
          title: "Pick a device and bid",
          desc: "Choose the device you want, then place your bid starting from just 1 SAR alongside other users.",
        },
        {
          n: "03",
          title: "Win and receive",
          desc: "Highest bidder when the timer hits zero takes it home — shipped directly to your door.",
        },
      ],
    },
    screens: {
      eyebrow: "App screenshots",
      title: "A look inside the app",
      subtitle: "Browse auctions, place live bids, and track winners in real time.",
      cap_home: "Home",
      cap_auctions: "All auctions",
      cap_about_us: "About us",
      cap_sold: "Auction result",
      cap_packages: "Points packages",
    },
    contact: {
      eyebrow: "Contact",
      title: "Support is here for you",
      subtitle:
        "Have a question about the app or an auction? Our support team is ready to help.",
      emailLabel: "Email address",
      phoneLabel: "Phone number",
      hoursLabel: "Working hours",
      hours: "Sun – Thu · 9 AM – 5 PM",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      tagline: "Online auctions starting from 1 SAR.",
      companyLabel: "Commercial Registration",
      companyName: "Zadnow Company",
      crLabel: "CR Number",
      crNumber: "7051628597",
      rights: "© 2026 Zadnow. All rights reserved.",
      domain: "zadnow.com",
    },
  },
};

// ============ Constants ============
const SUPPORT_EMAIL = "support@zadnow.com";
const SUPPORT_PHONE = "+966541453548";
const SUPPORT_PHONE_DISPLAY = "+966 54 145 3548";
const ADMIN_URL = "https://dashboard.zadnow.com/";
const LOGO_SRC = "/assets/zawed-logo.png";
const SCR = {
  home: "/assets/screen-home.jpg",
  auctions: "/assets/screen-auctions.jpg",
  live: "/assets/screen-live.jpg",
  sold: "/assets/screen-sold.jpg",
  packages: "/assets/screen-packages.jpg",
};

// ============ Icons (small, geometric only) ============
const I = {
  apple: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.43 2.18-1.13 2.94-.78.85-2.04 1.5-3.07 1.43-.13-1.14.41-2.34 1.1-3.06.78-.83 2.13-1.45 3.1-1.31zM20.5 17.39c-.55 1.27-.81 1.83-1.51 2.94-1 1.59-2.42 3.58-4.18 3.6-1.56.02-1.96-1.02-4.08-1.01-2.12.01-2.56 1.03-4.13 1.01C4.85 23.91 3.5 22.13 2.5 20.54.18 17 .04 12.86 1.91 10.65c1.32-1.55 3.4-2.45 5.36-2.45 1.99 0 3.25.99 4.9.99 1.6 0 2.58-.99 4.88-.99 1.74 0 3.59.95 4.9 2.59-4.31 2.36-3.6 8.51-1.45 11.59z" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.5c-.36.36-.6.92-.6 1.65v15.7c0 .73.24 1.29.6 1.65l8.62-8.62V11.1L3.6 2.5zm10.04 10.04l2.36 2.36-10.5 5.96 8.14-8.32zm0-1.08L5.5 3.14l10.5 5.96-2.36 2.36zM21 12c0 .73-.42 1.4-1.1 1.74l-3.39 1.92-2.6-2.66 2.6-2.66 3.39 1.92c.68.34 1.1 1.01 1.1 1.74z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  arrowRtl: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M11 5l-7 7 7 7" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.93L4 20l4.18-1.1a7.93 7.93 0 0 0 3.86 1h.01c4.38 0 7.95-3.56 7.95-7.94a7.9 7.9 0 0 0-2.4-5.64zm-5.55 12.21h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.48.65.66-2.42-.16-.25a6.6 6.6 0 0 1-1.01-3.5 6.6 6.6 0 0 1 11.27-4.67 6.55 6.55 0 0 1 1.93 4.67c0 3.64-2.96 6.6-6.6 6.6zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99a6 6 0 0 1-1.11-1.38c-.12-.2 0-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35l-.6-1.45c-.16-.39-.32-.34-.45-.34h-.38a.74.74 0 0 0-.53.25c-.18.2-.7.69-.7 1.67 0 .98.72 1.93.82 2.06.1.13 1.42 2.16 3.43 3.03.48.2.85.33 1.14.42.48.15.91.13 1.26.08.38-.06 1.18-.48 1.34-.95.17-.46.17-.86.12-.95-.05-.08-.18-.13-.38-.23z" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
};

const CatIcons = {
  phone: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
    </svg>
  ),
  laptop: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 19h20" />
    </svg>
  ),
  headphone: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14a9 9 0 1 1 18 0" />
      <rect x="2.5" y="13.5" width="4" height="7" rx="1.5" />
      <rect x="17.5" y="13.5" width="4" height="7" rx="1.5" />
    </svg>
  ),
  watch: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M9 6V3h6v3M9 18v3h6v-3M12 9v3l2 1" />
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  tablet: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h3l2-3h8l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  console: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 8h12a4 4 0 0 1 4 4 4 4 0 0 1-7 2.65L13 14h-2l-2 .65A4 4 0 0 1 2 12a4 4 0 0 1 4-4z" />
      <path d="M7 12h2M8 11v2M15 12h.01M17 12h.01" />
    </svg>
  ),
  fridge: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M5 10h14M9 6v1M9 14v3" />
    </svg>
  ),
  washer: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="14" r="5" />
      <path d="M8 6h.01M11 6h.01" />
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="9" rx="2" />
      <path d="M6 14v2M10 14v3M14 14v3M18 14v2M5 9h14" />
    </svg>
  ),
  robot: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2" />
    </svg>
  ),
};

// ============ App ============
function App() {
  const [lang, setLang] = useState("ar");
  const t = translations[lang];
  const isRtl = t.dir === "rtl";

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div className={"page " + (isRtl ? "rtl" : "ltr")}>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} isRtl={isRtl} />
      <Marquee t={t} isRtl={isRtl} />
      <HowItWorks t={t} isRtl={isRtl} />
      <Screens t={t} isRtl={isRtl} />
      <Contact t={t} isRtl={isRtl} />
      <Footer t={t} />
    </div>
  );
}

// ============ Nav ============
function Nav({ t, lang, setLang }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Admin button - top-left always */}
        <a href={ADMIN_URL} target="_blank" className="admin-btn" title={t.nav.admin}>
          <span className="admin-dot" />
          <span>{t.nav.admin}</span>
        </a>

        <a href="#home" className="brand">
          <img src={LOGO_SRC} alt="Zawed" className="brand-logo" />
          <span className="brand-name">ZAWED</span>
        </a>

        <nav className="nav-links">
          <a href="#how">{t.nav.how}</a>
          <a href="#screens">{t.nav.screens}</a>
          <a href="#contact">{t.nav.contact}</a>
          <button
            className="lang-switch"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            aria-label="Switch language"
          >
            {t.nav.langSwitch}
          </button>
        </nav>
      </div>
    </header>
  );
}

// ============ Hero ============
function Hero({ t, isRtl }) {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" />
            <span>{t.hero.tagline}</span>
          </div>
          <h1 className="hero-title">
            <span>{t.hero.title1}</span>
            <span className="hero-title-accent">{t.hero.title2}</span>
          </h1>
          <p className="hero-sub">{t.hero.subtitle}</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#">
              {I.apple}
              <span>{t.hero.ctaApple}</span>
            </a>
            <a className="btn btn-secondary" href="#">
              {I.play}
              <span>{t.hero.ctaGoogle}</span>
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="meta-label">
                {t.hero.bidFrom} <strong className="meta-inline-num">1</strong> {t.hero.currency}
              </span>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <span className="meta-pulse" />
              <span className="meta-label">{t.hero.liveNow}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <PhoneFrame src={SCR.home} />
          <FloatingCard isRtl={isRtl} />
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src }) {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <img src={src} alt="Zawed app screen" />
      </div>
      <div className="phone-shine" />
    </div>
  );
}

function FloatingCard({ isRtl }) {
  return (
    <div className={"float-card " + (isRtl ? "float-card-rtl" : "float-card-ltr")}>
      <div className="float-card-row">
        <span className="float-bid-dot" />
        <span className="float-label">LIVE BID</span>
      </div>
      <div className="float-amount">
        <span className="float-curr">SAR</span>
        <span className="float-num">247</span>
      </div>
      <div className="float-card-foot">iPhone 15 Pro Max</div>
    </div>
  );
}

// ============ Categories ============
function Marquee({ t }) {
  const cats = t.stats.cats;
  const icons = [
    CatIcons.phone,
    CatIcons.laptop,
    CatIcons.headphone,
    CatIcons.watch,
    CatIcons.tv,
    CatIcons.tablet,
    CatIcons.camera,
    CatIcons.console,
    CatIcons.fridge,
    CatIcons.washer,
    CatIcons.ac,
    CatIcons.robot,
  ];
  return (
    <section className="cats">
      <div className="cats-head">
        <div className="eyebrow eyebrow-dark">
          {I.spark}
          <span>{t.stats.eyebrow}</span>
        </div>
        <h2 className="cats-title">{t.stats.title}</h2>
        <p className="cats-sub">{t.stats.subtitle}</p>
      </div>

      <div className="cats-grid">
        {cats.map((label, i) => (
          <div className="cat-tile" key={i}>
            <div className="cat-icon">{icons[i]}</div>
            <div className="cat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ How It Works ============
function HowItWorks({ t, isRtl }) {
  return (
    <section id="how" className="how">
      <div className="section-head">
        <div className="eyebrow eyebrow-dark">
          {I.spark}
          <span>{t.how.eyebrow}</span>
        </div>
        <h2 className="section-title">{t.how.title}</h2>
        <p className="section-sub">{t.how.subtitle}</p>
      </div>

      <div className="how-grid">
        {t.how.steps.map((s, i) => (
          <div className="step" key={i}>
            <div className="step-num">{s.n}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
            {i < t.how.steps.length - 1 && (
              <div className="step-arrow">{isRtl ? I.arrowRtl : I.arrow}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ Screens ============
function Screens({ t }) {
  return (
    <section id="screens" className="screens">
      <div className="section-head">
        <div className="eyebrow eyebrow-dark">
          {I.spark}
          <span>{t.screens.eyebrow}</span>
        </div>
        <h2 className="section-title">{t.screens.title}</h2>
        <p className="section-sub">{t.screens.subtitle}</p>
      </div>

      <div className="screens-grid">
        <div className="screen-card screen-card-edge">
          <PhoneFrame src={SCR.packages} />
          <div className="screen-cap">{t.screens.cap_packages}</div>
        </div>
        <div className="screen-card screen-card-mid">
          <PhoneFrame src={SCR.auctions} />
          <div className="screen-cap">{t.screens.cap_auctions}</div>
        </div>
        <div className="screen-card screen-card-main">
          <PhoneFrame src={SCR.live} />
          <div className="screen-cap">{t.screens.cap_about_us}</div>
        </div>
        <div className="screen-card screen-card-mid">
          <PhoneFrame src={SCR.sold} />
          <div className="screen-cap">{t.screens.cap_sold}</div>
        </div>
        <div className="screen-card screen-card-edge">
          <PhoneFrame src={SCR.home} />
          <div className="screen-cap">{t.screens.cap_home}</div>
        </div>
      </div>
    </section>
  );
}

// ============ Contact ============
function Contact({ t }) {
  const waNumber = SUPPORT_PHONE.replace(/[^0-9]/g, "");
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <div className="contact-head">
          <div className="eyebrow eyebrow-dark">
            {I.spark}
            <span>{t.contact.eyebrow}</span>
          </div>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-sub">{t.contact.subtitle}</p>
        </div>

        <div className="contact-grid">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-item">
            <div className="contact-icon">{I.mail}</div>
            <div className="contact-meta">
              <div className="contact-label">{t.contact.emailLabel}</div>
              <div className="contact-value" dir="ltr">{SUPPORT_EMAIL}</div>
            </div>
          </a>

          <a href={`tel:${SUPPORT_PHONE}`} className="contact-item">
            <div className="contact-icon">{I.phone}</div>
            <div className="contact-meta">
              <div className="contact-label">{t.contact.phoneLabel}</div>
              <div className="contact-value" dir="ltr">{SUPPORT_PHONE_DISPLAY}</div>
            </div>
          </a>

          <div className="contact-item contact-item-static">
            <div className="contact-icon">{I.clock}</div>
            <div className="contact-meta">
              <div className="contact-label">{t.contact.hoursLabel}</div>
              <div className="contact-value">{t.contact.hours}</div>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/${waNumber}`}
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {I.whatsapp}
          <span>{t.contact.whatsapp}</span>
        </a>
      </div>
    </section>
  );
}

// ============ Footer ============
function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <img src={LOGO_SRC} alt="Zawed" className="footer-logo" />
            <span className="footer-name">ZAWED</span>
          </div>
          <p className="footer-tag">{t.footer.tagline}</p>
        </div>

        <div className="footer-cols">
          <div className="footer-cr">
            <div className="footer-col-title">{t.footer.companyLabel}</div>
            <div className="footer-cr-name">{t.footer.companyName}</div>
            <div className="footer-cr-row">
              <span className="footer-cr-label">{t.footer.crLabel}</span>
              <span className="footer-cr-num" dir="ltr">{t.footer.crNumber}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-base">
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}

export default App;
