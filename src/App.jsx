import { useState, useEffect, useRef, useCallback } from "react";
import slider1 from "./assets/slider1.png";
import slider3 from "./assets/slider3.png";
import cbeezai from "./assets/cbeezai.png";
import cbt from "./assets/cbt.png";
import cbeezaiqr from "./assets/qrcode1.png";
import slm from "./assets/slider2.png";
import bg1 from "./assets/bg11.jpeg";
import emailjs from '@emailjs/browser';
import logoclient1 from "./assets/logoclient1.jpeg";
import logoclient2 from "./assets/logoclient2.jpeg";
import logoclient3 from "./assets/logoclient3.jpeg";
import logoclient4 from "./assets/logoclient4.jpeg";
import logoclient5 from "./assets/logoclient5.jpeg";
import logoclient6 from "./assets/logoclient6.jpeg";
import logoclient7 from "./assets/logoclient7.jpeg";
import logoclient8 from "./assets/logoclient8.jpeg";
import logoclient9 from "./assets/logoclient9.jpeg";
import logoclient10 from "./assets/logoclient10.jpeg";
import logoclient11 from "./assets/logoclient11.jpeg";
import logoclient12 from "./assets/logoclient12.jpeg";
import logoclient13 from "./assets/logoclient13.jpeg";
import logoclient14 from "./assets/logoclient14.jpeg";
import logoclient15 from "./assets/logoclient15.jpeg";
import logoclient16 from "./assets/logoclient16.jpeg";

/* ─────────────────── DATA ─────────────────── */
const SLIDES = [
  {
    id: 0,
    tag: "CBeez - Agent AI as Box",
    tag2: "AI Orchestration & MCP Server",
    points: [
      "Secure API connection",
      "Data Agent",
      "Logistics Agent",
      "Alert Agent",
    ],

    visual: "mockup",
    btnHref: "#services",
  },
  {
    id: 1,
    tag: "CBeezAI ERP / CRM",
    points: [
      "Manage leads, projects, sales, and operations in one place",
      "Easy to use with quick setup — no technical skills required",
      "Boost productivity with smart automation tools",
      "Customizable to fit any business size",
      "Access anytime with secure cloud system",
    ],
    visual: "flow",
    btnHref: "#services",
  },
  {
    id: 2,
    tag: "Subscription Orders Food & Beverage portal",
    points: [
      "Manage recurring billing, subscriptions, and orders in one platform",
      "Automate invoices, payments, and renewal reminders",
      "Track customer subscriptions and order history in real-time",
      "Flexible plans with seamless integration across CRM and finance systems",
    ],
    visual: "services",
    btnHref: "#services",
  },
];

const AGENTS = [
  { icon: "🔐", name: "Secure API Connection", desc: "Encrypted, authenticated gateway for all agent communications.", tag: "Security" },
  { icon: "🗄️", name: "Data Agent", desc: "Real-time ingestion, transformation and pipeline management.", tag: "Data" },
  { icon: "📦", name: "Logistics Agent", desc: "Supply chain tracking, routing and workflow automation.", tag: "Ops" },
  { icon: "🔔", name: "Alert Agent", desc: "Smart anomaly detection and real-time incident response.", tag: "Monitor" },
  { icon: "📊", name: "Analytic & Report Agent", desc: "Business intelligence dashboards and automated reporting.", tag: "Analytics" },
];

const SERVICES = [
  { icon: "🤖", name: "AI / ML App Dev", desc: "Custom AI and machine learning applications built for your business." },
  { icon: "☁️", name: "Cloud Migration", desc: "Seamless migration to AWS, Azure or GCP with zero downtime." },
  { icon: "⚙️", name: "Cloud Management", desc: "24/7 cloud ops, cost optimization, auto-scaling and monitoring." },
  { icon: "🛒", name: "E-Commerce Dev", desc: "Scalable online stores, marketplaces and payment integrations." },
  { icon: "🔄", name: "DevOps & CI/CD", desc: "Automated pipelines, containerization, Kubernetes and IaC." },
  { icon: "🔒", name: "Network & Security", desc: "Infrastructure hardening, penetration testing and threat monitoring." },
  { icon: "📊", name: "Data Migration", desc: "Secure, validated migration of databases and enterprise data systems." },
  { icon: "📱", name: "Mobile App Dev", desc: "Cross-platform iOS and Android apps with elegant UX and backend." },
  { icon: "💡", name: "IT Consulting", desc: "Strategic advisory, digital transformation and architecture planning." },
];

const STATS = [
  { num: "50+", lbl: "Projects Delivered" },
  { num: "3", lbl: "Global Offices" },
  { num: "5", lbl: "AI Agents" },
  { num: "24/7", lbl: "Support" },
];

const OFFICES = [
  { flag: "🇮🇳", city: "Pondicherry", region: "Reddiyarpalayam, Pondicherry", phone: "+91 72005 3357" },
  { flag: "🇮🇳", city: "Chennai", region: "K K Nagar, Tamil Nadu", phone: "South India Hub", phoneStyle: { color: "#585B6F", fontSize: 11 } },
  { flag: "🇺🇸", city: "Columbus, Ohio", region: "United States", phone: "+1 740-803-6603" },
];

/* ─────────────────── STYLES (inline object map) ─────────────────── */
const Y = "#FFCB0F", N = "#3d4a99", N2 = "#0c1c72", G = "#585B6F";
const t2 = "'Space Grotesk', sans-serif";
const t1 = "'Plus Jakarta Sans', sans-serif";

/* ─────────────────── SUB-COMPONENTS ─────────────────── */

function MockupVisual() {
  return (
    <div style={{ maxWidth: 550, width: "100%" }}>
      <img style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 12 }} src={slm} alt="AI Flow Visual" />
    </div>
  );
}

function FlowVisual() {
  return (
    <div style={{ maxWidth: 550, width: "100%" }}>
      <img style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 12 }} src={slider1} alt="AI Flow Visual" />
    </div>
  );
}

function ServicesVisual() {

  return (
    <div style={{ maxWidth: 550, width: "100%" }}>
      <img style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 12 }} src={slider3} alt="AI Flow Visual" />
    </div>
  );
}

/* ─────────────────── HERO SLIDER ─────────────────── */
function HeroSlider() {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);
  const total = SLIDES.length;

  const go = useCallback((n) => {
    setCur(((n % total) + total) % total);
  }, [total]);

  const reset = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCur(c => (c + 1) % total), 12000);
  }, [total]);

  useEffect(() => {
    reset();
    return () => clearInterval(timerRef.current);
  }, [reset]);

  const handlePrev = () => { go(cur - 1); reset(); };
  const handleNext = () => { go(cur + 1); reset(); };

  const slide = SLIDES[cur];

  return (
    <div id="home" style={{ width: "100%", paddingTop: 70, position: "relative", overflow: "hidden", backgroundImage: `url(${bg1})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      {/* Heading */}
      <div style={{ background: "", textAlign: "center", padding: "4rem 2rem 2rem" }}>
        <h2 style={{ fontFamily: t2, fontSize: "var(--slider-title-size)", fontWeight: 700, color: "#000000", letterSpacing: -0.3 }}>
          <span style={{ color: "#0C1C72" }}>Explore</span> Our Solutions
        </h2>
      </div>

      {/* Slider viewport */}
      <div style={{ position: "relative", width: "100%", background: "", overflow: "hidden" }}>
        {/* Slide */}
        <div style={{ width: "100%", minHeight: 520, padding: "1rem 0 2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", display: "flex", flexDirection: slide.id === 1 ? 'var(--slider-dir-rev, row-reverse)' : 'var(--slider-dir, row)', alignItems: "center", justifyContent: "center", gap: "clamp(2rem,5vw,5rem)", flexWrap: "wrap" }}>

            {/* Visual (Always first in DOM for mobile top layout) */}
            <div style={{ flex: "1.1 1 280px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 0 }}>
              {slide.visual === "mockup" && <MockupVisual />}
              {slide.visual === "services" && <ServicesVisual />}
              {slide.visual === "flow" && <FlowVisual />}
            </div>

            {/* Text */}
            <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", minWidth: 0 }}>
              <div style={{ fontFamily: t2, fontSize: "var(--slider-title-size)", fontWeight: 700, color: "#000000", marginBottom: "1.4rem", letterSpacing: -0.3 }}>{slide.tag}</div>
              <div style={{ fontFamily: t1, fontSize: "clamp(1rem,2vw,1.5rem)", fontWeight: 500, color: "#333333", marginBottom: "1.4rem", letterSpacing: -0.3 }}>{slide.tag2}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: "2.2rem" }}>
                {slide.points.map((pt, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "var(--slider-point-size)", color: "#666666", lineHeight: 1.6, fontWeight: 400 }}>
                    <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: `10px solid ${Y}`, flexShrink: 0, marginTop: 8.5 }} />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href={slide.btnHref} style={{ display: "inline-block", background: Y, color: N, fontFamily: t2, fontSize: 14, fontWeight: 700, padding: "13px 34px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,203,15,0.35)", letterSpacing: 0.3 }}>Read More</a>
            </div>
          </div>
        </div>

        {/* Arrow controls (Desktop only) */}
        <div style={{ display: "var(--slider-arrows-display)", position: "absolute", top: "50%", left: 0, right: 0, justifyContent: "space-between", padding: "0 1.2rem", transform: "translateY(-50%)", zIndex: 10, pointerEvents: "none" }}>
          {[{ fn: handlePrev, ch: "‹" }, { fn: handleNext, ch: "›" }].map(({ fn, ch }, i) => (
            <button key={i} onClick={fn} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: `1.5px solid rgba(255,203,15,0.35)`, color: Y, fontSize: 22, cursor: "pointer", pointerEvents: "all", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)", transition: "all .25s", outline: "none" }}>{ch}</button>
          ))}
        </div>
      </div>

      {/* Mobile-only Arrow controls (below viewport) */}
      <div style={{ display: "var(--slider-mobile-arrows-display, none)", justifyContent: "center", gap: 20, padding: "1rem 0" }}>
        {[{ fn: handlePrev, ch: "‹" }, { fn: handleNext, ch: "›" }].map(({ fn, ch }, i) => (
          <button key={i} onClick={fn} style={{ width: 44, height: 44, borderRadius: "50%", background: "#fff", border: `2px solid ${Y}`, color: N, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s" }}>{ch}</button>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "1.2rem 0 2rem" }}>
        {SLIDES.map((_, i) => (
          <div key={i} onClick={() => { go(i); reset(); }} style={{ width: 32, height: 4, borderRadius: 2, background: i === cur ? Y : "rgba(255,255,255,0.2)", cursor: "pointer", transition: "all .3s" }} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── HEADER ─────────────────── */
function Header({ activeSection }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 960);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    // { href: "#agents", label: "AI Agents" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, height: 90, background: "#ffffff", boxShadow: "0 2px 20px rgba(10,22,94,0.3)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
        {/* Left logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img style={{ height: 90, width: "auto", objectFit: "contain" }} src={cbeezai} alt="CBeu2AI Logo" />

          {/* <div style={{ width: 42, height: 42, borderRadius: 10, background: Y, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, boxShadow: "0 4px 12px rgba(255,203,15,0.4)", flexShrink: 0 }}>🐝</div> */}
          {/* {!isMobile && (
            <div> */}
          {/* <b style={{ display: "block", fontFamily: t2, fontSize: 13, fontWeight: 700, color: Y }}>CBeu2AI</b>
              <small style={{ display: "block", fontSize: 9, color: "rgba(255,203,15,0.5)", letterSpacing: 3 }}>Buzzy · · · · · ·</small> */}

          {/* </div>
          )} */}
        </a>

        {/* Nav — hidden on mobile/tablet */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} style={{ color: activeSection === href.slice(1) ? Y : "#000000", textDecoration: "none", fontFamily: t2, fontSize: 16, fontWeight: 500, padding: "7px 16px", borderRadius: 7, background: activeSection === href.slice(1) ? "rgba(255,255,255,0.1)" : "transparent", transition: "all .2s" }}>{label}</a>
            ))}
            {/* <a href="#contact" style={{ background: Y, color: N, fontWeight: 700, fontFamily: t2, fontSize: 14, padding: "7px 16px", borderRadius: 8, textDecoration: "none", boxShadow: "0 3px 12px rgba(255,203,15,0.35)", transition: "all .25s" }}>Get Started</a> */}
          </nav>
        )}

        {/* Right logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img style={{ height: 90, width: "auto", objectFit: "contain" }} src={cbt} alt="CloudBees Tech Logo" />
        </a>
      </div>
    </header>
  );
}

/* ─────────────────── STATS BAR ─────────────────── */
function StatsBar() {
  return (
    <div style={{ background: N2, padding: "var(--stats-padding, 2.2rem 2rem)", borderTop: "1px solid rgba(255,203,15,0.15)", borderBottom: "1px solid rgba(255,203,15,0.08)", overflowX: "var(--stats-overflow, hidden)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "var(--stats-display, grid)", gridTemplateColumns: "var(--stats-grid, repeat(4,1fr))", gap: "1rem", textAlign: "center", whiteSpace: "var(--stats-whitespace, normal)" }}>
        {STATS.map((s) => (
          <div key={s.num} style={{ display: "var(--stats-item-display, block)", verticalAlign: "top", minWidth: "var(--stats-item-width, 0)", marginBottom: "var(--stats-item-gap, 0)" }}>
            <div style={{ fontFamily: t2, fontSize: "2.2rem", fontWeight: 700, color: Y, lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginTop: 5, fontWeight: 500, letterSpacing: 0.5 }}>{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── AI AGENTS SECTION ─────────────────── */
function AgentsSection() {
  return (
    <section id="agents" style={{ background: "#fff", padding: "5.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "5rem", alignItems: "start", marginTop: "4rem" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(10,22,94,0.07)", border: "1px solid rgba(10,22,94,0.15)", borderRadius: 100, padding: "5px 14px 5px 8px", marginBottom: "0.9rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: N }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: N, letterSpacing: 1.5, textTransform: "uppercase" }}>CBeu2-Agent · AIos-Box</span>
            </div>
            <h2 style={{ fontFamily: t2, fontSize: "var(--title-size)", fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.15, marginBottom: "0.8rem", color: N }}>AI Orchestration &<br /><em style={{ color: N2, fontStyle: "normal" }}>MCP Server</em></h2>
            <p style={{ color: G, fontSize: "var(--para-size)", lineHeight: 1.75, marginBottom: "2.5rem" }}>Our proprietary MCP server runs five intelligent agents that secure, process, track, alert and analyse your operations 24/7.</p>
            {/* DV card */}
            <div style={{ background: N, borderRadius: 22, padding: 28, boxShadow: "0 20px 60px rgba(10,22,94,0.2)", position: "relative", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div style={{ fontFamily: t2, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: 2 }}>CBEU2-AGENT · AIOS-BOX</div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 600, color: "#22c55e" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 7px #22c55e" }} />
                  Live
                </div>
              </div>
              <div style={{ background: "#060e40", borderRadius: 14, border: "1px solid rgba(255,203,15,0.2)", padding: 18, marginBottom: 14, position: "relative", overflow: "hidden" }}>
                <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
                  {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {AGENTS.map((a, i) => {
                    const widths = ["55%", "75%", "62%", "48%", "68%"];
                    return (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 26, height: 26, borderRadius: 6, background: "rgba(255,203,15,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0 }}>{a.icon}</div>
                        <div style={{ height: 8, borderRadius: 4, background: i === 0 ? "rgba(255,203,15,0.3)" : "rgba(255,255,255,0.07)", width: widths[i] }} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[["🖥️", "CBeu2 Agent", "Active Monitor"], ["📦", "AIos Box", "Core Unit"]].map(([icon, name, sub]) => (
                  <div key={name} style={{ background: "#060e40", borderRadius: 12, border: "1px solid rgba(255,203,15,0.15)", padding: 14, display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ fontSize: 20 }}>{icon}</div>
                    <div>
                      <div style={{ fontFamily: t2, fontSize: 10, fontWeight: 600, color: "rgba(255,203,15,0.8)" }}>{name}</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 14, fontFamily: t2, fontSize: 10, fontWeight: 600, color: "rgba(255,203,15,0.4)", letterSpacing: 2, textTransform: "uppercase" }}>MCP Server · Secure Orchestration Layer</div>
            </div>
          </div>
          {/* Right */}
          <div>
            <div style={{ height: 80 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {AGENTS.map((a) => (
                <div key={a.name} style={{ background: "#fff", border: "1px solid #eaedf5", borderRadius: 14, padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14, boxShadow: "0 2px 10px rgba(10,22,94,0.06)", transition: "all .25s", position: "relative", overflow: "hidden", cursor: "default" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, flexShrink: 0, background: "rgba(10,22,94,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19 }}>{a.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: t2, fontSize: 14, fontWeight: 700, color: N, marginBottom: 3 }}>{a.name}</div>
                    <div style={{ fontSize: 12, color: G, lineHeight: 1.5 }}>{a.desc}</div>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: N, background: Y, borderRadius: 100, padding: "3px 10px", whiteSpace: "nowrap", alignSelf: "flex-start", flexShrink: 0 }}>{a.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SERVICES SECTION ─────────────────── */
function ServicesSection() {
  return (
    <section id="services" style={{ background: "#f5f6fa", padding: "5.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(10,22,94,0.07)", border: "1px solid rgba(10,22,94,0.15)", borderRadius: 100, padding: "5px 14px 5px 8px", marginBottom: "0.9rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: N }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: N, letterSpacing: 1.5, textTransform: "uppercase" }}>What We Offer</span>
          </div>
          <h2 style={{ fontFamily: t2, fontSize: "clamp(24px, 4vw, 30px)", fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.15, marginBottom: "0.8rem", color: N }}>Our <em style={{ color: N2, fontStyle: "normal" }}>Services</em></h2>
          <p style={{ color: G, fontSize: "clamp(14px, 2vw, 18px)", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>Full-spectrum technology services for startups, SMEs and enterprises globally.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.2rem", marginTop: "3rem" }}>
          {SERVICES.map((s) => (
            <div key={s.name} style={{ background: "#fff", border: "1px solid #eaedf5", borderRadius: 16, padding: 24, boxShadow: "0 2px 10px rgba(10,22,94,0.05)", transition: "all .28s", cursor: "default" }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, background: "rgba(10,22,94,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontFamily: t2, fontSize: "clamp(16px, 2.5vw, 26px)", fontWeight: 700, color: N, marginBottom: 7 }}>{s.name}</div>
              <div style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: G, lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── LOGO SLIDER ─────────────────── */
function LogoSlider() {
  const logos = [logoclient1, logoclient2, logoclient3, logoclient4, logoclient5, logoclient6, logoclient7, logoclient8, logoclient9, logoclient10, logoclient11, logoclient12, logoclient13, logoclient14, logoclient15, logoclient16];
  return (
    <div style={{
      overflow: "hidden",
      padding: "2rem 0",
      background: "#ffffff",
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="logo-track" style={{
        display: "flex",
        width: "max-content",
        gap: "4rem",
        alignItems: "center"
      }}>
        {/* We use 3 sets to ensure the seam isn't visible during loop */}
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} style={{ flexShrink: 0, padding: "0 10px", }}>
            <img
              src={logo}
              alt="Partner Logo"
              style={{
                height: "clamp(100px, 6vw, 130px)",
                width: "auto",
                filter: "grayscale(100%)",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
                padding: "10px"
              }}
              className="client-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── CONTACT SECTION ─────────────────── */
function ContactSection() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", companyname: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields (Basic)
    if (!form.name || !form.email || !form.message || !form.companyname) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // EmailJS logic
    // Add your credentials to the .env file
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! Your message has been sent successfully.");
          setForm({ name: "", email: "", phone: "", message: "", companyname: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  const inputStyle = { width: "100%", background: "#fff", border: "1px solid #e0e3ef", borderRadius: 9, padding: "11px 14px", color: N, fontFamily: t1, fontSize: 14, outline: "none" };

  return (
    <section id="contact" style={{ background: "#fff", padding: "2.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(10,22,94,0.07)", border: "1px solid rgba(10,22,94,0.15)", borderRadius: 100, padding: "5px 14px 5px 8px", marginBottom: "0.9rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: N }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: N, letterSpacing: 1.5, textTransform: "uppercase" }}>Global Offices</span>
          </div>
          <h2 style={{ fontFamily: t2, fontSize: "clamp(24px, 4vw, 30px)", fontWeight: 700, color: N, letterSpacing: -0.4, lineHeight: 1.15, marginBottom: "0.8rem" }}>Find <em style={{ color: N2, fontStyle: "normal" }}>Us</em></h2>
          <p style={{ color: G, fontSize: "clamp(14px, 2vw, 18px)", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>Three offices across India and the United States — always in your time zone.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,450px))", gap: "5rem", alignItems: "start", justifyContent: "center" }}>
          {/* Locations */}
          <div>
            <p style={{ fontFamily: t2, fontSize: 11, fontWeight: 600, color: G, letterSpacing: 2, textTransform: "uppercase", marginBottom: "1.2rem" }}>Our Locations</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {OFFICES.map((o) => (
                <div key={o.city} style={{ background: "#f5f6fa", border: "1px solid #eaedf5", borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, boxShadow: "0 2px 8px rgba(10,22,94,0.05)" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 13, flexShrink: 0, background: "rgba(10,22,94,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{o.flag}</div>
                  <div>
                    <div style={{ fontFamily: t2, fontSize: "clamp(16px, 2.5vw, 26px)", fontWeight: 700, color: N }}>{o.city}</div>
                    <div style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: G, marginTop: 4 }}>{o.region}</div>
                    <div style={{ fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 600, color: N2, marginTop: 4, ...(o.phoneStyle || {}) }}>{o.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#f5f6fa", border: "1px solid #eaedf5", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", gap: 20 }}>
              <img style={{ height: 100, width: "auto", objectFit: "contain", borderRadius: 12, background: "#fff", border: "1px solid #eaedf5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.6rem", flexShrink: 0 }} src={cbeezaiqr} alt="CloudBees Tech Logo" />
              {/* <div style={{ width: 88, height: 88, borderRadius: 12, background: "#fff", border: "1px solid #eaedf5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.6rem", flexShrink: 0 }}>📱</div> */}
              <div>
                <div style={{ fontFamily: t2, fontSize: 14, fontWeight: 700, color: N, marginBottom: 4 }}>Scan to Connect</div>
                <div style={{ fontSize: 12, color: G, lineHeight: 1.7 }}>Phone · Website<br />Social Media · Quick Contact</div>
              </div>
              {/* <img style={{ height: 56, width: "auto", objectFit: "contain", borderRadius: 12, background: "#fff", border: "1px solid #eaedf5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.6rem", flexShrink: 0 }} src={cbtqr} alt="CloudBees Tech Logo" /> */}

            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ background: "#f5f6fa", border: "1px solid #eaedf5", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 10 }}
            >
              <h3 style={{ fontFamily: t2, fontSize: 16, fontWeight: 700, color: N, marginBottom: 4 }}>Send us a Message</h3>
              <input style={inputStyle} type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input style={inputStyle} type="text" name="companyname" placeholder="Company Name" value={form.companyname} onChange={handleChange} required />
              <input style={inputStyle} type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
              <input style={inputStyle} type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              <textarea style={{ ...inputStyle, resize: "none", height: 85 }} name="message" placeholder="How can we help you?" value={form.message} onChange={handleChange} required />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "#cccccc" : N,
                  color: "#fff",
                  fontFamily: t2,
                  fontSize: 14,
                  fontWeight: 700,
                  padding: 12,
                  borderRadius: 10,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all .25s"
                }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  return (
    <footer style={{ background: "#f5f6fa", borderTop: `2px solid ${Y}`, padding: "1rem 1rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img style={{ height: 100, width: "auto", objectFit: "contain" }} src={cbt} alt="CloudBees Tech Logo" />
          <img style={{ height: 100, width: "auto", objectFit: "contain" }} src={cbeezai} alt="CloudBees Tech Logo" />
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {["#home", "#services", "#contact"].map((h) => (
            <a key={h} href={h} style={{ fontSize: 14, color: "#000000", textDecoration: "none", transition: "color .2s" }}>{h.slice(1).charAt(0).toUpperCase() + h.slice(2)}</a>
          ))}
        </div>
        <div style={{ fontSize: 14, color: "#000000" }}>© 2025 CloudBees Tech. All rights reserved.</div>
      </div>
    </footer>
  );
}

/* ─────────────────── ROOT APP ─────────────────── */
export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Inject fonts
    if (!document.getElementById("cb-fonts")) {
      const link = document.createElement("link");
      link.id = "cb-fonts";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
    // Global scrollbar + body styles
    const style = document.createElement("style");
    style.innerHTML = `
      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
      :root {
        --title-size: 30px;
        --para-size: 18px;
        --slider-title-size: 42px;
        --slider-point-size: 18px;
        --slider-dir: row;
        --slider-dir-rev: row-reverse;
        --slider-arrows-display: flex;
        --stats-display: grid;
        --stats-grid: repeat(4, 1fr);
        --stats-item-gap: 0;
      }
      @media (max-width: 960px) {
        :root {
          --title-size: 24px;
          --para-size: 14px;
          --slider-title-size: 32px;
          --slider-point-size: 16px;
          --slider-dir: column;
          --slider-dir-rev: column;
          --slider-arrows-display: none;
          --slider-mobile-arrows-display: flex;
          --stats-display: block;
          --stats-grid: none;
          --stats-padding: 1.5rem 1rem;
          --stats-overflow: hidden;
          --stats-whitespace: normal;
          --stats-item-display: block;
          --stats-item-width: auto;
          --stats-item-gap: 1.5rem;
        }
      }
      html { scroll-behavior: smooth; }
      body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f5f6fa; color: #1a1a2e; overflow-x: hidden; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: #f5f6fa; }
      ::-webkit-scrollbar-thumb { background: #FFCB0F; border-radius: 3px; }
      a { transition: all .2s; }
      section { scroll-margin-top: 70px; }
      #home { scroll-margin-top: 0; }
      
      .logo-track {
        animation: scroll 80s linear infinite;
      }
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 3)); }
      }
      .client-logo:hover {
        filter: grayscale(0%) !important;
        transform: scale(1.1);
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const sections = ["home", "agents", "services", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const divider = <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(10,22,94,0.12),transparent)" }} />;

  return (
    <div style={{ fontFamily: t1 }}>
      <Header activeSection={activeSection} />
      <HeroSlider />
      <StatsBar />
      {divider}
      {/* <AgentsSection /> */}
      {divider}
      <ServicesSection />
      {/* {divider} */}
      <LogoSlider />
      {/* {divider} */}
      <ContactSection />
      <Footer />
    </div>
  );
}
