"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Sparkles,
  Target,
  Workflow,
  MonitorSmartphone,
  BarChart3,
  Star,
  Search,
  Layers,
  Rocket,
} from "lucide-react";

const services = [
  { icon: MonitorSmartphone, title: "Landing Page Design", text: "Premium landing pages built to capture attention and drive action." },
  { icon: Workflow, title: "Funnel Design", text: "Strategic funnel structures that guide visitors from interest to conversion." },
  { icon: Sparkles, title: "Website Redesign", text: "Transform outdated websites into modern premium digital experiences." },
  { icon: Layers, title: "Automation Experiences", text: "Smart automation systems that save time and improve follow-up." },
  { icon: BarChart3, title: "Conversion Strategy", text: "Clear CTA, trust structure, and page flow designed for better results." },
  { icon: Star, title: "Premium Brand UI", text: "Luxury visual direction that elevates brand perception and trust." },
];

const processSteps = [
  { icon: Search, title: "Discover", text: "We understand your business, audience, and goals." },
  { icon: Target, title: "Strategy", text: "We build a conversion structure tailored to your brand." },
  { icon: Workflow, title: "Structure", text: "We design the funnel and page journey for maximum clarity." },
  { icon: Sparkles, title: "Design", text: "We create a premium UI that elevates your brand." },
  { icon: BarChart3, title: "Optimize", text: "We refine every section to drive better action." },
  { icon: Rocket, title: "Deliver", text: "We launch and support your growth." },
];

const beforePoints = ["Weak hero message", "Outdated layout", "No clear CTA", "Low trust structure"];
const afterPoints = ["Clear premium positioning", "High-converting page flow", "Stronger CTA strategy", "Luxury brand perception"];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const auditFormUrl =
    "https://autocrm.ai/preview/EzKYFtj7cYmdyZyxzPhD?notrack=true";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white transition hover:scale-105"
            >
              ×
            </button>

            <iframe
              src={auditFormUrl}
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}

      <main className="min-h-screen bg-[#070707] text-white">
        <section className="relative overflow-hidden border-b border-[#b88945]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(184,137,69,.22),transparent_28%),linear-gradient(90deg,#050505_0%,#111_48%,#050505_100%)]" />

          <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:py-7">
            <a href="#" className="flex items-center gap-3 sm:gap-4">
              <span className="font-serif text-4xl text-[#c79a55] sm:text-5xl">KL</span>
              <span>
                <span className="block text-xs font-semibold tracking-[0.22em] sm:text-sm sm:tracking-[0.28em]">KAH LOK STUDIO</span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-xs sm:tracking-[0.22em]">Conversion & Automation</span>
              </span>
            </a>

            <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 lg:flex">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>

            <button
              onClick={() => setShowPopup(true)}
              className="hidden rounded-full border border-[#c79a55]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#c79a55] transition hover:border-white hover:text-white sm:inline-flex"
            >
              Audit
            </button>
          </nav>

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-14 pt-8 sm:px-6 md:pb-20 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-16">
            <div className="text-center lg:text-left">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c79a55] sm:mb-7 sm:text-xs sm:tracking-[0.36em]">Premium Conversion & Automation Studio</p>
              <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:mx-0 lg:text-8xl">
                Designing Experiences <br className="hidden sm:block" /> That <span className="text-[#c79a55]">Convert.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/78 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
                We help coaches, restaurants, and luxury brands elevate their online presence with high-converting landing pages, funnels, and automation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mx-auto sm:max-w-md sm:flex-row lg:mx-0 lg:mt-10">
                <button
                  onClick={() => setShowPopup(true)}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c79a55] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white sm:px-7 sm:text-sm"
                >
                  Get Free Audit <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>

                <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white/90 transition hover:border-[#c79a55] hover:text-[#c79a55] sm:px-7 sm:text-sm">
                  View Work
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 sm:text-xs lg:justify-start">
                <span>Landing Pages</span>
                <span className="text-[#c79a55]">✦</span>
                <span>Funnels</span>
                <span className="text-[#c79a55]">✦</span>
                <span>Automation</span>
              </div>
            </div>

            <div className="relative mx-auto h-[520px] w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-[#c79a55]/25 bg-[#151515] shadow-2xl sm:h-[620px] lg:max-w-none">
              <img src="/kah-lok-hero.jpg" alt="Kah Lok Studio founder portrait" className="h-full w-full object-cover object-center opacity-95" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.5),transparent_45%,rgba(0,0,0,.18)),linear-gradient(0deg,rgba(0,0,0,.55),transparent_45%)]" />
              <div className="absolute bottom-8 left-5 right-5 rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur sm:left-auto sm:right-8 sm:max-w-sm sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c79a55] sm:text-xs">Founder-led Studio</p>
                <p className="mt-3 font-serif text-xl sm:mt-4 sm:text-2xl">Premium websites built with strategy, not decoration.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f4efe6] px-5 py-14 text-black sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a16f31]">What We Do</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">Premium Design. Real Results.</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-6">
              {services.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-3xl border border-[#b88945]/20 bg-white/50 px-6 py-8 text-center xl:bg-transparent">
                  <Icon className="mx-auto mb-5 h-8 w-8 text-[#a16f31]" />
                  <h3 className="text-sm font-black uppercase tracking-[0.16em]">{title}</h3>
                  <div className="mx-auto my-4 h-px w-16 bg-[#b88945]" />
                  <p className="text-sm leading-6 text-black/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#c79a55]/20 bg-[#0a0a0a] px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">Before / After</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">We turn weak websites into premium conversion systems.</h2>
              <p className="mt-6 max-w-lg text-white/65">Most websites do not need more decoration. They need stronger positioning, clearer hierarchy, better CTAs, and a structure designed to convert visitors into leads.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-white/45">Before</p>
                <ul className="space-y-4 text-white/65">
                  {beforePoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#c79a55]/35 bg-[#c79a55]/10 p-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">After</p>
                <ul className="space-y-4 text-white/80">
                  {afterPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">Featured Work</p>
                <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Designs That Deliver Results.</h2>
              </div>

              <button
                onClick={() => setShowPopup(true)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-white/80 transition hover:text-[#c79a55]"
              >
                Request Audit <ArrowRight className="h-4 w-4 text-[#c79a55]" />
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-[#c79a55]/50">
                <div className="relative overflow-hidden">
                  <img src="/restaurant-case.jpg" alt="Restaurant Website Redesign" className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">Restaurant</p>
                    <h3 className="font-serif text-3xl leading-tight text-white">Restaurant Website Redesign</h3>
                    <p className="mt-4 text-sm leading-6 text-white/70">Luxury dining experience redefined.</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c79a55]">
                      View Case Study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-[#c79a55]/50">
                <div className="relative overflow-hidden">
                  <img src="/coach-funnel-case.jpg" alt="Coach Funnel Design" className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">Coach</p>
                    <h3 className="font-serif text-3xl leading-tight text-white">Coach Funnel Design</h3>
                    <p className="mt-4 text-sm leading-6 text-white/70">Premium funnel system for creators and coaches.</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c79a55]">
                      View Case Study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-[#c79a55]/50">
                <div className="relative overflow-hidden">
                  <img src="/wellness-case.jpg" alt="Wellness Brand Experience" className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">Wellness</p>
                    <h3 className="font-serif text-3xl leading-tight text-white">Wellness Brand Experience</h3>
                    <p className="mt-4 text-sm leading-6 text-white/70">Cinematic luxury wellness website redesign.</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c79a55]">
                      View Case Study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div className="min-h-[420px] bg-[#151515] p-6 sm:p-10 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">About Me</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Hi, I’m Kah Lok.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/72 sm:text-lg">I help coaches, restaurants, and luxury brands create digital experiences that build trust, elevate their brand, and increase conversions.</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">With a focus on strategy, design, and automation, I bring your vision to life with clear messaging, beautiful design, and smart systems.</p>
            <p className="mt-8 font-serif text-xl italic text-white sm:text-2xl">Every project is built with purpose, designed for impact, and crafted to convert.</p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#c79a55]/20">
            {[
              ["15+", "Design Concepts"],
              ["1,000+", "Visual Assets Created"],
              ["99%", "Quality Focus"],
              ["Global", "Online Clients"],
            ].map(([number, label]) => (
              <div key={label} className="bg-[#080808] p-6 sm:p-10">
                <p className="font-serif text-4xl text-[#c79a55] sm:text-5xl">{number}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/55 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-[#f4efe6] px-5 py-14 text-black sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a16f31]">Our Process</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl">A Strategic Process Built for Results.</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-6">
              {processSteps.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="relative rounded-[1.5rem] border border-[#b88945]/25 bg-white/40 p-6">
                  <Icon className="mx-auto h-8 w-8 text-[#a16f31]" />
                  <p className="mt-5 text-xs font-bold text-[#a16f31]">0{index + 1}</p>
                  <h3 className="mt-2 text-sm font-black uppercase tracking-[0.18em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[#c79a55]/25 bg-[#111] p-6 sm:p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c79a55]">Let’s Elevate Your Brand</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-5xl">Get a free AI website audit.</h2>
              <p className="mt-5 max-w-2xl text-white/65">Send your website link and I’ll review your positioning, CTA, visual hierarchy, and conversion opportunities.</p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setShowPopup(true)}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c79a55] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
              >
                <Mail className="h-4 w-4" /> Get Free Audit
              </button>

              <a href="https://wa.me/60122798379" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#c79a55] hover:text-[#c79a55]">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <footer className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
            <p>© 2026 Kah Lok Studio. All Rights Reserved.</p>
            <p>Designing Experiences That Convert.</p>
          </footer>
        </section>
      </main>
    </>
  );
}