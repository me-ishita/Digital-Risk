import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const heroBackgroundVideo = "/Hero%20Background.mp4";

const heroSlides = [
  {
    title: "Cyber Resilience Practitioner",
    description:
      "Master operational cybersecurity through live-fire training with enterprise-grade toolsets. Graduate Day 1 ready for Security Analyst and SOC leadership roles.",
    audience: "High-potential Graduates, Career Switchers",
    tags: ["NIST CSF", "NCSC CAF", "ISO 27001"],
    duration: "2 Weeks",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=55&w=1280&auto=format&fit=crop",
    courseId: "cyber-resilience-practitioner",
  },
  {
    title: "AI Risk Governance",
    description:
      "Governance frameworks for executive decision-makers navigating regulatory compliance and risk management.",
    audience: "C-Suite, Board Members, Risk Leaders",
    tags: ["AI GOVERNANCE", "DORA", "ISO 27001"],
    duration: "2 Weeks",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=55&w=1280&auto=format&fit=crop",
    courseId: "ai-risk-governance",
  },
  {
    title: "Executive Leadership Programme",
    description:
      "CISO-in-a-Box training covering crisis management, board communication, and legal defensibility for cyber leadership roles.",
    audience: "Mid-to-Senior Professionals, Finance Leaders",
    tags: ["NIST CSF", "CAF", "DORA"],
    duration: "2 Weeks",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=55&w=1280&auto=format&fit=crop",
    courseId: "executive-leadership-programme",
  },
];

const SLIDE_DURATION = 5000;

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

const academyVisionSlides: StoryVisionSlide[] = [
  {
    heading: "Our Vision",
    body: "To become the leading global academy for digital risk capability — equipping the next generation of cyber, AI risk, and governance professionals to lead with clarity, confidence, and integrity.",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=55&w=720&auto=format&fit=crop",
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
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="logo-shine inline-block text-4xl md:text-5xl font-black tracking-wide uppercase mb-4 leading-tight">Social Impact & Inclusion
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering individuals across all backgrounds with equal access to education, opportunity, and future-ready skills.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {impactData.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-[320px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/55 to-black/25" />

              <div className="relative z-10 p-5 h-full flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EducationMissionSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
            Equal Opportunity. Limitless Potential.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} whileHover={{ y: -6, scale: 1.015 }} className="relative h-[420px] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
              alt="Education for all"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-3">Education for All</h3>

              <p className="text-slate-200 mb-4">
                We ensure that financial limitations never define a learner's future.
                Our platform provides inclusive opportunities through scholarships and flexible learning.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>Need-based scholarships</li>
                <li>Merit-based rewards</li>
                <li>Flexible learning paths</li>
                <li>Mentorship support</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -6, scale: 1.015 }} className="relative h-[420px] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww"
              alt="Education mission"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/20" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>

              <p className="text-slate-200 leading-relaxed">
                We are committed to democratizing education by removing barriers and creating equal access for all.
                Whether privileged or underserved, every individual deserves the opportunity to learn, grow, and succeed.
              </p>
            </div>
          </motion.div>
        </motion.div>
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
    <section className="relative w-[92%] max-w-6xl mx-auto h-[76svh] sm:h-[68vh] md:h-[560px] min-h-[620px] sm:min-h-0 overflow-hidden rounded-3xl border border-slate-200/20 shadow-2xl">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 pt-10 pb-14 sm:pt-0 sm:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              {slide.title}
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-slate-200 mb-2 max-w-2xl mx-auto leading-relaxed line-clamp-3 sm:line-clamp-none">
              {slide.description}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-5 font-medium">
              {slide.audience}
            </p>

            {/* Framework Tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-5 py-1.5 sm:py-2 bg-orange-500 text-white text-xs sm:text-sm font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Duration Badge */}
            <div className="flex justify-center mb-4 sm:mb-8">
              <span className="px-5 sm:px-6 py-2 bg-white text-blue-700 font-bold text-sm sm:text-base rounded-full shadow-lg">
                {slide.duration}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <Link
                to={`/academy/programs/${slide.courseId}`}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/40 text-sm sm:text-base"
              >
                View Course Details
              </Link>
              <Link
                to="/academy/programs"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                Browse All Courses
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left / Right Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm border border-white/15 text-white/90 hover:text-white transition-all active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm border border-white/15 text-white/90 hover:text-white transition-all active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 sm:bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex gap-2 sm:gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${i === current
                ? "bg-orange-500 w-6"
                : "bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroBg() {
  return (
    <div className="absolute inset-0">
      <video
        className="absolute inset-0 w-full h-full object-cover object-center brightness-125 contrast-105"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={heroBackgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    </div>
  );
}

export function HomePage() {
  const navigate = useNavigate(); 
  return (
    <div className="bg-white">

      {/* ════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[86svh] sm:min-h-[90svh] overflow-hidden">
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
            className="text-base md:text-lg text-white/90 font-medium mb-5 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Capability Building and Strategic Innovation in Digital Risk-empowering organizations and professionals to navigate complexity with confidence.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link to="/academy" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5">
              Academy <ArrowRight className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
            <button
      onClick={() => navigate("/advisory")} 
      className="group inline-flex items-center justify-center gap-2 
                 w-full sm:w-auto px-8 py-3.5 
                 bg-transparent border-2 border-white/60 text-white 
                 font-semibold rounded-full 
                 hover:bg-white/10 hover:border-white 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-0.5"
    >
      Explore Labs
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
=======
            <Link to="/advisory" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5">
              Labs <ArrowRight className="w-4 h-4" />
            </Link>
>>>>>>> 0cffab75ca35d65e40beb4daf9099ed6838d9824
          </motion.div>
        </div>
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
          3. OUR MANDATE
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-3 block">What we stand for</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mandate</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              We operate across four integrated pillars, creating a closed-loop ecosystem of talent, strategy, innovation, and impact.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <MandateCard
              title="Academy"
              description="Rigorous live-fire programmes and AI-powered learning for the next generation of digital risk leaders."
              image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=55&w=720&auto=format&fit=crop"
              link="/academy"
            />
            <MandateCard
              title="Innovate"
              description="Pioneering digital risk frameworks, AI governance tools, and next-generation security solutions for a complex world."
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=55&w=720&auto=format&fit=crop"
              link="/advisory"
            />
            <MandateCard
              title="Accelerator"
              description="Strategic extension of your leadership team through tailored risk programmes and bespoke talent pipelining."
              image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=55&w=720&auto=format&fit=crop"
              link="/advisory"
            />
            <MandateCard
              title="Social Impact"
              description="Delivering measurable outcomes from governance to workforce capability across organisations and communities."
              image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=55&w=720&auto=format&fit=crop"
              link="/advisory/case-studies"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR STORY & OUR VISION
      ════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="logo-shine inline-block text-xl sm:text-2xl md:text-4xl font-black tracking-[0.08em] uppercase mb-4 leading-none">Digital Risk Academy</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Our Story &amp; Vision</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
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
          <span className="logo-shine inline-block text-sm sm:text-lg md:text-2xl font-black tracking-[0.14em] uppercase mb-3 leading-none">Digital Risk Academy</span>
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
          6. INNOVATIONS & SOLUTIONS
      ════════════════════════════════════════ */}
      <section className="mt-16 sm:mt-24 py-16 sm:py-20 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="logo-shine inline-block text-xl sm:text-2xl md:text-4xl font-black tracking-[0.08em] uppercase mb-4 leading-none">Digital Risk Labs</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Innovations and Accelerator</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              PRISM turns complex regulatory obligations into accurate, traceable, and audit-ready reporting with minimal manual effort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-black/10 hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=55&w=720&auto=format&fit=crop"
                  alt="Regulatory documents and reporting"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] mb-3">
                  <span className="text-slate-500">01</span>{" "}
                  <span className="logo-shine">Digital Risk Labs</span>
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-3">
                  Regulatory reporting is still manual.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  COREP C07 requires time-consuming interpretation, mapping, and validation with limited automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-black/10 hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=55&w=720&auto=format&fit=crop"
                  alt="Automation and AI workflow"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500 mb-3">02 PRISM</p>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-3">
                  Here is how PRISM comes in.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  It automates ingestion, cleaning, chunking, formula extraction, retrieval, and deterministic calculations with full traceability.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-black/10 hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=55&w=720&auto=format&fit=crop"
                  alt="Audit-ready reporting dashboard"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500 mb-3">03 Solution</p>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3">
                  Audit-ready output with clear lineage.
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  The result is explainable reporting that scales to other COREP templates without changing the architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. SOCIAL IMPACT & INCLUSION
      ════════════════════════════════════════ */}
      <SocialImpactSection />
      <EducationMissionSection />

      {/* ════════════════════════════════════════
          9. IMPACT STORIES
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-3 block">Client Outcomes</span>
            <h2 className="logo-shine inline-block text-4xl md:text-5xl font-black tracking-wide uppercase mb-4 leading-tight">IMPACT STORIES</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              Real results from the organisations and professionals we've partnered with.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <CaseStudyCard title="University Digital Awareness" description="How a university strengthened digital risk awareness across student cohorts" metric="2,500+ Students Trained" image="https://images.unsplash.com/photo-1643199187247-b3b6009bf0bb?q=55&w=720&auto=format&fit=crop" />
            <CaseStudyCard title="Startup Governance Readiness" description="How a fintech startup achieved governance readiness before scaling" metric="Series A Ready in 90 Days" image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=55&w=720&auto=format&fit=crop" />
            <CaseStudyCard title="Team Cyber Risk Awareness" description="How an enterprise team built cyber risk awareness through role-based training" metric="95% Engagement Rate" image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=55&w=720&auto=format&fit=crop" />
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/advisory/case-studies" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold group transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VALIDATED OUTCOMES
        ════════════════════════════════════════ */}
      <ValidatedOutcomeSlider />

      {/* ════════════════════════════════════════
          9. INSIGHTS & RESEARCH
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
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

      {/* ════════════════════════════════════════
          ACADEMIC PARTNERSHIPS
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500 mb-4">Academic Partnerships</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-xl">
                World-class academic collaboration
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 flex flex-col items-center text-center shadow-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/sco/a/ad/Imperial_College_London_crest.svg"
                  alt="Imperial College London"
                  className="h-40 w-auto object-contain mb-8"
                />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">Strategic Partner</p>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Imperial College London</h3>
              </div>

              {/* Text */}
              <div>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  A strategic academic partner for curriculum design and research collaboration, Imperial College London plays a pivotal role in strengthening the academic and technical foundation of our programmes.
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Through its globally recognised academic ecosystem and interdisciplinary expertise, Imperial provides access to world-class faculty insights, cutting-edge research, and industry-aligned academic rigour — ensuring our curriculum remains at the forefront of innovation.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  This collaboration integrates the latest advancements in cybersecurity, AI governance, and digital risk directly into every programme we deliver.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          10. CTA BANNER
      ════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden bg-slate-950">
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 mb-4 block">Get started</span>
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
    <section className="py-20 sm:py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500 mb-3 block">Validated Outcomes</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Validated Outcomes</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            A rotating card deck keeps the section moving while preserving the smaller, cleaner text treatment.
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

  return (
    <div className="relative h-[360px] sm:h-[460px] overflow-hidden rounded-2xl">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.heading}
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />

      {/* Label */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
        <span className={`text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${accent}`}>
          {label}
        </span>
      </div>

      {/* Heading — always at fixed position from bottom */}
      <div className="absolute bottom-[82px] sm:bottom-[100px] left-4 sm:left-6 right-4 sm:right-6 z-10">
        <AnimatePresence mode="wait">
          <motion.h3
            key={current + "-h"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight"
          >
            {slide.heading}
          </motion.h3>
        </AnimatePresence>
      </div>
      {/* Body — fixed height strip above dots */}
      <div className="absolute bottom-[18px] sm:bottom-[28px] left-4 sm:left-6 right-4 sm:right-6 h-[64px] sm:h-[72px] z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={current + "-p"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-slate-200 text-[13px] sm:text-sm leading-relaxed line-clamp-3"
          >
            {slide.body}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white transition-all active:scale-95" aria-label="Previous">
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </button>
      <button onClick={next} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white transition-all active:scale-95" aria-label="Next">
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-orange-500 w-6" : "bg-white/40 w-2 hover:bg-white/70"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function MandateCard({ title, description, image, link }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative h-[300px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      {/* Title — always pinned at the same height from bottom */}
      <div className="absolute bottom-[46px] sm:bottom-[52px] left-0 right-0 px-5">
        <h3 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent leading-tight">{title}</h3>
      </div>
      {/* Description — fixed strip at the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[52px] px-5 flex items-start pt-1">
        <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">{description}</p>
      </div>
      <Link to={link} className="absolute inset-0" aria-label={title} />
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
    "Professional Programs":
      "https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudCUyMGNhcmVlciUyMGdyb3d0aHxlbnwxfHx8fDE3NzUyODk0ODZ8MA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "Corporate Training":
      "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTI4OTQ4Nnww&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "Executive Workshops":
      "https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwbWVldGluZyUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3NzUyODk0ODZ8MA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "Student Career Tracks":
      "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTI4OTQ4N3ww&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
    "University Partnership Programs":
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
          to="/advisory/case-studies"
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
