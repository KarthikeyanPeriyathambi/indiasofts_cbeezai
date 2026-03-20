import { useState, useEffect, useRef, useCallback } from "react";
import slider1 from "./assets/slider1.png";
import slider3 from "./assets/slider3.png";
import cbeezai from "./assets/cbeezai.png";
import cbt from "./assets/cbt.png";
import cbeezaiqr from "./assets/cbeezaiqr.png";

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
    <div style={{ position: "relative", width: "100%", maxWidth: 460, display: "flex", alignItems: "flex-end", justifyContent: "flex-start" }}>
      {/* Desktop */}
      <div style={{ background: "#2a3f58", borderRadius: 14, border: "2px solid rgba(255,255,255,0.12)", padding: "10px 10px 0 10px", boxShadow: "0 24px 60px rgba(0,0,0,0.4)", width: "100%", maxWidth: 340, position: "relative", zIndex: 1 }}>
        <div style={{ background: "#f0f4ff", borderRadius: "8px 8px 0 0", overflow: "hidden", height: 210 }}>
          <div style={{ background: N, height: 28, display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
            <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, marginLeft: 8 }} />
          </div>
          <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 5, height: "calc(100% - 28px)", background: "#e8eef8" }}>
            <div style={{ display: "flex", gap: 5, height: 28 }}>
              <div style={{ borderRadius: 4, background: "rgba(10,22,94,0.2)", maxWidth: 80, flex: 1 }} />
              <div style={{ borderRadius: 4, background: "rgba(10,22,94,0.12)", flex: 2 }} />
              <div style={{ borderRadius: 4, background: "rgba(255,203,15,0.4)", maxWidth: 50, flex: 1 }} />
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              {[["rgba(255,203,15,0.5)", "rgba(10,22,94,0.2)", "#dde4f0", "#dde4f0"],
              ["rgba(10,22,94,0.2)", "#dde4f0", "rgba(255,203,15,0.5)", "#dde4f0"],
              ["#dde4f0", "rgba(10,22,94,0.2)", "#dde4f0", "rgba(255,203,15,0.5)"]].map((cols, ci) => (
                <div key={ci} style={{ background: "#fff", borderRadius: 6, flex: 1, padding: 6 }}>
                  {cols.map((bg, li) => <div key={li} style={{ height: 5, borderRadius: 3, background: bg, marginBottom: 4, width: li === 2 ? "55%" : li === 3 ? "40%" : "auto" }} />)}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 5, height: 28 }}>
              {["#b8c8e0", "#c8d5e8", "rgba(255,203,15,0.4)", "#b8c8e0"].map((bg, i) => <div key={i} style={{ borderRadius: 4, background: bg, flex: 1 }} />)}
            </div>
          </div>
        </div>
        <div style={{ width: 80, height: 10, background: "#2a3f58", borderRadius: "0 0 4px 4px", margin: "0 auto" }} />
        <div style={{ width: 120, height: 6, background: "#1e3040", borderRadius: 3, margin: "4px auto 0" }} />
      </div>
      {/* Mouse */}
      <div style={{ width: 22, height: 30, borderRadius: 11, background: "#3a5068", position: "absolute", bottom: -4, left: 105, border: "1.5px solid rgba(255,255,255,0.15)", zIndex: 2 }}>
        <div style={{ width: 1.5, height: 10, background: "rgba(255,255,255,0.3)", margin: "6px auto", borderRadius: 1 }} />
      </div>
      {/* Phone */}
      <div style={{ position: "absolute", right: -20, bottom: 0, width: 110, background: "#1a2d42", borderRadius: 16, border: "2px solid rgba(255,255,255,0.15)", padding: "8px 6px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", zIndex: 2 }}>
        <div style={{ width: 30, height: 5, background: "#111", borderRadius: 3, margin: "0 auto 6px" }} />
        <div style={{ background: "#e8eef8", borderRadius: 8, overflow: "hidden", height: 160 }}>
          <div style={{ background: N, height: 20 }} />
          <div style={{ padding: 5, display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ height: 10, borderRadius: 3, background: "rgba(255,203,15,0.4)", width: "70%" }} />
            <div style={{ height: 10, borderRadius: 3, background: "rgba(10,22,94,0.2)", width: "85%" }} />
            <div style={{ height: 10, borderRadius: 3, background: "#c8d5e8", width: "60%" }} />
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: `conic-gradient(${Y} 0deg 130deg, ${N} 130deg 220deg, #4a90d9 220deg 360deg)`, margin: "6px auto", position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", width: 28, height: 28, background: "#e8eef8", borderRadius: "50%", transform: "translate(-50%,-50%)" }} />
            </div>
            <div style={{ height: 6, borderRadius: 3, background: "#c8d5e8", width: "80%" }} />
            <div style={{ height: 6, borderRadius: 3, background: "#c8d5e8", width: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowVisual() {
  return (
    <div style={{ maxWidth: 420, width: "100%" }}>
      <img style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 12 }} src={slider1} alt="AI Flow Visual" />
    </div>
  );
}

function ServicesVisual() {

  return (
    <div style={{ maxWidth: 420, width: "100%" }}>
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
    timerRef.current = setInterval(() => setCur(c => (c + 1) % total), 30000);
  }, [total]);

  useEffect(() => {
    reset();
    return () => clearInterval(timerRef.current);
  }, [reset]);

  const handlePrev = () => { go(cur - 1); reset(); };
  const handleNext = () => { go(cur + 1); reset(); };

  const slide = SLIDES[cur];

  return (
    <div id="home" style={{ width: "100%", paddingTop: 70, position: "relative", overflow: "hidden" }}>
      {/* Heading */}
      <div style={{ background: "linear-gradient(135deg, #f4f7fb 0%, #3e546e 50%, #1f2f44 100%)", textAlign: "center", padding: "3rem 2rem 2rem" }}>
        <h2 style={{ fontFamily: t2, fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: -0.3 }}>
          <span style={{ color: Y }}>Explore</span> Our Solutions
        </h2>
      </div>

      {/* Slider viewport */}
      <div style={{ position: "relative", width: "100%", background: "linear-gradient(135deg, #e6edf3 0%, #5a6f87 50%, #2a3f58 100%)", overflow: "hidden" }}>
        {/* Slide */}
        <div style={{ width: "100%", minHeight: 520, padding: "3rem 0 4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "clamp(2rem,5vw,5rem)", flexWrap: "wrap" }}>

            {/* Visual (left for slide 0&2, right for slide 1) */}
            {slide.id !== 1 && (
              <div style={{ flex: "1.1 1 280px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 0 }}>
                {slide.visual === "mockup" && <MockupVisual />}
                {slide.visual === "services" && <ServicesVisual />}
              </div>
            )}

            {/* Text */}
            <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", minWidth: 0 }}>
              <div style={{ fontFamily: t2, fontSize: "clamp(1.3rem,2.5vw,2rem)", fontWeight: 700, color: Y, marginBottom: "1.4rem", letterSpacing: -0.3 }}>{slide.tag}</div>
              <div style={{ fontFamily: t1, fontSize: "clamp(1rem,2vw,1.5rem)", fontWeight: 500, color: "#fff", marginBottom: "1.4rem", letterSpacing: -0.3 }}>{slide.tag2}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: "2.2rem" }}>
                {slide.points.map((pt, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, fontWeight: 400 }}>
                    <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: `10px solid ${Y}`, flexShrink: 0, marginTop: 5 }} />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href={slide.btnHref} style={{ display: "inline-block", background: Y, color: N, fontFamily: t2, fontSize: 14, fontWeight: 700, padding: "13px 34px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 16px rgba(255,203,15,0.35)", letterSpacing: 0.3 }}>Read More</a>
            </div>

            {/* Flow visual on slide 1 goes right */}
            {slide.id === 1 && (
              <div style={{ flex: "1.1 1 280px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 0 }}>
                <FlowVisual />
              </div>
            )}
          </div>
        </div>

        {/* Arrow controls */}
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 1.2rem", transform: "translateY(-50%)", zIndex: 10, pointerEvents: "none" }}>
          {[{ fn: handlePrev, ch: "‹" }, { fn: handleNext, ch: "›" }].map(({ fn, ch }, i) => (
            <button key={i} onClick={fn} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: `1.5px solid rgba(255,203,15,0.35)`, color: Y, fontSize: 22, cursor: "pointer", pointerEvents: "all", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)", transition: "all .25s", outline: "none" }}>{ch}</button>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "1.2rem 0 2rem", background: "linear-gradient(135deg, #e6edf3 0%, #5a6f87 50%, #2a3f58 100%)" }}>
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
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, height: 70, background: "", backdropFilter: "blur(20px)", borderBottom: `2px solid ${Y}`, boxShadow: "0 2px 20px rgba(10,22,94,0.3)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
        {/* Left logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img style={{ height: 56, width: "auto", objectFit: "contain" }} src={cbeezai} alt="CBeu2AI Logo" />

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
              <a key={href} href={href} style={{ color: activeSection === href.slice(1) ? Y : "#000000", textDecoration: "none", fontFamily: t2, fontSize: 14, fontWeight: 500, padding: "7px 16px", borderRadius: 7, background: activeSection === href.slice(1) ? "rgba(255,255,255,0.1)" : "transparent", transition: "all .2s" }}>{label}</a>
            ))}
            {/* <a href="#contact" style={{ background: Y, color: N, fontWeight: 700, fontFamily: t2, fontSize: 14, padding: "7px 16px", borderRadius: 8, textDecoration: "none", boxShadow: "0 3px 12px rgba(255,203,15,0.35)", transition: "all .25s" }}>Get Started</a> */}
          </nav>
        )}

        {/* Right logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img style={{ height: 56, width: "auto", objectFit: "contain" }} src={cbt} alt="CloudBees Tech Logo" />
        </a>
      </div>
    </header>
  );
}

/* ─────────────────── STATS BAR ─────────────────── */
function StatsBar() {
  return (
    <div style={{ background: N2, padding: "2.2rem 2rem", borderTop: "1px solid rgba(255,203,15,0.15)", borderBottom: "1px solid rgba(255,203,15,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", textAlign: "center" }}>
        {STATS.map((s) => (
          <div key={s.num}>
            <div style={{ fontFamily: t2, fontSize: "2.2rem", fontWeight: 700, color: Y, lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 5, fontWeight: 500, letterSpacing: 0.5 }}>{s.lbl}</div>
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
            <h2 style={{ fontFamily: t2, fontSize: "2.2rem", fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.15, marginBottom: "0.8rem", color: N }}>AI Orchestration &<br /><em style={{ color: N2, fontStyle: "normal" }}>MCP Server</em></h2>
            <p style={{ color: G, fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>Our proprietary MCP server runs five intelligent agents that secure, process, track, alert and analyse your operations 24/7.</p>
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
          <h2 style={{ fontFamily: t2, fontSize: "2.2rem", fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.15, marginBottom: "0.8rem", color: N }}>Our <em style={{ color: N2, fontStyle: "normal" }}>Services</em></h2>
          <p style={{ color: G, fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>Full-spectrum technology services for startups, SMEs and enterprises globally.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1.2rem", marginTop: "3rem" }}>
          {SERVICES.map((s) => (
            <div key={s.name} style={{ background: "#fff", border: "1px solid #eaedf5", borderRadius: 16, padding: 24, boxShadow: "0 2px 10px rgba(10,22,94,0.05)", transition: "all .28s", cursor: "default" }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, background: "rgba(10,22,94,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontFamily: t2, fontSize: 15, fontWeight: 700, color: N, marginBottom: 7 }}>{s.name}</div>
              <div style={{ fontSize: 13, color: G, lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CONTACT SECTION ─────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => alert("Message sent! (demo)");

  const inputStyle = { width: "100%", background: "#fff", border: "1px solid #e0e3ef", borderRadius: 9, padding: "11px 14px", color: N, fontFamily: t1, fontSize: 14, outline: "none" };

  return (
    <section id="contact" style={{ background: "#fff", padding: "5.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(10,22,94,0.07)", border: "1px solid rgba(10,22,94,0.15)", borderRadius: 100, padding: "5px 14px 5px 8px", marginBottom: "0.9rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: N }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: N, letterSpacing: 1.5, textTransform: "uppercase" }}>Global Offices</span>
          </div>
          <h2 style={{ fontFamily: t2, fontSize: "2.2rem", fontWeight: 700, color: N, letterSpacing: -0.4, lineHeight: 1.15, marginBottom: "0.8rem" }}>Find <em style={{ color: N2, fontStyle: "normal" }}>Us</em></h2>
          <p style={{ color: G, fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>Three offices across India and the United States — always in your time zone.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "5rem", alignItems: "start" }}>
          {/* Locations */}
          <div>
            <p style={{ fontFamily: t2, fontSize: 11, fontWeight: 600, color: G, letterSpacing: 2, textTransform: "uppercase", marginBottom: "1.2rem" }}>Our Locations</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {OFFICES.map((o) => (
                <div key={o.city} style={{ background: "#f5f6fa", border: "1px solid #eaedf5", borderRadius: 16, padding: 22, display: "flex", alignItems: "center", gap: 16, boxShadow: "0 2px 8px rgba(10,22,94,0.05)" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 13, flexShrink: 0, background: "rgba(10,22,94,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{o.flag}</div>
                  <div>
                    <div style={{ fontFamily: t2, fontSize: 15, fontWeight: 700, color: N }}>{o.city}</div>
                    <div style={{ fontSize: 12, color: G, marginTop: 2 }}>{o.region}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: N2, marginTop: 4, ...(o.phoneStyle || {}) }}>{o.phone}</div>
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
            <div style={{ background: "#f5f6fa", border: "1px solid #eaedf5", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 style={{ fontFamily: t2, fontSize: 16, fontWeight: 700, color: N, marginBottom: 4 }}>Send us a Message</h3>
              <input style={inputStyle} type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
              <input style={inputStyle} type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
              <input style={inputStyle} type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              <textarea style={{ ...inputStyle, resize: "none", height: 85 }} name="msg" placeholder="How can we help you?" value={form.msg} onChange={handleChange} />
              <button onClick={handleSubmit} style={{ background: N, color: "#fff", fontFamily: t2, fontSize: 14, fontWeight: 700, padding: 12, borderRadius: 10, border: "none", cursor: "pointer", transition: "all .25s" }}>Send Message →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  return (
    <footer style={{ background: N, borderTop: `2px solid ${Y}`, padding: "2.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img style={{ height: 100, width: "auto", objectFit: "contain" }} src={cbt} alt="CloudBees Tech Logo" />
          <img style={{ height: 100, width: "auto", objectFit: "contain" }} src={cbeezai} alt="CloudBees Tech Logo" />
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {["#home", "#services", "#contact"].map((h) => (
            <a key={h} href={h} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color .2s" }}>{h.slice(1).charAt(0).toUpperCase() + h.slice(2)}</a>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>© 2025 CloudBees Tech. All rights reserved.</div>
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
      html { scroll-behavior: smooth; }
      body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f5f6fa; color: #1a1a2e; overflow-x: hidden; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: #f5f6fa; }
      ::-webkit-scrollbar-thumb { background: #FFCB0F; border-radius: 3px; }
      a { transition: all .2s; }
      section { scroll-margin-top: 70px; }
      #home { scroll-margin-top: 0; }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const sections = ["home", "agents", "services", "contact"];
    const handler = () => {
      const pos = window.scrollY + 80;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
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
      {divider}
      <ContactSection />
      <Footer />
    </div>
  );
}
