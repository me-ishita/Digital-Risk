import { motion } from "framer-motion";
import { useState } from 'react';
import { Shield, Target, Zap, Award, Eye, ArrowLeft, ArrowRight, Icon, GraduationCap, Cpu, Lightbulb, BrainCircuit, ShieldCheck, RefreshCw, Scale } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { FlippingCards } from "../../components/FlippingCards";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { AdvisorSlideshow } from "../academy/AcademyHome";
import prismLogo from '../../../assets/Prism logo.png';

function LabsFlagshipTicker() {
  return (
    <div className="fixed left-0 right-0 top-[60px] z-40 overflow-hidden border-y border-orange-200/30 bg-gradient-to-r from-blue-700/85 via-orange-600/90 to-blue-700/85 py-2.5 shadow-[0_0_26px_rgba(249,115,22,0.4)] backdrop-blur-md sm:top-[76px] sm:py-3" aria-label="New flagship programme: Innovate, Build & Secure with AI. Enrolment now open.">
      <div className="labs-ribbon-sweep absolute inset-0" aria-hidden="true" />
      <div className="collaboration-marquee relative z-10 flex w-max items-center" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-4 px-4 sm:gap-7 sm:px-8">
            <span className="rounded-full bg-orange-400 px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-slate-950 sm:text-[11px]">New</span>
            <span className="whitespace-nowrap text-[9px] font-extrabold uppercase tracking-[0.13em] text-white sm:text-xs sm:tracking-[0.18em]">Flagship Programme</span>
            <span className="text-orange-200">✦</span>
            <span className="whitespace-nowrap text-[9px] font-extrabold uppercase tracking-[0.13em] text-white sm:text-xs sm:tracking-[0.18em]">Innovate, Build &amp; Secure with AI</span>
            <span aria-hidden="true" className="h-4 w-px bg-white/65" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-xs sm:tracking-[0.16em]">Build. Innovate. Secure. Present.</span>
            <span aria-hidden="true" className="h-4 w-px bg-white/65" />
            <span className="whitespace-nowrap text-[9px] font-black uppercase tracking-[0.13em] text-white sm:text-xs sm:tracking-[0.18em]">Enrolment Now Open</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LabsMagazineFeature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-6xl px-4 pb-4 pt-2 sm:px-6 lg:px-0 lg:py-3"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -inset-3 rounded-[34px] bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,.3),rgba(245,158,11,.13)_42%,transparent_72%)] blur-2xl animate-pulse" />
      <span aria-hidden="true" className="labs-poster-orbit labs-poster-orbit--wide" />
      <span aria-hidden="true" className="labs-poster-orbit labs-poster-orbit--tall" />
      <div className="promo-card-highlight relative z-10 overflow-hidden rounded-[26px] border border-amber-200/60 bg-gradient-to-br from-slate-900/90 via-[#11141a]/90 to-amber-950/70 shadow-[0_30px_80px_rgba(0,0,0,.42),0_0_28px_rgba(250,204,21,.28)] backdrop-blur-xl">
        <div className="absolute -left-11 top-7 z-20 w-44 -rotate-45 border-y border-emerald-200/50 bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-700 py-1.5 text-center text-[8px] font-black uppercase tracking-[0.16em] text-white shadow-[0_0_20px_rgba(16,185,129,.38)]">
          Registration Open
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(255,198,66,.15),transparent_42%),radial-gradient(ellipse_at_100%_100%,rgba(255,153,0,.12),transparent_45%)]" aria-hidden="true" />
        <div className="relative min-h-[500px] overflow-hidden sm:min-h-[440px] lg:min-h-[410px]">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:linear-gradient(90deg,black,transparent_85%)]" />
          <div className="relative z-10 flex min-h-[500px] max-w-[600px] flex-col justify-center px-6 py-8 sm:min-h-[440px] sm:px-10 lg:min-h-[410px] lg:px-12">
            <p className="w-fit whitespace-nowrap border-l-2 border-amber-400 pl-2.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-white/75 sm:text-[10px] sm:tracking-[0.12em]">A flagship initiative by <span className="whitespace-nowrap font-extrabold text-amber-300">Digital Risk Labs</span></p>
            <p className="mt-5 text-[9px] font-black uppercase tracking-[0.2em] text-amber-200 sm:text-[10px]">The Future Is Being Built.<br className="sm:hidden" /> Are You Ready?</p>
            <h2 className="mt-2 text-2xl font-black italic leading-[1.02] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-300 to-yellow-500 drop-shadow-[0_2px_12px_rgba(0,0,0,.95)] sm:text-3xl lg:text-[40px]"><span className="block whitespace-nowrap">Innovate, Build</span><span className="block whitespace-nowrap">&amp; Secure with AI</span></h2>
            <p className="mt-3 max-w-md text-xs font-semibold leading-relaxed text-white drop-shadow-[0_1px_7px_rgba(0,0,0,.95)] sm:text-sm">Designed for the next generation of innovators.</p>
            <div className="mt-5 border-t border-amber-200/30 pt-3">
              <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-amber-100/80">In collaboration with</p>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5"><img src="/images/digital-risk-labs-white.png" alt="" className="h-6 w-6 object-contain" /><span className="whitespace-nowrap text-[9px] font-bold text-white sm:text-[10px]">Digital Risk Labs</span></div>
                <span aria-hidden="true" className="text-sm font-light text-amber-300">×</span>
                <img src="/images/imperial-white-wordmark.webp" alt="Imperial College London" className="h-5 w-[92px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/programmes/ai-for-generation-z" className="relative z-20 mx-auto mt-4 flex w-fit items-center justify-center gap-2 rounded-full border border-yellow-300/80 bg-gradient-to-r from-amber-300/90 to-yellow-400/90 px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-[0_0_24px_rgba(250,204,21,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(250,204,21,0.5)]">
        Explore &amp; Enrol <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </motion.div>
  );
}


export default function AdvisoryHome() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Intelligence-driven risk strategies',
      description: 'We leverage advanced analytics and real-time intelligence to transform risk into a strategic advantage—enabling faster, smarter, and more confident decision-making across complex business environments.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'
    },
    {
      icon: Zap,
      title: 'AI and cyber expertise combined',
      description: 'Our integrated approach blends artificial intelligence with deep cybersecurity expertise to proactively identify threats, automate responses, and build resilient digital ecosystems for the future.',
      image: 'https://media.istockphoto.com/id/2205274485/photo/ai-technology-artificial-intelligence-brain-chip-wide-concepts-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=wj-1wf7bEnLh5F1JWl3SRw7yCEcehUx2ufrF64rJVec='
    },
    {
      icon: Shield,
      title: 'Regulatory-ready frameworks',
      description: 'We design and implement robust, scalable frameworks that ensure compliance with evolving regulations while enabling secure innovation and growth in a rapidly changing digital landscape.',
      image: 'https://images.pexels.com/photos/32529341/pexels-photo-32529341.jpeg'
    },
    {
      icon: Award,
      title: 'Outcome-focused execution',
      description: 'We are committed to delivering measurable results that drive business value, enhance security posture, and enable sustainable growth through strategic risk management and innovative solutions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200'
    }
  ];

  const howWeWork = [
    {
      step: '01',
      title: 'Discover',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
      description: 'Deep dive into your business environment, digital assets, and risk exposure landscape.',
    },
    {
      step: '02',
      title: 'Assess',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      description: 'Identify vulnerabilities, threat vectors, and compliance gaps using advanced analytics.',
    },
    {
      step: '03',
      title: 'Design',
      image: 'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfDB8MHx8fDA%3D',
      description: 'Craft tailored cybersecurity frameworks aligned with your strategic objectives.',
    },
    {
      step: '04',
      title: 'Implement',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      description: 'Deploy scalable, secure solutions seamlessly into your operational ecosystem.',
    },
    {
      step: '05',
      title: 'Monitor & Evolve',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZhbHVhdGlvbnxlbnwwfDB8MHx8fDA%3D',
      description: 'Continuously monitor, adapt, and strengthen resilience against evolving threats.',
    }
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      number: '01', title: 'AI Governance & Responsible Innovation', icon: BrainCircuit,
      img: '/images/capability-ai-governance.jpg',
      description: 'Establish robust AI governance frameworks that promote transparency, accountability and responsible adoption. Navigate AI-related risks, strengthen oversight and align innovation with ethical principles and evolving regulatory expectations.',
      themes: 'TRANSPARENCY · ACCOUNTABILITY · TRUST', placement: 'lg:col-start-1 lg:row-start-1'
    },
    {
      number: '02', title: 'Cyber Risk & Security', icon: ShieldCheck,
      img: '/images/capability-cyber-risk.jpg',
      description: 'Identify, assess and mitigate evolving cyber threats through structured risk assessments, security strategies and proactive threat management. Strengthen your security posture and safeguard critical digital assets.',
      themes: 'THREAT INTELLIGENCE · PROTECTION · SECURITY', placement: 'lg:col-start-3 lg:row-start-1'
    },
    {
      number: '03', title: 'Digital Resilience & Business Continuity', icon: RefreshCw,
      img: '/images/capability-identity.jpg',
      description: 'Prepare your organisation to withstand, respond to and recover from digital disruptions. Strengthen operational resilience, anticipate vulnerabilities and build the adaptability needed to keep critical services running.',
      themes: 'CONTINUITY · RECOVERY · ADAPTABILITY', placement: 'lg:col-start-1 lg:row-start-2'
    },
    {
      number: '04', title: 'Regulatory Compliance & Digital Trust', icon: Scale,
      img: '/images/capability-compliance.jpg',
      description: 'Navigate complex regulatory environments with structured compliance and governance approaches. Embed risk awareness, strengthen accountability and build trust across your digital operations.',
      themes: 'COMPLIANCE · GOVERNANCE · DIGITAL TRUST', placement: 'lg:col-start-3 lg:row-start-2'
    },
  ];

  const items = [
    {
      title: "Our Story",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1625014618427-fbc980b974f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
      description:
        "Bridging technology and strategy to help organisations thrive securely. We combine cybersecurity, AI, and business insight to drive resilient innovation."
    },
    {
      title: "Our Mission",
      icon: Target,
      image: "https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlubm92YXRpb24lMjBsYWJ8ZW58MHx8MHx8fDA%3D",
      description:
        "To empower organisations to innovate securely in a digital-first world. We ensure risk management enables growth rather than restricting progress."
    },
    {
      title: "Our Vision",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      description:
        "To become a global leader in digital risk intelligence and AI governance, setting benchmarks in security, compliance, and resilience."
    },
    {
      title: "Our Values",
      icon: Award,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "Our foundation is built on integrity, innovation, accountability, and excellence. We uphold transparency innovation to deliver impactful, high-quality solutions."
    }
  ];

  const sectionStyles = {
    light: "bg-background",
    soft: "bg-background",
    warm: "bg-background",
    base: "bg-background",
    premium: "bg-background"
  };


  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current < services.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <LabsFlagshipTicker />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/Hero-Background2.mp4" type="video/mp4" />
        </video>

        {/* DARK GRADIENT OVERLAY (clean + readable) */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1680px] grid-cols-1 items-center gap-6 px-6 pb-6 pt-32 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.42fr)] lg:gap-14 lg:px-12 lg:pb-8 lg:pt-32">
          <div className="mx-auto w-full text-center">
            <h1 className="font-extrabold leading-[1.02] tracking-[-0.045em] text-[clamp(2.6rem,3.75vw,4.15rem)]">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="block text-white"
              >
                From Vision to Enterprise
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="logo-shine mt-2 block"
              >
                Where Ideas Scale into Digital Ventures
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-slate-100 sm:text-xl lg:text-2xl"
            >
              An integrated ecosystem combining incubation, advanced technology, and global partnerships to build the next generation of digital businesses.
            </motion.p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 sm:gap-5">
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.95 }}
                onClick={() => navigate('/labs/services')}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_0_24px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(249,115,22,0.55)]"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 1.15 }}
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10"
              >
                Talk to an Adviser <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          <LabsMagazineFeature />
        </div>
      </section>

      {/* CORE PILLARS - CLICK FLIP */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-background">
        {/* Flipping Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-foreground font-extrabold mb-6">
            Our Core Pillars
          </h2>

          <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
            Combining strategic acceleration with cutting-edge innovation to deliver comprehensive digital risk solutions.
          </p>
        </motion.div>
        <FlippingCards />

      </section>

      {/* ABOUT */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="relative overflow-hidden bg-[#071321] py-20 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,84,124,0.22),transparent_56%)]" />

        <div className="container mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-white">
                About Us
              </span>
            </h2>

            <p className="text-2xl md:text-xl font-semibold text-[#d4af37] uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              A forward-thinking ecosystem designed to build, launch, and scale the next generation of digital ventures.
            </p>
          </div>

          {/* FAN LAYOUT */}
          <div className="relative min-h-150 flex items-center justify-center mt-12 px-4">
            <div className="relative w-full max-w-7xl flex flex-wrap justify-center gap-6 md:gap-0">
              {items.map((item, index) => {
                // Rotation and translation values for the fan effect
                const rotations = [-15, -5, 5, 15];
                const xOffsets = [-120, -40, 40, 120];
                const yOffsets = [40, 0, 0, 40];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100, rotate: 0, x: 0 }}
                    whileInView={{
                      opacity: 1,
                      y: yOffsets[index],
                      rotate: rotations[index],
                      x: xOffsets[index]
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 50,
                      damping: 15
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      y: -20,
                      x: xOffsets[index],
                      zIndex: 50,
                      transition: { duration: 0.3 }
                    }}
                    className="w-75 md:w-[320px] lg:w-87.5 shrink-0 md:-ml-20 first:ml-0"
                    style={{ zIndex: index }}
                  >
                    <Card className="h-full rounded-3xl overflow-hidden relative group border border-border shadow-2xl bg-card/40 backdrop-blur-xl transition-all duration-500">

                      {/* METALLIC GLASS BACKGROUND */}
                      <div className="absolute inset-0 bg-card/40 backdrop-blur-xl" />

                      {/* SHINE EFFECT */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                        <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-primary/30 to-transparent rotate-12 -translate-x-full group-hover:translate-x-[200%] transition-all duration-1000" />
                      </div>

                      {/* IMAGE */}
                      <div className="h-48 md:h-56 overflow-hidden relative z-10">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 relative z-10 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br from-zinc-100 to-zinc-200 border border-zinc-300 shadow-md group-hover:scale-110 transition">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Imperial academic collaboration */}
      <section className="relative isolate min-h-[900px] overflow-hidden border-y border-orange-300/20 bg-slate-950 px-5 py-12 text-slate-900 sm:min-h-[860px] sm:px-8 sm:py-16 lg:min-h-[900px]">
        <img src="/images/Imperial/imperial-collaboration-campus.jpg" alt="Imperial College London campus courtyard" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,249,255,.78)_0%,rgba(247,249,255,.66)_34%,rgba(18,34,67,.16)_58%,rgba(5,13,36,.92)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,.18),transparent_24%,transparent_76%,rgba(255,255,255,.16))]" />
        <div className="relative mx-auto flex min-h-[820px] max-w-7xl flex-col justify-between sm:min-h-[780px] lg:min-h-[800px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto w-full max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-orange-400/70 bg-white/55 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800 backdrop-blur sm:text-xs">Academic × Innovation</span>
            <h2 className="mt-4 text-4xl font-black leading-[1.03] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Empowering the Next Generation<br/><em className="font-black italic text-blue-800">Through Knowledge and Innovation.</em></h2>
            <p className="mt-3 text-base font-semibold uppercase tracking-[0.14em] text-slate-600 sm:text-lg">From Academic Excellence to Real-World Possibilities.</p>
            <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-6 text-slate-700 sm:text-base sm:leading-7">Through our collaboration with Imperial College London, Digital Risk Labs aims to bring academic expertise and emerging technologies together to inspire tomorrow’s innovators.</p>
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-white/70 bg-white/55 px-5 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:gap-3">
              <img src="/images/Imperial/digital-risk-logo-blue.png" alt="Digital Risk Labs" className="h-8 w-7 object-contain" />
              <span className="text-xs font-extrabold text-slate-900 sm:text-sm">Digital Risk Labs</span>
              <span aria-hidden="true" className="text-lg font-light text-orange-500">×</span>
              <img src="/images/Imperial/imperial-logo-blue.png" alt="Imperial College London" className="h-7 w-28 object-cover sm:w-36" />
            </div>
          </motion.div>

          <div className="relative mt-10 pt-8">
            <div className="grid gap-3 md:grid-cols-3 md:gap-4">
              {[
                { icon: GraduationCap, title: "Learn from Academic Expertise", text: "Gain insights from world-class academics and subject experts." },
                { icon: Cpu, title: "Explore Emerging Technologies", text: "Discover how cutting-edge innovation shapes the future." },
                { icon: Lightbulb, title: "Turn Ideas into Possibilities", text: "Develop skills, think creatively, and build for what’s next." },
              ].map(({ icon: Icon, title, text }) => (
                <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="flex items-center gap-4 rounded-2xl border border-amber-100/40 bg-slate-950/65 p-4 text-white shadow-xl shadow-slate-950/20 backdrop-blur-md sm:p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-amber-300/35 bg-white/5 text-amber-300"><Icon className="h-6 w-6"/></span>
                  <span className="h-10 w-px shrink-0 bg-amber-300/55" />
                  <span><strong className="block text-sm font-extrabold leading-snug sm:text-base">{title}</strong><span className="mt-1 block text-xs leading-relaxed text-slate-200 sm:text-sm">{text}</span></span>
                </motion.article>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
              <Link to="/collaboration" className="group inline-flex items-center gap-2 font-bold text-amber-200 transition hover:text-white">Discover Our Collaboration <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-background ">
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-foreground">
                How We Work
              </span>
            </h2>

            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              A structured, intelligence-driven approach to managing digital risk
            </p>
          </div>

          {/* HORIZONTAL SCROLL */}
          <div className="relative">
            <motion.div
              className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory"
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {howWeWork.map((phase, index) => (
                <motion.div
                  key={index}
                  className="min-w-[320px] md:min-w-95 bg-card rounded-2xl shadow-xl overflow-hidden snap-center group hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  {/* IMAGE */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={phase.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* STEP BADGE */}
                    <div className="absolute top-4 left-4 bg-linear-to-br from-zinc-100 via-zinc-200 to-zinc-100 text-primary border border-zinc-300 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Step {phase.step}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {phase.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* FADE EDGE EFFECT */}
            <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="relative overflow-hidden bg-[#0b1118] py-14 md:py-16">

        {/* HEADER */}
        <div className="relative z-10 mb-8 text-center md:mb-10">
          <h2 className="mb-3 text-5xl font-extrabold md:text-5xl">
            <span className="text-white">
             Strategic Capabilities
            </span>
          </h2>

          <p className="mx-auto max-w-4xl px-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-amber-300 md:text-sm">
            From risk assessment to regulatory compliance, we enable secure and scalable digital transformation
          </p>
        </div>

        {/* EDITORIAL BENTO GRID */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-12">
            {services.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`group relative min-h-[320px] overflow-hidden rounded-[26px] border border-white/20 bg-white/[0.09] shadow-[0_18px_48px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-200/50 hover:bg-white/[0.13] md:min-h-[330px] ${i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5' : i === 2 ? 'md:col-span-5' : 'md:col-span-7'}`}
              >
                <div className={`flex h-full min-h-[320px] flex-col md:min-h-[330px] ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="relative h-52 shrink-0 overflow-hidden md:h-auto md:w-[44%]">
                    <img src={item.img} alt={`${item.title} visual`} loading="lazy" className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${item.number === '01' ? 'object-[68%_center]' : 'object-center'}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101a25]/35 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#102033]/20" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/55 bg-[#071321]/55 px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-white backdrop-blur-sm">{item.number}</span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-6 sm:p-7">
                    <div className="mb-2 flex items-start gap-3"><item.icon className="mt-1 h-5 w-5 shrink-0 text-amber-200" /><h3 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">{item.title}</h3></div>
                    <p className="mt-1 text-[13px] leading-[1.6] text-slate-100/90 sm:text-sm">{item.description}</p>
                    <p className="mt-4 text-[9px] font-bold leading-4 tracking-[0.1em] text-amber-200 sm:text-[10px] sm:tracking-[0.13em]">{item.themes}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/labs/services')}
            className="inline-flex items-center gap-1 text-lg font-semibold text-[#d4af37]/80 hover:text-[#d4af37] transition"
          >
            View All Advisory Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </section>

      {/* Innovation Spotlight - PRISM */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="relative isolate overflow-hidden bg-[#f5f7fa] py-16 md:py-20">

        {/* HEADER OUTSIDE CARD */}
        <div className="relative z-10 mb-10 text-center">
          <h2 className="flex flex-wrap justify-center gap-x-2 text-3xl font-extrabold mb-6 sm:text-5xl md:text-6xl">
            <span className="text-[#101d35]">
              Innovation Spotlight
            </span>
            <span className="bg-linear-to-r from-[#315eab] to-[#c78320] bg-clip-text text-transparent">
              PRISM
            </span>
          </h2>

          <p className="mx-auto max-w-4xl px-4 text-sm font-semibold uppercase leading-relaxed tracking-[0.15em] text-slate-600 md:text-base">
            AI-powered regulatory intelligence transforming compliance into automated, traceable systems.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mt-8 overflow-hidden rounded-[34px_12px_54px_12px] border border-[#d9e3ef] bg-white shadow-[0_28px_80px_rgba(30,49,75,.16)] sm:rounded-[54px_16px_72px_16px]">
            <img src="/images/innovation-spotlight-bg.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center brightness-110 saturate-110" />

            {/* INNER GRID */}
            <div className="relative z-10 grid items-stretch gap-6 px-6 py-8 sm:px-9 sm:py-10 md:grid-cols-[1.15fr_.85fr] md:gap-8 md:px-12 md:py-12">

              {/* LEFT SIDE — PRISM STORY CARD */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-1 sm:p-3">

                <div className="relative z-10">

                  {/* LOGO + HEADING */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={prismLogo}
                      alt="PRISM Logo"
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-2xl font-bold tracking-tight text-[#14233b] sm:text-3xl">
                      About PRISM
                    </h3>
                  </div>

                  {/* CONTENT */}
                  <p className="mt-6 text-sm leading-7 text-[#34445c] md:text-base md:leading-8">
                    PRISM is an end-to-end <strong className="font-semibold text-[#24569a]">AI-powered regulatory intelligence</strong> platform designed to transform complex regulatory documentation into <strong className="font-semibold text-[#24569a]">structured, executable, and fully auditable</strong> outputs. It automates <strong className="font-semibold text-[#24569a]">formula extraction, interpretation, and COREP reporting</strong> with complete traceability—eliminating manual inefficiencies introduced by <strong className="font-semibold text-[#24569a]">Basel 3.1</strong> complexity. Built for financial institutions, compliance teams, and audit functions, PRISM enables organisations to move from manual execution to <strong className="font-semibold text-[#24569a]">intelligent, scalable regulatory oversight</strong>.
                  </p>
                  <a href="https://innovation-prism.vercel.app/" className="group mt-5 inline-flex w-fit items-center gap-3 rounded-[5px_18px_5px_18px] border border-[#183b68] bg-[#183b68] py-1.5 pl-4 pr-1.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(24,59,104,.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#24569a]">
                    <span>View Details</span><span className="grid h-7 w-7 place-items-center rounded-full bg-[#e8bd67] text-[#183b68] transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" /></span>
                  </a>

                </div>
              </motion.div>


              {/* RIGHT SIDE — FEATURE STACK */}
              <div className="flex flex-col gap-6">

                {[
                  {
                    title: "Precision",
                    desc: <>Accurate insights with <strong className="font-semibold text-[#24569a]">confidence and control.</strong></>,
                    icon: Shield
                  },
                  {
                    title: "Traceability",
                    desc: <><strong className="font-semibold text-[#24569a]">Full audit trails</strong> and explainable outcomes.</>,
                    icon: Target
                  },
                  {
                    title: "Scalability",
                    desc: <>Ready for <strong className="font-semibold text-[#24569a]">enterprise-scale compliance.</strong></>,
                    icon: Zap
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="group relative flex items-start gap-4 border-b border-[#6683a0]/25 py-5 transition-all duration-300 last:border-b-0 sm:py-6"
                  >
                    {/* ICON */}
                    <div className="relative z-10 rounded-xl border border-[#7393b6]/30 bg-white/45 p-3 text-[#315eab] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/70">

                      <item.icon className="w-5 h-5" />
                    </div>

                    {/* TEXT */}
                    <div className="relative z-10">
                      <h4 className="text-lg font-semibold tracking-tight text-[#17253d] md:text-xl">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-[#43536a] md:text-base">
                        {item.desc}
                      </p>
                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Why Choose Us */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="relative isolate overflow-hidden bg-[#0a1423] px-5 py-16 sm:px-8 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-400/[0.07] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.header initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-center md:mb-10">
            <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Why Choose Us</h2>
            <p className="mx-auto max-w-4xl px-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-amber-300 md:text-sm">Strategic cybersecurity and digital risk solutions designed for executive leadership and organisational resilience</p>
          </motion.header>

          <div className="grid gap-5 lg:grid-cols-[1.06fr_.94fr]">
            {whyChooseUs.slice(0, 1).map((item) => {
              const Icon = item.icon;
              return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/15 bg-slate-900 shadow-[0_24px_70px_rgba(0,0,0,.32)] sm:min-h-[480px]">
                <img src={item.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/70 to-[#07111f]/10" />
                <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/20 bg-slate-950/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md"><span className="text-amber-300">01</span><span className="h-4 w-px bg-white/30" />Our approach</div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/30 bg-amber-300/10 text-amber-200 backdrop-blur"><Icon className="h-6 w-6" /></span>
                  <h3 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">{item.description}</p>
                </div>
              </motion.article>;
            })}

            <div className="grid gap-4">
              {whyChooseUs.slice(1).map((item, index) => {
                const Icon = item.icon;
                return <motion.article key={item.title} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.08 }} className="group relative grid min-h-[164px] grid-cols-[104px_minmax(0,1fr)] overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.055] backdrop-blur-md transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.09] lg:min-h-[150px] lg:grid-cols-[124px_minmax(0,1fr)]">
                  <div className="relative min-h-full overflow-hidden"><img src={item.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#081322]/45 to-transparent" /><span className="absolute left-3 top-3 font-mono text-[10px] font-bold tracking-[0.14em] text-white">0{index + 2}</span></div>
                  <div className="flex flex-col justify-center p-4 sm:p-5 lg:p-5">
                    <h3 className="flex items-start gap-2 text-base font-bold leading-snug text-white sm:text-lg"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-[13px]">{item.description}</p>
                  </div>
                </motion.article>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentors */}
      <section className="relative overflow-hidden bg-[#f4f7fb] px-5 py-10 sm:px-8 md:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-8 h-80 w-80 rounded-full bg-sky-200/40 blur-[110px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/70 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#12213a] sm:text-3xl">Meet the Minds Behind <span className="font-serif font-medium italic text-[#315eab]">Digital Risk Labs</span></h2>
          </div>
          <AdvisorSlideshow compact theme="light" />
        </div>
      </section>

      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>


    </div>
  );
}
