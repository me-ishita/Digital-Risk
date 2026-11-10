import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import digitalRiskLogo from "../../assets/brand logo.jpeg";
import {
  ArrowRight,
  TrendingUp,
  BookOpen,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type StoryVisionSlide = {
  heading: string;
  body: ReactNode;
  image: string;
};


const heroSlides = [
  {
    title: "Investment Banking Programme",
    description:
      "A 4-week live, high-intensity programme led by professionals working in top UK investment banks across digital risk, cyber risk, and financial services.",
    audience: "Students & Early-career Professionals",
    highlights: [
      "Real-world banking scenarios",
      "Career guidance & mentorship",
      "Live cohort-based training",
    ],
    badge: "Financial Services Programme",
    duration: "4 Weeks",
    image:
      "https://images.unsplash.com/photo-1630464373688-fb6a37ce89ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGludmVzdG1lbnQlMjBiYW5raW5nfGVufDB8fDB8fHww",
    courseId: "investment-banking",
    cta: "Enrol Now",
    featured: true,
  },

  {
    title: "Digital Risk Fundamentals",
    description:
      "Essential foundation for understanding digital risk landscape. Covers threat identification, risk assessment methodologies, and compliance frameworks for modern enterprises.",
    audience: "New Professionals, Risk Managers, Board Members",
    highlights: [
      "Enterprise risk frameworks",
      "Compliance & governance",
      "Risk assessment methodologies",
    ],
    badge: "Foundation Programme",
    duration: "2 Weeks",
    image:
      "https://images.pexels.com/photos/5833263/pexels-photo-5833263.jpeg",
    courseId: "digital-risk-fundamentals",
    cta: "View Course",
    featured: false,
  },

  {
    title: "Cyber Resilience Practitioner",
    description:
      "Master operational cybersecurity through live-fire training with enterprise-grade toolsets. Graduate Day 1 ready for Security Analyst and SOC leadership roles.",
    audience: "High-potential Graduates, Career Switchers",
    highlights: [
      "SOC analyst readiness",
      "Hands-on cyber simulations",
      "Enterprise-grade tooling",
    ],
    badge: "Hands-on Cyber Training",
    duration: "2 Weeks",
    image:
      "https://media.istockphoto.com/id/2174551157/photo/cyber-security-data-protection-business-technology-privacy-concept.jpg?b=1&s=612x612&w=0&k=20&c=C2ye6tSOAmDUhC4MGIAlhA8w2o65eP-Mkg8dDxBwCcI=",
    courseId: "cyber-resilience-practitioner",
    cta: "View Course",
    featured: false,
  },

  {
    title: "AI Risk Governance",
    description:
      "Strategic AI deployment and governance frameworks for executive decision-makers navigating regulatory compliance and risk management.",
    audience: "C-Suite, Board Members, Risk Leaders",
    highlights: [
      "AI governance frameworks",
      "Executive-level strategy",
      "Regulatory compliance focus",
    ],
    badge: "Executive Programme",
    duration: "2 Weeks",
    image:
      "https://media.istockphoto.com/id/2222990006/photo/artificial-intelligence-machine-learning-large-language-model-ai-technology.jpg?b=1&s=612x612&w=0&k=20&c=8hk3IlipRU48WifJU7rAF2QqZ1B6LhXYgggme52yFCA=",
    courseId: "ai-risk-governance",
    cta: "View Course",
    featured: false,
  },
];

const SLIDE_DURATION = 5000;
const sectionEyebrowLight = "mb-3 inline-flex items-center rounded-full border border-orange-200/70 bg-orange-100/75 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-700 sm:text-xs";
const sectionEyebrowDark = "mb-3 inline-flex items-center rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-200 sm:text-xs";

const academyStorySlides: StoryVisionSlide[] = [
  {
    heading: "Where It Began",
    body: (
      <>
        <span className="logo-shine font-semibold">Digital Risk Academy</span> was founded on a simple conviction: that world-class digital risk education should be accessible, practical, and built for the realities of today's threat landscape — not yesterday's textbooks.
      </>
    ),
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=55&w=720&auto=format&fit=crop",
  },
  {
    heading: "The Gap We Saw",
    body: "Organisations were hiring talent with credentials but not capability. Professionals had theoretical knowledge but struggled with real-world application. We built the Academy to bridge that gap — from classroom to boardroom.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=55&w=720&auto=format&fit=crop",
  },
  {
    heading: "Built for Practitioners",
    body: "Every programme is designed by practitioners who have led risk functions, responded to incidents, and advised boards. This is education with real-world DNA — built to produce professionals who are ready from day one.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=55&w=720&auto=format&fit=crop",
  },
];

const academySliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const academyVisionSlides: StoryVisionSlide[] = [
  {
    heading: "Our Vision",
    body: "To become the leading global academy for digital risk capability — equipping the next generation of cyber, AI risk, and governance professionals to lead with clarity, confidence, and integrity.",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=55&w=720&auto=format&fit=crop",
  },
  {
    heading: "Our Mission",
    body: "We are committed to democratising education by removing barriers and creating equal access for all. Whether privileged or underserved, every individual deserves the opportunity to learn, grow, and succeed.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
  },
  {
    heading: "The Future We're Building",
    body: "We envision a world where digital risk is understood at every level of an organisation — where security awareness is cultural, governance is embedded, and emerging technologies are adopted with wisdom. That starts with education.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=55&w=720&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote: "I do not teach theory. I teach the decisions I made yesterday to protect the bank.",
    author: "Visiting Fellow, IDR Faculty",
    role: "Active CISO",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=55&w=80&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=55&w=1280&auto=format&fit=crop",
  },
  {
    quote: "From Junior Analyst to Security Team Lead in 8 months. The live-fire training made all the difference.",
    author: "Sarah Chen, 2024 Cohort",
    role: "Security Team Lead, FinTech",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=55&w=80&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=55&w=1280&auto=format&fit=crop",
  },
  {
    quote: "The GRC programme gave our team a shared language for risk. Board conversations changed overnight.",
    author: "Head of Risk, Tier 1 Bank",
    role: "Enterprise Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=55&w=80&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=55&w=1280&auto=format&fit=crop",
  },
];

const impactData = [
  {
    title: "Accessible Learning for All",
    description:
      "Breaking barriers so every learner can access high-quality education.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    title: "Scholarships & Support",
    description:
      "Ensuring financial limitations never stop talent from growing.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    title: "Global Community",
    description:
      "A diverse ecosystem of learners, mentors, and innovators worldwide.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Future-Ready Skills",
    description:
      "Industry-aligned skills designed for real-world impact.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

function SocialImpactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/60 blur-[100px]" />
      <div className="container relative mx-auto px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3">
            <span className={sectionEyebrowLight}>Our Commitment</span>
          </div>
          <h2 className="mb-4 inline-block text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">Social Impact & Inclusion
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering individuals across all backgrounds with equal access to education, opportunity, and future-ready skills.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          <svg className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="impact-hologram" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fb923c" stopOpacity=".18" />
                <stop offset="50%" stopColor="#f97316" stopOpacity=".9" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity=".35" />
              </linearGradient>
            </defs>
            <path className="holographic-line" d="M500 280 C400 240 320 145 180 130" />
            <path className="holographic-line" d="M500 280 C600 240 680 145 820 130" />
            <path className="holographic-line" d="M500 280 C400 320 320 415 180 430" />
            <path className="holographic-line" d="M500 280 C600 320 680 415 820 430" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_300px_minmax(0,1fr)] lg:grid-rows-2 lg:gap-x-8 lg:gap-y-10">
            <div className="order-first flex min-h-[280px] items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:order-none">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-orange-400/60 bg-slate-950 px-7 text-center shadow-[0_0_34px_rgba(249,115,22,0.3),inset_0_0_36px_rgba(249,115,22,0.15)] sm:h-72 sm:w-72">
                <div className="absolute inset-3 rounded-full border border-orange-300/30" />
                <div className="absolute inset-0 rounded-full border border-blue-300/25 [transform:rotateX(68deg)_rotateZ(-16deg)_scale(1.22)]" />
                <div className="absolute -inset-3 rounded-full border border-orange-300/25 [transform:rotateX(68deg)_rotateZ(20deg)_scale(1.22)]" />
                <p className="relative z-10 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Equal Opportunity.<br /><span className="logo-shine">Limitless Potential.</span>
                </p>
                <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_14px_4px_rgba(251,146,60,0.65)]" />
              </div>
            </div>

            {impactData.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0.6, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative min-h-[240px] overflow-hidden rounded-2xl border border-orange-200/70 bg-slate-950 shadow-[0_14px_40px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_18px_48px_rgba(249,115,22,0.2)] sm:min-h-[270px] lg:min-h-[225px] ${i === 0 ? "lg:col-start-1 lg:row-start-1" : i === 1 ? "lg:col-start-3 lg:row-start-1" : i === 2 ? "lg:col-start-1 lg:row-start-2" : "lg:col-start-3 lg:row-start-2"}`}
              >
                <img src={item.image} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 via-amber-200 to-blue-400 opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-lg text-xs leading-relaxed text-slate-200 sm:text-sm">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/labs/case-studies" className="group inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700">
            View All Case Studies <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroCourseSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = heroSlides.length;

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimers = useCallback(() => {
    clearTimers();
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, SLIDE_DURATION);
  }, [total]);

  useEffect(() => {
    startTimers();
    return clearTimers;
  }, [startTimers, current]);

  const goTo = (idx: number) => {
    setCurrent(idx);
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  const slide = heroSlides[current];

  return (
    <div className="w-full">

      <section className="relative w-[92%] max-w-7xl mx-auto min-h-[520px] md:min-h-[560px] overflow-hidden rounded-[32px] border border-orange-200/20 shadow-2xl">
        {/* Background Images */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
          </motion.div>
        </AnimatePresence>

        {/* Main Content */}
        <div className="relative z-10 flex items-center h-full px-5 sm:px-8 md:px-14 py-10 md:py-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-4xl text-white"
            >
              {/* Badge */}
              <span
                className={`inline-block mb-4 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full border ${slide.featured
                  ? "bg-orange-500/20 text-orange-300 border-orange-400/40"
                  : "bg-white/10 text-white border-white/20"
                  }`}
              >
                {slide.badge}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl mb-6">
                {slide.description}
              </p>

              {/* Audience */}
              <p className="text-sm md:text-base text-slate-300 font-medium mb-7">
                {slide.audience}
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-1 gap-3 mb-8">
                {slide.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-100"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-400 shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  to={`programmes/${slide.courseId}`}
                  className={`inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm sm:text-base ${slide.featured
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-orange-500/40 hover:scale-[1.01] text-white"
                    : "bg-white text-black hover:bg-orange-50"
                    }`}
                >
                  {slide.cta} →
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/25 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-all active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/25 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-all active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${i === current
                  ? "w-8 h-2.5 bg-orange-500"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUTSIDE BUTTON */}
      <div className="flex justify-center mt-8 pb-16 sm:pb-20">
        <Link
          to="/academy/programs"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#cd5c30] hover:bg-[#b04d27] text-white font-semibold text-base shadow-lg shadow-orange-500/20 transition-all duration-300"
        >
          Browse All Courses →
        </Link>
      </div>

    </div>
  );
}

function ValidatedOutcomeSlider() {
  const voiceCards = testimonials;
  const metricCards = [
    {
      eyebrow: "Career Growth",
      title: "92% of learners",
      detail: "reported meaningful role progression within 12 months of completion.",
      meta: "Promotion or expanded scope",
    },
    {
      eyebrow: "Leadership Readiness",
      title: "88% stronger",
      detail: "board-level cyber risk communication confidence across partner cohorts.",
      meta: "Executive communication",
    },
    {
      eyebrow: "Operational Impact",
      title: "40% fewer",
      detail: "avoidable security incidents reported across participating organisations.",
      meta: "Measured after training",
    },
    {
      eyebrow: "Practical Capability",
      title: "Learn by doing",
      detail: "Hands-on scenarios help learners apply AI, cyber and governance concepts to real decisions.",
      meta: "Scenario-based learning",
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((value) => (value + 1) % voiceCards.length);
    }, 2500);

    return () => window.clearInterval(id);
  }, [voiceCards.length]);

  const featuredVoice = voiceCards[current % voiceCards.length];
  const rotatedMetrics = [
    ...metricCards.slice(current % metricCards.length),
    ...metricCards.slice(0, current % metricCards.length),
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={sectionEyebrowDark}>From Learning to Impact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Validated Outcomes </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Learners build practical confidence through real-world scenarios, while partner organisations strengthen risk communication and day-to-day resilience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          <motion.article
            key={featuredVoice.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ rotate: -0.4 }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[260px] sm:min-h-[300px] rounded-[2rem] overflow-hidden border border-white/25 bg-white/12 backdrop-blur-xl shadow-[0_16px_40px_rgba(2,6,23,0.35)]"
          >
            <img
              src={featuredVoice.image}
              alt={featuredVoice.author}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover scale-105 opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/25 to-black/55" />
            <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-black/20 px-3 py-1">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/90">Live Voice</span>
              </div>
              <div>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-5 max-w-md">"{featuredVoice.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={featuredVoice.avatar}
                    alt={featuredVoice.author}
                    loading="lazy"
                    decoding="async"
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-white/40"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{featuredVoice.author}</p>
                    <p className="text-xs text-white/75">{featuredVoice.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {rotatedMetrics.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ rotate: index % 2 === 0 ? 0.8 : -0.8 }}
                transition={{ duration: 0.45, delay: 0.06 * index }}
                className="rounded-[1.75rem] border border-white/45 bg-black p-6 sm:p-7 min-h-[190px] flex flex-col justify-end"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-2">{card.eyebrow}</p>
                <p className="text-xl sm:text-2xl font-semibold text-white leading-tight mb-3">{card.title}</p>
                <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed mb-3">{card.detail}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">{card.meta}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryVisionPanel({ slides, label, accent }: { slides: StoryVisionSlide[]; label: string; accent: string }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const slide = slides[current];

  const isVision = label === "Our Vision";

  return (
    <div className="grid items-center gap-7 md:grid-cols-12 md:gap-12">
      <div className={`relative min-h-[260px] sm:min-h-[340px] md:col-span-7 ${isVision ? "md:order-2" : ""}`}>
        <div className={`absolute inset-0 overflow-hidden ${isVision ? "rounded-[120px_24px_120px_24px]" : "rounded-[24px_120px_24px_120px]"}`}>
          <AnimatePresence mode="sync">
            <motion.img
              key={current}
              src={slide.image}
              alt={slide.heading}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0.5, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.24em] text-white/80">{label === "Our Story" ? "01 / The Beginning" : "02 / The Future"}</span>
        </div>
        <div className={`absolute -z-0 top-5 h-16 w-16 border-t border-orange-400/70 ${isVision ? "right-5 border-r" : "left-5 border-l"}`} />
      </div>

      <div className={`relative z-10 md:col-span-5 ${isVision ? "md:order-1 md:pl-8" : "md:pr-8"}`}>
        <span className={`inline-block rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] ${accent}`}>{label}</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0.65, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-4"
          >
            <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">{slide.heading}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{slide.body}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-orange-400" : "w-3 bg-white/30 hover:bg-white/60"}`} aria-label={`${label} slide ${i + 1}`} />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button onClick={prev} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-orange-400 hover:text-orange-300" aria-label={`Previous ${label} slide`}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-orange-400 hover:text-orange-300" aria-label={`Next ${label} slide`}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagshipCollaborationSection() {
  const details = [
    "4–8 JANUARY 2027",
    "5 DAYS",
    "AGES 12–17",
    "LONDON, UK",
    "IMPERIAL COLLEGE LONDON",
  ];
  const headlineTicker = ["DON’T JUST USE AI. BUILD THE FUTURE.", "THINK BIGGER."];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.28em] text-orange-500 [text-shadow:0_0_12px_rgba(249,115,22,0.55)]">Featured Experience</span>
          <h2 className="mx-auto max-w-none whitespace-nowrap text-[clamp(0.8rem,4vw,3rem)] font-black leading-tight tracking-tight text-slate-900">Shaping the Next Generation of AI Innovators</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">An extraordinary learning opportunity at Imperial College London.</p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-orange-300/50 bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
        <div className="overflow-hidden border-b border-orange-400/25 bg-slate-950 py-3 sm:py-4" aria-label="Programme inspiration">
          <div className="collaboration-marquee collaboration-marquee-large flex w-max items-center" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {headlineTicker.map((message) => (
                  <span key={`${copy}-${message}`} className="flex items-center whitespace-nowrap px-5 text-base font-black uppercase tracking-[0.12em] text-white sm:px-8 sm:text-xl sm:tracking-[0.16em]">
                    {message}<span className="ml-8 text-orange-400">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative isolate min-h-[650px] overflow-hidden sm:min-h-[570px] lg:min-h-[520px]">
          <img
            src="/images/ai-generation-globe.png"
            alt="Glowing digital globe representing artificial intelligence and emerging technology"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[64%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-black/15 sm:via-black/80" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

          <div className="flex min-h-[650px] items-center px-5 py-8 sm:min-h-[570px] sm:px-10 sm:py-10 lg:min-h-[520px] lg:px-14">
            <div className="max-w-2xl text-white">
              <div className="mb-5 flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="rounded-md border border-orange-400 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.22)] sm:text-xs sm:tracking-[0.18em]">
                  Flagship Academic Collaboration
                </span>
                <div className="flex items-center gap-3">
                  <img src="/images/digital-risk-labs-white.png" alt="Digital Risk Labs" className="h-10 w-10 object-contain" />
                  <span aria-hidden="true" className="h-7 w-px bg-white/40" />
                  <img src="/images/imperial-white-wordmark.webp" alt="Imperial College London" className="h-7 w-[150px] object-contain" />
                </div>
              </div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-orange-200">Young Innovators · London 2027</p>
              <h2 className="text-2xl font-black italic leading-[0.98] tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.25rem]">
                <span className="block">Innovate, Build</span>
                <span className="block whitespace-nowrap">&amp; Secure with <span className="text-orange-300">AI</span></span>
              </h2>
              <p className="mt-4 text-base font-semibold leading-snug text-orange-100 sm:text-lg">
                <span className="font-bold text-orange-200">Designed for the next generation of innovators.</span>
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                Explore emerging technologies through expert-led sessions, practical projects and an immersive learning experience at Imperial College London.
              </p>
              <Link
                to="/programmes/ai-for-generation-z"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-300/60 bg-orange-500/35 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_0_24px_rgba(249,115,22,0.24)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-500/55"
              >
                Explore &amp; Enrol <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>

        <div className="overflow-hidden border-t border-white/10 bg-slate-900 py-2.5" aria-label="Programme dates and details">
          <div className="collaboration-marquee collaboration-marquee-details flex w-max items-center" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {details.map((detail) => (
                  <span key={`${copy}-${detail}`} className="flex items-center whitespace-nowrap px-4 text-[9px] font-semibold tracking-[0.16em] text-slate-300 sm:px-7 sm:text-[10px] sm:tracking-[0.2em]">
                    {detail}<span className="ml-8 text-orange-400">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
          <span className="sr-only">4–8 January 2027 · 5 days · Ages 12–17 · London, UK · Imperial College London</span>
        </div>
        </div>
      </div>
    </section>
  );
}

function MandateCard({
  title,
  description,
  image,
  link,
  index,
}: any) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative h-[380px] rounded-[28px] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />

      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500" />

      {/* Glass Border */}
      <div className="absolute inset-[1px] rounded-[28px] border border-white/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-7">

        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="text-white/40 text-sm font-semibold tracking-[0.25em]">
            {index}
          </span>

          <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Bottom Content */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
            {title}
          </h3>

          <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-orange-400 to-orange-500 mb-5 group-hover:w-24 transition-all duration-500" />

          <p className="text-sm leading-relaxed text-slate-200">
            {description}
          </p>
        </div>
      </div>

      {/* Click Area */}
      <Link to={link} className="absolute inset-0 z-20" aria-label={title} />
    </motion.div>
  );
}

function AcademyCard({
  title,
  audience,
  duration,
  outcome,
}: any) {
  const bgImages: { [key: string]: string } = {
    "Professional Programmes":
      "https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudCUyMGNhcmVlciUyMGdyb3d0aHxlbnwxfHx8fDE3NzUyODk0ODZ8MA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "Corporate Training":
      "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTI4OTQ4Nnww&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "Executive Workshops":
      "https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwbWVldGluZyUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3NzUyODk0ODZ8MA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "Student Career Tracks":
      "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTI4OTQ4N3ww&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "University Partnership Programmes":
      "https://images.unsplash.com/photo-1678132218412-0f18fab9b537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcGFydG5lcnNoaXAlMjBjb2xsYWJvcmF0aW9uJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NTI4OTQ4N3ww&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "Certification Readiness":
      "https://images.unsplash.com/photo-1604872423159-61ef082dab75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0aW9uJTIwZXhhbSUyMHByZXBhcmF0aW9uJTIwc3R1ZHl8ZW58MXx8fHwxNzc1MjQxMzAxfDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 relative"
    >
      {/* Animated Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={bgImages[title]}
            alt={title}
            className="w-full h-full object-cover opacity-100 brightness-110 contrast-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />{" "}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full backdrop-blur-sm border border-blue-500/20">
            {audience}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="space-y-2 text-sm text-slate-400 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span>Outcome: {outcome}</span>
          </div>
        </div>
        <Link
          to="/academy/programs"
          className="text-blue-500 text-sm font-semibold inline-flex items-center space-x-1"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function CaseStudyCard({
  title,
  description,
  metric,
  image,
}: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-slate-100 hover:border-orange-200"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* subtle tint */}
        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-400" />
        {/* metric pill — sits on top of image */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wide rounded-full shadow-lg">
            {metric}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {description}
        </p>
        <Link
          to="/labs/case-studies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-700 transition-colors group/link"
        >
          Read Case Study
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* bottom accent line */}
      <div className="h-0.5 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

function InsightCard({
  type,
  title,
  description,
  icon,
  image,
}: any) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative group rounded-xl overflow-hidden min-h-[260px] border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=55&w=720"
          }
          alt={title}
          className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/60 to-transparent" />{" "}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10" />

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">
            {type}
          </span>
          <div className="text-blue-400">{icon}</div>
        </div>

        {/* Gradient Title */}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="text-slate-300 text-sm mb-4">
          {description}
        </p>

        <Link
          to="/insights"
          className="text-blue-400 font-semibold inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

const heroBackgroundVideo = "/Hero%20Background.mp4";

function HeroBg() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { threshold: 0.05 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center brightness-110 contrast-110 scale-[1.02]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={heroBackgroundVideo} type="video/mp4" />
      </video>

      {/* Softer cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Extra subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />
    </div>
  );
}

function FlagshipHomeTicker() {
  const items = [
    { text: "NEW", className: "text-orange-400" },
    { text: "FLAGSHIP PROGRAMME", className: "text-white" },
    { text: "INNOVATE, BUILD & SECURE WITH AI", className: "text-white" },
    { text: "ENROLMENT NOW OPEN", className: "text-emerald-400" },
  ];

  return (
    <div className="fixed left-0 right-0 top-[60px] z-40 overflow-hidden border-y border-sky-200/10 bg-blue-950/45 py-2.5 backdrop-blur-md sm:top-[76px] sm:py-3" aria-label="New flagship programme: Innovate, Build & Secure with AI. Enrolment now open.">
      <div className="collaboration-marquee flex w-max items-center" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={`${copy}-${item.text}`} className={`flex items-center whitespace-nowrap px-5 text-[10px] font-extrabold uppercase tracking-[0.12em] drop-shadow-[0_1px_4px_rgba(2,6,23,0.95)] sm:px-8 sm:text-xs sm:tracking-[0.16em] ${item.className}`}>
                {item.text}
                <span className="ml-5 text-orange-400 sm:ml-8">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeFlagshipPromo() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 1.85, ease: [0.22, 1, 0.36, 1] }}
      className="promo-card-highlight relative z-10 mx-4 mb-10 mt-5 w-[calc(100%-2rem)] max-w-[360px] overflow-hidden rounded-[22px] border border-orange-300/35 bg-slate-950/65 p-4 text-left text-white shadow-[0_18px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:mx-7 sm:ml-auto sm:mr-7 sm:p-4 lg:absolute lg:bottom-7 lg:right-8 lg:mx-0 lg:mb-0 lg:mt-0"
    >
      <img
        src="/images/ai-generation-globe.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/65 to-orange-950/60" />
      <span aria-hidden="true" className="promo-light-sweep absolute inset-y-0 left-0 z-10 w-1/3" />
      <div className="relative z-10">
        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-200 sm:text-[9px]">
          A flagship initiative by <span className="text-orange-300">Digital Risk Labs</span>
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/35 bg-emerald-500/15 px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.14em] text-emerald-200 backdrop-blur-sm sm:text-[9px]">
          <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
          Now Enrolling
        </span>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">The Future Is Being Built. Are You Ready?</p>
        <h2 className="mt-1 text-xl font-black italic leading-[0.98] tracking-[-0.03em] text-orange-300 [text-shadow:0_0_18px_rgba(251,146,60,0.32)] sm:text-2xl">
          Innovate, Build<br />&amp; Secure with AI
        </h2>

        <div className="mt-2 border-t border-white/15 pt-2">
          <p className="mb-1 text-[7px] font-bold uppercase tracking-[0.2em] text-slate-300">In collaboration with</p>
          <div className="flex items-center justify-start gap-2">
            <div className="flex min-w-0 shrink-0 items-center">
              <img src={digitalRiskLogo} alt="Digital Risk Labs" className="h-7 w-7 shrink-0 rounded object-cover" />
            </div>
            <span aria-hidden="true" className="text-xs text-orange-300">×</span>
            <div className="flex min-w-0 items-center gap-2">
              <img src="/images/imperial-white-wordmark.webp" alt="Imperial College London" className="h-5 w-[104px] shrink-0 object-contain" />
            </div>
          </div>
        </div>

        <Link
          to="/programmes/ai-for-generation-z"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-300/60 bg-orange-500/35 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_20px_rgba(249,115,22,0.18)] backdrop-blur-md transition hover:border-orange-200 hover:bg-orange-500/55 sm:text-[10px]"
        >
          Explore Programme &amp; Enrol <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.aside>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <FlagshipHomeTicker />

      {/* ════════════════════════════════════════
          1. HERO
          ════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden">
        <HeroBg />
        {/* offset by navbar height (64px) so content sits in the visible area */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 sm:px-7 pt-32 sm:pt-40 pb-8 sm:pb-12 container mx-auto text-center">

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.12]"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block text-white whitespace-normal md:whitespace-nowrap"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Create Leaders. Build Resilience. Reduce Risk.
            </motion.span>
            <motion.span
              className="block mt-3 logo-shine pb-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
            >
              The Core of Digital Confidence
            </motion.span>
          </motion.h1>
          <motion.p
            className="mt-6 text-[clamp(0.85rem,3.4vw,1rem)] sm:text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto text-center px-2 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            The Core of Digital Confidence, Capability Building and Strategic Innovation in Digital Risk-empowering organisations and professionals to navigate complexity with confidence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link to="/academy" className="inline-flex items-center justify-center gap-2 mt-10 w-full sm:w-auto px-6 py-3 bg-orange-400 hover:bg-white/10 hover:border-white  border-2 border-white/60 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5">
              Explore Academy <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => navigate("/labs")}
              className="group inline-flex items-center justify-center gap-2 
                 w-full sm:w-auto px-8 py-3 mt-10
                 bg-blue-900 border-2 border-white/60 text-white 
                 font-semibold rounded-full 
                 hover:bg-white/10 hover:border-white 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-0.5"
            >
              Visit Labs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
        <HomeFlagshipPromo />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        {/* scroll hint */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <div className="w-0.5 h-10 bg-white/30 rounded-full" />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          2. OUR MANDATE
          ════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative container mx-auto px-6">

          /* Section Header */
          <motion.div
            className="text-center mb-16 w-full mx-auto -mt-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={sectionEyebrowLight}>
              Our Core Mandate
            </span>

            <h2 className="mb-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-[clamp(2rem,3.3vw,3rem)]">
              Building the Infrastructure of Digital Confidence
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We operate through four interconnected pillars — developing talent,
              advancing innovation, enabling transformation, and delivering measurable
              strategic impact across organisations and society.
            </p>
          </motion.div>

          {/* Mandate Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <MandateCard
              index="01"
              title="Academy"
              description="Rigorous live-fire programmes and AI-powered learning for the next generation of digital risk leaders."
              image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=55&w=720&auto=format&fit=crop"
              link="/academy/programs"
            />

            <MandateCard
              index="02"
              title="Innovate"
              description="Pioneering digital risk frameworks, AI governance tools, and next-generation security solutions for a complex world."
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=55&w=720&auto=format&fit=crop"
              link="/labs/innovation"
            />

            <MandateCard
              index="03"
              title="Accelerator"
              description="Strategic extension of your leadership team through tailored risk programmes and bespoke talent pipelining."
              image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=55&w=720&auto=format&fit=crop"
              link="/labs/services"
            />

            <MandateCard
              index="04"
              title="Social Impact"
              description="Delivering measurable outcomes from governance to workforce capability across organisations and communities."
              image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=55&w=720&auto=format&fit=crop"
              link="/labs/case-studies"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACADEMIC PARTNERSHIPS
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-blue-50/60 pb-14 pt-8 text-slate-900 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
        <div className="pointer-events-none absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-blue-200/35 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-48 right-1/3 h-[400px] w-[400px] rounded-full bg-orange-200/30 blur-[120px]" />
        <div className="container relative mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-9 max-w-4xl text-center sm:mb-10"
          >
            <span className={sectionEyebrowLight}>Academic Partnership</span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[clamp(2rem,3.3vw,3rem)]">World-Class Academic Collaboration</h2>
            <p className="mx-auto mt-3 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">Bringing Academic Excellence and Innovation Together.</p>
          </motion.div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="mb-4 inline-flex flex-wrap items-center gap-2 sm:gap-2.5">
                <div className="flex items-center gap-1.5">
                  <img src="/images/Imperial/digital-risk-logo-blue.png" alt="Digital Risk Labs" className="h-8 w-8 object-contain" />
                  <span className="text-xs font-bold text-slate-700 sm:text-sm">Digital Risk Labs</span>
                </div>
                <span aria-hidden="true" className="text-lg font-light text-orange-500">×</span>
                <img src="/images/Imperial/imperial-logo-blue.png" alt="Imperial College London" className="h-6 w-36 object-cover" />
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-orange-200/80 bg-gradient-to-br from-white/90 via-orange-50/65 to-blue-50/55 p-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,.4)] sm:p-6">
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange-400 to-amber-300" />
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-800"><i className="h-1.5 w-1.5 rounded-full bg-orange-500" />Partnership in practice</span>
                <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">Bringing the Best of Academia and Innovation Together.</h3>
                <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-[1.7]">
                  <p className="font-medium text-slate-700">Through Digital Risk Labs, our collaboration with Imperial College London brings together academic insight, interdisciplinary expertise and emerging technologies.</p>
                  <p>Together, we aim to create meaningful learning experiences that encourage new thinking, connect knowledge with practical application and prepare the next generation to explore the possibilities of tomorrow.</p>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[720px] lg:max-w-none"
            >
              <div className="absolute -inset-3 rounded-[2rem] border border-orange-400/30 sm:-inset-4" />
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/70 bg-slate-900 shadow-[0_28px_75px_-35px_rgba(15,23,42,.5)]">
                <video src="/images/Imperial/Imperial Campus Shot.mp4" autoPlay muted loop playsInline poster="/images/Imperial/Imperial Campus.jpg" aria-label="Imperial College London campus" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/5" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-200">South Kensington · London</p>
                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">A campus built around discovery</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-7 flex justify-center">
            <Link to="/collaboration" className="group inline-flex items-center gap-2 text-sm font-extrabold text-blue-800 transition hover:text-orange-600">
              Discover Our Collaboration <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. OUR STORY & OUR VISION
          ════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="logo-shine mb-4 inline-block text-xl font-black uppercase leading-none tracking-[0.08em] sm:text-2xl md:text-4xl">Digital Risk Academy</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Our Story &amp; Vision</h2>
          </motion.div>
          <motion.div
            className="relative flex flex-col gap-12 sm:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StoryVisionPanel
              slides={academyStorySlides}
              label="Our Story"
              accent="text-orange-400 border-orange-500/40 bg-orange-500/10"
            />
            <StoryVisionPanel
              slides={academyVisionSlides}
              label="Our Vision"
              accent="text-blue-400 border-blue-500/40 bg-blue-500/10"
            />
          </motion.div>
        </div>
      </section>

      {/* FlagshipCollaborationSection is temporarily hidden; the hero promotion remains active.
      <FlagshipCollaborationSection />
      */}

      {/* ════════════════════════════════════════
          4. ELITE PROGRAMMES INTRO + COURSE SLIDER
          ════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <motion.div
          className="container mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={sectionEyebrowLight}>
            Our Learning Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Elite programmes for ambitious professionals
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Industry-aligned, practitioner-led courses that build real-world capability from day one.
          </p>
        </motion.div>
      </section>
      <HeroCourseSlider />

      {/* ════════════════════════════════════════
          5. INNOVATIONS & SOLUTIONS — DIGITAL RISK LABS
          ════════════════════════════════════════ */}

      <section className="py-16 sm:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="logo-shine mb-4 inline-block text-xl font-black uppercase leading-none tracking-[0.08em] sm:text-2xl md:text-4xl">
              Digital Risk Labs
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Innovations & Strategic Solutions
            </h2>

            <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              A structured innovation system that helps you build, validate, and scale digital ventures with clarity and execution focus.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* INNOVATION */}
            <motion.a
              href="/labs/innovation"
              className="group relative overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* IMAGE */}
              <div className="h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&q=55&auto=format&fit=crop&dpr=1"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Innovation Lab"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 mb-3">
                  01 — Innovation Lab
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
                  Build & validate next-gen digital solutions
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  We engineer next-generation digital solutions—transforming bold ideas into
                  powerful, scalable technologies ready for real-world impact.                </p>

                <div className="text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition">
                  Explore →
                </div>
              </div>
            </motion.a>

            {/* INCUBATION */}
            <motion.a
              href="/labs/incubation"
              className="group relative overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=55&auto=format&fit=crop&dpr=1"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Incubation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 mb-3">
                  02 — Incubation Studio
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
                  Shaping ideas into investment-ready ventures
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  We transform early-stage ideas into structured, investment-ready ventures—
                  guiding founders from concept to clarity with strategic direction.                </p>

                <div className="text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition">
                  Explore →
                </div>
              </div>
            </motion.a>

            {/* ACCELERATION */}
            <motion.a
              href="/labs/acceleration"
              className="group relative overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/32529341/pexels-photo-32529341.jpeg"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Acceleration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 mb-3">
                  03 — Acceleration Network
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
                  Scaling ventures into high-impact markets
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  We accelerate ventures into the market—connecting them with enterprise networks,
                  capital, and infrastructure to scale sustainably.                </p>

                <div className="text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition">
                  Explore →
                </div>
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. SOCIAL IMPACT & INCLUSION
      ════════════════════════════════════════ */}
      <SocialImpactSection />

      {/* ════════════════════════════════════════
          VALIDATED OUTCOMES
        ════════════════════════════════════════ */}
      <ValidatedOutcomeSlider />

      {/* ════════════════════════════════════════
          9. INSIGHTS & RESEARCH
      
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="container mx-auto px-6">
            <motion.div
              className="flex flex-col items-center justify-center text-center gap-4 mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-2 block">
                  Thought Leadership
                </span>

                <h2 className="logo-shine text-4xl md:text-5xl font-black tracking-wide uppercase mb-4 leading-tight">
                  Insights & Research
                </h2>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <InsightCard type="Whitepaper" title="Digital Risk Trends 2026" description="Emerging patterns in cyber risk and digital resilience" icon={<TrendingUp className="w-5 h-5" />} image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=55&w=720" />
            <InsightCard type="Framework Guide" title="AI Risk Governance Framework" description="Practical approaches to responsible AI implementation" icon={<BookOpen className="w-5 h-5" />} image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=55&w=720" />
            <InsightCard type="Research" title="Digital Trust in the Age of AI" description="Building accountability and trust in digital systems" icon={<BarChart3 className="w-5 h-5" />} image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=55&w=720" />
          </motion.div>
          <div className="w-full flex justify-center mt-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors group"
            >
              All Insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
         ════════════════════════════════════════ */}
      

      {/* ════════════════════════════════════════
          10. CTA BANNER
      ════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=55&w=1280&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-blue-700/30" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={sectionEyebrowDark}>Get started</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to build your<br />digital risk capability?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you need advisory services or a world-class training programme, we're ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:-translate-y-0.5">
                Schedule a Consultation
              </Link>
              <Link to="/academy/programs" className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5">
                Browse Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
