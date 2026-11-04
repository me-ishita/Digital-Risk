import { motion } from "motion/react";
import { useState } from "react";
import { WhatsAppChatWidget } from "@/app/components/WhatsAppChatWidget";
import { AIProgramRequestModal } from "@/app/components/AIProgramRequestModal";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  Compass,
  FileCheck2,
  GraduationCap,
  MapPin,
  Presentation,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
  UserRoundCheck,
} from "lucide-react";

const facts = [
  { icon: CalendarDays, label: "When", value: "4–8 January 2027" },
  { icon: Compass, label: "Fees", value: "₹10,00,000 + GST" },
  { icon: Users, label: "For", value: "Ages 12–17" },
  { icon: MapPin, label: "Where", value: "Imperial College London" },
];

const principles = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Build",
    description: "Understand how AI works, then shape a supervised agent or workflow around a real, testable task.",
    accent: "from-sky-400 to-blue-600",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Innovate",
    description: "Find a problem worth solving, test ideas with users and turn a prototype into a thoughtful venture.",
    accent: "from-orange-300 to-orange-600",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Secure",
    description: "Red-team an AI solution, document risks and improve safeguards for privacy, fairness and reliability.",
    accent: "from-violet-400 to-indigo-600",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Present",
    description: "Share a working demonstration, explain the evidence and limitations, and respond to expert feedback.",
    accent: "from-emerald-300 to-teal-600",
  },
];

const schedule = [
  {
    day: "Day 01",
    phase: "Build",
    title: "Where AI comes from and how it thinks",
    output: "House charter · Company identity · AI comparison · Opportunity brief",
    sessions: [
      ["09:00–09:20", "Arrival", "Registration, House allocation and welcome", "Safeguarding briefing, ground rules and a walkthrough of the week."],
      ["09:20–09:45", "Briefing", "The five-day Founders’ Challenge", "Introduce the Build → Innovate → Secure → Present journey and how the week builds on pre-programme tool skills."],
      ["09:45–10:30", "Lecture", "A short history of AI", "Explore symbolic AI, expert systems, deterministic rules, knowledge and inference through an interactive timeline."],
      ["10:30–10:45", "Break", "Refreshment break", "A short morning break."],
      ["10:45–11:30", "Lecture", "From statistics to generative AI", "Compare predictive machine learning, neural networks, deep learning, generative and multimodal models."],
      ["11:30–12:30", "Hands-on lab", "Same problem, two approaches", "Tackle one STEM problem using a decision tree or rule set and a generative model; compare accuracy, explainability, consistency and failure modes."],
      ["12:30–13:30", "Lunch", "Lunch break", "A one-hour lunch break."],
      ["13:30–14:15", "Workshop", "House induction and team culture", "Assign and rotate team roles; establish communication norms, seminar etiquette, debate and peer critique."],
      ["14:15–15:00", "Studio", "Found your company", "Create a fictional AI-first STEM company and choose a problem area such as climate, accessible learning or predictive maintenance."],
      ["15:00–15:15", "Break", "Refreshment break", "A short afternoon break."],
      ["15:15–16:00", "Workshop", "Customer, value and evidence", "Identify the user, the genuine problem and which parts of the task do—or do not—need AI."],
      ["16:00–16:30", "Reflection", "House stand-up and day close", "Share each team’s opportunity statement, gather facilitator feedback and preview Day 2."],
    ],
  },
  {
    day: "Day 02",
    phase: "Build → Innovate",
    title: "From models to intelligent agents",
    output: "Agent architecture · Prototype v1 · Test cases · Persona · Value proposition",
    sessions: [
      ["09:00–09:15", "Arrival", "Recap and daily briefing", "Review Day 1 with a short quiz and set goals for the day."],
      ["09:15–10:30", "Lecture", "From models to intelligent agents", "Explore agent goals, instructions, models, trusted-source retrieval (RAG), tool calls, memory, boundaries and human sign-off."],
      ["10:30–10:45", "Break", "Refreshment break", "A short morning break."],
      ["10:45–12:30", "Hands-on lab", "Build a supervised agent or workflow", "Adapt no-code and prompting skills to build a proof of concept that performs one defined, testable task; write initial test cases."],
      ["12:30–13:30", "Lunch", "Lunch break", "A one-hour lunch break."],
      ["13:30–14:15", "Lecture", "Find a problem worth solving", "Introduce user discovery, market gaps, customer segments, design thinking and product-market fit."],
      ["14:15–15:00", "Studio", "Simulated client brief and interviews", "Test assumptions through structured interviews or role-play and map the customer journey."],
      ["15:00–15:15", "Break", "Refreshment break", "A short afternoon break."],
      ["15:15–16:00", "Studio", "Persona, value proposition and requirements", "Define technical, user and commercial evidence; prioritise product requirements."],
      ["16:00–16:30", "Showcase", "House stand-ups and feedback", "Share two-minute updates, receive feedback and set Day 3 goals."],
    ],
  },
  {
    day: "Day 03",
    phase: "Innovate",
    title: "Turn a prototype into a venture",
    output: "Testable MVP/demo v2 · Model rationale · Business model · Evidence log · Pitch outline",
    sessions: [
      ["09:00–09:15", "Arrival", "Recap and daily briefing", "Review each team’s persona and first prototype; set goals for the day."],
      ["09:15–10:30", "Lecture", "AI for real-world impact in STEM", "Explore applications in life sciences, climate, robotics, data science and smart systems."],
      ["10:30–10:45", "Break", "Refreshment break", "A short morning break."],
      ["10:45–11:30", "Guest session (TBC)", "Academic or founder case study", "A proposed guest shares an AI application and answers student questions; subject to availability and approval."],
      ["11:30–12:30", "Workshop", "Model choice, data and evidence quality", "Consider model fit, appropriate datasets, multimodal input, evidence quality and technical feasibility."],
      ["12:30–13:30", "Lunch", "Lunch break", "A one-hour lunch break."],
      ["13:30–14:45", "Studio", "Improve your AI product (MVP v2)", "Refine the solution, run controlled peer trials, verify evidence and test the prototype."],
      ["14:45–15:00", "Break", "Refreshment break", "A short afternoon break."],
      ["15:00–15:45", "Lecture", "Business model workshop", "Build a business model canvas and consider customers, routes to market, costs, revenue, differentiation and commercialisation."],
      ["15:45–16:15", "Peer review", "Constructive House reviews", "Exchange feedback without rankings and draft a pitch outline."],
      ["16:15–16:30", "Reflection", "Daily check-out", "Capture learning, open questions and priorities for Day 4."],
    ],
  },
  {
    day: "Day 04",
    phase: "Secure",
    title: "Responsible AI by design",
    output: "AI risk register · Evaluation scorecard · Red-team results · Mitigation plan · Revised demo",
    sessions: [
      ["09:00–09:15", "Arrival", "Recap and daily briefing", "Review MVP v2 and introduce the Secure theme."],
      ["09:15–10:30", "Lecture", "Trustworthy AI: reliability and fairness", "Explore reliability, explainability, evaluation, bias, fairness and hallucinations."],
      ["10:30–10:45", "Break", "Refreshment break", "A short morning break."],
      ["10:45–11:30", "Lecture", "Data, IP, safety and cybersecurity", "Consider personal data, privacy, intellectual property, safety and how organisations assess AI risk."],
      ["11:30–12:30", "Workshop", "Demo versus product: data-to-decision map", "Map the data-to-decision pathway, identify where people must retain control and begin a risk register."],
      ["12:30–13:30", "Lunch", "Lunch break", "A one-hour lunch break."],
      ["13:30–13:45", "Briefing", "Resilience lab: safe-testing rules", "Set supervised red-team boundaries and use only synthetic or public data and approved tools."],
      ["13:45–15:00", "Hands-on lab", "Red-team simulated agents", "Test simulated systems for misleading inputs, hallucinations, prompt injection, inaccurate data, privacy edge cases and excessive permissions."],
      ["15:00–15:15", "Break", "Refreshment break", "A short afternoon break."],
      ["15:15–16:00", "Studio", "Fix and measure", "Document failure modes, revise controls and permissions, score outcomes and update the demo."],
      ["16:00–16:30", "Peer review", "Cross-House review and close", "Share peer and facilitator feedback and preview final-day readiness."],
    ],
  },
  {
    day: "Day 05",
    phase: "Secure → Present",
    title: "Assure, communicate and defend",
    output: "Final test log · Assurance note · Deployment note · Pitch/deck and demo · Reflection",
    sessions: [
      ["09:00–09:15", "Arrival", "Final-day briefing", "Review the running order, pitch format and team roles."],
      ["09:15–10:30", "Workshop", "Final testing and verification", "Retest the prototype, verify scientific and technical claims, and complete a final test log."],
      ["10:30–10:45", "Break", "Refreshment break", "A short morning break."],
      ["10:45–11:45", "Workshop", "Assurance and governance checklist", "Review intended use, data governance, safeguards, escalation, auditability, limitations and failure response; write an assurance note."],
      ["11:45–12:30", "Studio", "Launch decision and pitch rehearsal", "Decide what is ready, what stays in the lab and what evidence is missing; rehearse the pitch and demo."],
      ["12:30–13:30", "Lunch", "Lunch break", "A one-hour lunch break."],
      ["13:30–14:00", "Briefing", "Panel welcome and technology check", "Introduce the proposed panel, explain the format and check presentation equipment."],
      ["14:00–14:48", "Pitch forum", "Team pitches and live demonstrations", "Each team has a six-minute pitch and demo followed by panel questions; exact order and timing may be adjusted."],
      ["14:48–15:00", "Break", "Refreshment break", "A short afternoon break."],
      ["15:00–15:40", "Showcase", "Panel feedback", "A formative showcase—not a contest—with constructive feedback for teams and individual learners."],
      ["15:40–16:05", "Reflection", "Personal reflection and close", "Record what was learned and what to build next."],
      ["16:05–16:30", "Close", "Farewell", "The workbook proposes certificates, subject to formal authorisation."],
    ],
  },
];

const scheduleThemes = [
  { tab: "border-orange-200 bg-orange-50 text-orange-800", dot: "bg-orange-500", progress: "bg-orange-400", accent: "text-orange-300", header: "bg-[#c95b12]", border: "border-orange-200", time: "text-orange-700" },
  { tab: "border-blue-200 bg-blue-50 text-blue-800", dot: "bg-blue-600", progress: "bg-blue-500", accent: "text-sky-300", header: "bg-[#2855B5]", border: "border-blue-200", time: "text-blue-700" },
  { tab: "border-violet-200 bg-violet-50 text-violet-800", dot: "bg-violet-500", progress: "bg-violet-400", accent: "text-violet-300", header: "bg-[#6841b8]", border: "border-violet-200", time: "text-violet-700" },
  { tab: "border-emerald-200 bg-emerald-50 text-emerald-800", dot: "bg-emerald-600", progress: "bg-emerald-500", accent: "text-emerald-300", header: "bg-[#08784f]", border: "border-emerald-200", time: "text-emerald-700" },
  { tab: "border-rose-200 bg-rose-50 text-rose-800", dot: "bg-rose-500", progress: "bg-rose-400", accent: "text-rose-300", header: "bg-[#b83253]", border: "border-rose-200", time: "text-rose-700" },
];

const experienceImages = [
  {
    src: "/images/generation-z/young-learners.jpg",
    alt: "Young learners exploring AI together in a classroom",
    label: "Curiosity, made practical",
  },
];

const houseTeams = [
  { name: "Gryffindor", role: "Architect & Security Lead", image: "/images/generation-z/houses/gryffindor.png", accent: "border-rose-300", glow: "bg-rose-500/10", stripe: "bg-rose-700", text: "text-rose-800" },
  { name: "Slytherin", role: "Engineer & Innovation Lead", image: "/images/generation-z/houses/slytherin.png", accent: "border-emerald-300", glow: "bg-emerald-500/10", stripe: "bg-emerald-700", text: "text-emerald-900" },
  { name: "Hufflepuff", role: "Data / ML Lead & DevOps", image: "/images/generation-z/houses/hufflepuff.png", accent: "border-amber-300", glow: "bg-amber-500/10", stripe: "bg-amber-500", text: "text-amber-900" },
  { name: "Ravenclaw", role: "Research Lead & Product Designer", image: "/images/generation-z/houses/ravenclaw.png", accent: "border-sky-300", glow: "bg-sky-500/10", stripe: "bg-blue-800", text: "text-sky-900" },
];

export function AIForGenerationZ() {
  const [activeScheduleDay, setActiveScheduleDay] = useState(0);
  const [requestMode, setRequestMode] = useState<"register" | "brochure" | null>(null);
  const activeDay = schedule[activeScheduleDay];

  return (
    <main className="overflow-x-clip bg-white text-slate-950">
      <section className="relative isolate flex min-h-[670px] items-end overflow-hidden bg-slate-950 sm:min-h-[720px] lg:min-h-[calc(100svh-76px)]">
        <img
          src="/images/generation-z/imperial-campus-hero.jpg"
          alt="Imperial College London campus in South Kensington"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[48%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061326]/70 via-[#07172b]/40 to-[#07172b]/5" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061326]/80 via-[#061326]/10 to-transparent" />
        <div className="absolute -right-28 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]" />

        <div className="container mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-36 sm:px-8 sm:pb-16 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-14 lg:px-12 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-orange-300/60 bg-orange-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 shadow-[0_0_24px_rgba(249,115,22,0.14)] sm:text-xs">
                Flagship Academic Collaboration
              </span>
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-slate-950/35 px-3 py-2 backdrop-blur-md">
                <img src="/images/economic-times-et-mark.webp" alt="The Economic Times" className="h-7 w-7 rounded object-cover" />
                <span aria-hidden="true" className="h-5 w-px bg-white/35" />
                <img src="/images/imperial-white-wordmark.webp" alt="Imperial College London" className="h-5 w-24 object-contain" />
              </div>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-200 sm:text-sm">A London experience for young innovators</p>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[5.5rem]">
              AI for
              <span className="mt-2 block">Generation <span className="logo-shine">Z</span></span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white sm:text-2xl">
              Certification to <span className="text-orange-300">Build</span>, <span className="text-orange-300">Innovate</span> &amp; <span className="text-orange-300">Secure</span> with <span className="text-orange-300">AI</span>
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-lg">
              An exceptional opportunity for young innovators to explore AI, develop practical skills and experience learning at the prestigious Imperial College London campus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => setRequestMode("register")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-slate-950 shadow-[0_12px_35px_rgba(249,115,22,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(249,115,22,0.45)]">
                Register Now <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => setRequestMode("brochure")} className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/15 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/25">
                Download Brochure <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" />
      </section>

      <section aria-label="Programme details" className="sticky top-[60px] z-40 border-y border-slate-300 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.12)] sm:top-[76px]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-300 sm:grid-cols-5 sm:divide-y-0 sm:px-6 lg:px-12">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex min-h-[48px] items-center gap-2 px-3 py-2 sm:min-h-[68px] sm:gap-3 sm:px-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-orange-300/50 bg-orange-100 text-orange-700 sm:h-9 sm:w-9"><Icon className="h-4 w-4" /></span>
              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-[9px]">{label}</p>
              <p className="mt-0.5 whitespace-normal text-[11px] font-extrabold leading-tight text-slate-900 sm:text-sm">{value}</p>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => setRequestMode("brochure")} className="col-span-2 m-2 flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-orange-500/40 bg-orange-500/15 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-orange-900 transition hover:border-orange-500/60 hover:bg-orange-500/25 sm:col-span-1 sm:min-h-[52px] sm:px-2 sm:text-[10px] lg:text-xs">
            Download Brochure <ArrowDown className="h-4 w-4 shrink-0" />
          </button>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-700">Your child’s next chapter</p>
            <h2 className="text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl">Learn at <span className="text-blue-800">Imperial College London.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">Founded in 1907, Imperial is a leading university for science, engineering, medicine and business. The programme is planned for South Kensington, a working campus surrounded by London’s museums and cultural landmarks.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">The schedule and campus arrangements are subject to final institutional confirmation.</p>
          </div>
          <figure className="group relative overflow-hidden rounded-[26px] shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
            <img src="/images/generation-z/imperial-campus-profile.jpg" alt="Imperial College London campus in South Kensington" loading="lazy" decoding="async" className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.025] sm:h-[350px] lg:h-[390px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/95 px-4 py-2 text-sm font-bold text-slate-900 shadow-lg backdrop-blur">South Kensington · London</figcaption>
          </figure>
        </div>
        <div className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-2xl border border-[#c6d8ec] bg-gradient-to-r from-[#edf4fb] via-[#e5eff9] to-[#edf4fb] text-slate-900 shadow-[0_12px_34px_rgba(15,61,105,0.1)]">
          <div className="grid grid-cols-5 divide-x divide-[#c6d8ec]">
            {[
              ["#2", "QS World University Rankings 2027"],
              ["14", "Nobel Prize winners"],
              ["3", "Fields Medal winners"],
              ["£1.1B", "Research income"],
              ["#1", "Research quality"],
            ].map(([value, label]) => (
              <div key={label} className="flex min-w-0 flex-col items-center justify-center px-1.5 py-4 text-center sm:px-3 sm:py-5">
                <p className="text-lg font-black tracking-tight text-[#003e74] sm:text-3xl">{value}</p>
                <p className="mt-1.5 text-[8px] font-extrabold leading-tight text-slate-700 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 px-5 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-800">A new kind of classroom</p>
            <h2 className="text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl">The future belongs to those who <span className="text-blue-700">make it.</span></h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">AI is already changing how we learn, create and solve problems. This five-day experience gives young people space to understand the technology, explore its possibilities and turn their own ideas into something tangible.</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Set at Imperial College London, the programme brings together practical learning, fresh perspectives and the energy of a global academic environment.</p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <p className="text-sm font-semibold leading-relaxed text-slate-700">Designed for young innovators aged 12–17 who are curious about artificial intelligence.</p>
            </div>
          </div>

          <div className="relative h-[280px] overflow-hidden rounded-[26px] shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:h-[360px] lg:h-[410px]">
            {experienceImages.map((image, index) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group absolute inset-0 overflow-hidden"
              >
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 text-sm font-bold text-white sm:bottom-5 sm:left-5">{image.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-blue-100 bg-gradient-to-br from-[#edf4fb] via-[#f5f7fc] to-[#e7edf9] px-5 py-12 sm:px-8 sm:py-16">
        <img src="/images/generation-z/opportunities/imperial-campus-background.jpg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-45" />
        <div className="pointer-events-none absolute -left-40 top-16 -z-10 h-96 w-96 rounded-full bg-sky-200/35 blur-[100px]" />
        <div className="pointer-events-none absolute -right-36 bottom-0 -z-10 h-96 w-96 rounded-full bg-indigo-200/35 blur-[100px]" />
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-6xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-800">Why this programme matters</p>
            <h2 className="whitespace-normal text-3xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-4xl lg:whitespace-nowrap lg:text-[3.25rem]">Move beyond using AI. <span className="text-blue-700">Learn to shape it.</span></h2>
            <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed text-slate-800 sm:text-lg">Young people already use AI, but confident use takes more than prompts. This five-day experience makes AI understandable and helps learners build, test and explain ideas responsibly.</p>
          </header>

          <div className="relative mx-auto mt-6 grid max-w-7xl gap-5 lg:grid-cols-[230px_minmax(0,1fr)] lg:items-center lg:gap-6" aria-label="A D-shaped opportunity hub beside four programme outcomes">
            <div className="relative z-10 order-first mx-auto flex min-h-[190px] w-full max-w-[390px] flex-col items-center justify-center rounded-[120px] border border-white/75 bg-gradient-to-br from-[#081d58] via-[#123f91] to-[#315be3] px-8 text-center text-white shadow-[0_20px_55px_rgba(25,62,147,0.3)] ring-8 ring-blue-100/60 sm:min-h-[210px] lg:min-h-[390px] lg:max-w-none lg:rounded-l-2xl lg:rounded-r-[195px] lg:px-6">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10"><Users className="h-5 w-5" /></span>
              <span className="text-base font-black uppercase leading-tight tracking-[0.12em] sm:text-lg lg:text-xl"><span className="block">A</span><span className="block">Network</span><span className="block">of</span><span className="block">Opportunities</span></span>
              <span className="mt-3 text-[10px] font-medium text-blue-100">Learn · Build · Connect</span>
            </div>

            <div className="relative z-10 mx-auto grid w-full gap-4 sm:grid-cols-2 lg:max-w-[920px] lg:gap-4">
              {[
                { title: "Get Certified by World’s #2 University", focus: "Recognition", copy: "Recognition for completing the AI programme. Earned through a learning experience at a world-leading university.", image: "/images/generation-z/opportunities/imperial-certificate.png", alt: "Sample certificate for completing Build, Innovate and Secure with AI at Imperial College London", fit: "object-contain bg-white" },
                { title: "Understand the technology", focus: "AI literacy", copy: "Explore rules, machine learning, generative models and AI agents. Compare where each approach is most useful.", image: "/images/generation-z/opportunities/technology.jpg", alt: "AI dashboards and data visualisations on a research workstation", fit: "object-cover" },
                { title: "Turn ideas into prototypes", focus: "Prototyping", copy: "Start with a real STEM problem. Test an early idea with users and improve it with evidence.", image: "/images/generation-z/opportunities/prototype.jpg", alt: "A learner develops and studies a neural network at a workstation", fit: "object-cover" },
                { title: "Build with responsibility", focus: "Responsible AI", copy: "Identify failure modes and risks to privacy, fairness and security. Explain how your idea should be used responsibly.", image: "/images/generation-z/opportunities/teamwork.jpg", alt: "A diverse student team collaborates on a technology project", fit: "object-cover" },
              ].map((item, index) => (
                <article key={item.title} className="group relative z-10 isolate grid min-h-[165px] overflow-hidden rounded-[20px] border border-white/80 bg-white shadow-[0_10px_26px_rgba(20,45,90,0.1)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(20,45,90,0.16)] sm:grid-cols-[95px_1fr] lg:min-h-[180px] lg:grid-cols-[145px_1fr]">
                  <div className="relative min-h-32 overflow-hidden bg-slate-100 sm:min-h-full">
                    <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.04] ${item.fit}`} />
                  </div>
                  <div className="flex flex-col justify-center p-3 sm:p-3.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">0{index + 1} / {item.focus}</span>
                    <h3 className="mt-2 text-base font-extrabold leading-snug text-slate-950 lg:text-lg">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.copy}</p>
                    {index === 0 && <p className="mt-2 text-[9px] leading-relaxed text-slate-400">Sample certificate; final credential details subject to confirmation.</p>}
                  </div>
                  <span aria-hidden="true" className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full border-[18px] border-blue-50 transition duration-500 group-hover:scale-110" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="core-framework" className="relative isolate overflow-hidden bg-[#faf6eb] px-5 py-12 sm:px-8 sm:py-14">
        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-amber-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-[110px]" />
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-blue-800">Core framework</p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">Build, Innovate &amp; Secure with AI</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">One real-world challenge, carried through four connected pillars over five days. You finish with something you built, tested, strengthened and confidently presented.</p>
          </header>

          <div aria-hidden="true" className="mb-4 hidden items-center justify-center px-[18%] md:flex">
            {[
              ["1", "bg-amber-500", "bg-amber-500"],
              ["2", "bg-blue-700", "bg-blue-700"],
              ["3", "bg-emerald-600", "bg-emerald-600"],
              ["4", "bg-violet-600", "bg-violet-600"],
            ].map(([number, dot, line], index) => (
              <div key={number} className="flex flex-1 items-center last:flex-none">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white shadow-md ${dot}`}>{number}</span>
                {index < 3 && <span className={`h-0.5 flex-1 ${line}`} />}
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { phase: "Phase 1", days: "Days 1–2", title: "Build with AI", subtitle: "Build intelligent systems", image: "/images/generation-z/framework/build.jpg", alt: "AI builder developing a connected system at a workstation", icon: BrainCircuit, color: "amber", body: "Explore models, agents, data and the logic behind intelligent tools. Shape a supervised system around a real task, then test what it can and cannot do.", learn: "Systems thinking, agent design, data foundations and evaluation.", outcome: "Design brief, system map & prototype v1" },
              { phase: "Phase 2", days: "Days 2–3", title: "Innovate with AI", subtitle: "From idea to real innovation", image: "/images/generation-z/framework/innovate.jpg", alt: "A diverse team collaborates on early product ideas", icon: Sparkles, color: "blue", body: "Find a problem worth solving. Learn from users, test assumptions and turn the strongest idea into a useful prototype with a clear value proposition.", learn: "User discovery, creative problem-solving, product thinking and value.", outcome: "Tested prototype v2 & innovation case" },
              { phase: "Phase 3", days: "Days 3–4", title: "Secure with AI", subtitle: "Design trustworthy AI, then challenge it", image: "/images/generation-z/framework/secure.jpg", alt: "A security analyst reviews AI risk and threat dashboards", icon: ShieldCheck, color: "emerald", body: "Put your own system to the test. Identify failure modes, privacy and fairness risks, then improve the safeguards and explain the trade-offs.", learn: "Cybersecurity, privacy, explainability, evaluation and safety by design.", outcome: "Threat model, risk register & safeguards" },
              { phase: "Phase 4", days: "Day 5", title: "Present with confidence", subtitle: "Make the work clear and compelling", image: "/images/generation-z/framework/present.jpg", alt: "A young founder presents a project to a review panel", icon: GraduationCap, color: "violet", body: "Bring the journey together in a live demonstration. Tell the story behind your solution, show the evidence, own its limitations and answer thoughtful questions.", learn: "Clear communication, evidence-led storytelling, reflection and Q&A.", outcome: "Final demo, pitch & personal reflection" },
            ].map((item) => {
              const Icon = item.icon;
              const palette = {
                amber: { border: "border-amber-500", text: "text-amber-600", soft: "bg-amber-100", deliverable: "bg-amber-100/80", glow: "group-hover:shadow-amber-900/10" },
                blue: { border: "border-blue-700", text: "text-blue-700", soft: "bg-indigo-100", deliverable: "bg-indigo-100", glow: "group-hover:shadow-blue-900/10" },
                emerald: { border: "border-emerald-600", text: "text-emerald-700", soft: "bg-emerald-100", deliverable: "bg-emerald-100", glow: "group-hover:shadow-emerald-900/10" },
                violet: { border: "border-violet-600", text: "text-violet-700", soft: "bg-violet-100", deliverable: "bg-violet-100", glow: "group-hover:shadow-violet-900/10" },
              }[item.color];
              return (
                <article key={item.phase} className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${palette.border} bg-white p-2.5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(15,23,42,0.13)] ${palette.glow}`}>
                  <div className="relative h-36 overflow-hidden rounded-xl bg-slate-200">
                    <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-slate-950/75 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">{item.days}</span>
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/45 to-transparent" />
                    <span className={`absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-2xl ${palette.soft} ${palette.text} shadow-lg ring-4 ring-white`}><Icon className="h-5 w-5" /></span>
                  </div>
                  <div className="flex flex-1 flex-col px-1.5 pb-1.5 pt-3">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${palette.text}`}>{item.phase}</p>
                    <h3 className={`mt-1 text-[1.35rem] font-black leading-tight ${palette.text}`}>{item.title}</h3>
                    <h4 className="mt-1.5 text-sm font-extrabold text-slate-950">{item.subtitle}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{item.body}</p>
                    <div className="my-3 border-t border-slate-200" />
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">What you learn</p>
                    <p className="mt-2 min-h-[3.25rem] text-xs leading-relaxed text-slate-600">{item.learn}</p>
                    <div className={`mt-3 rounded-xl px-3 py-2.5 text-xs font-bold leading-relaxed text-slate-900 ${palette.deliverable}`}>{item.outcome}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="five-day-plan" className="scroll-mt-24 bg-[#F7F9FC] px-5 py-9 sm:px-8 sm:py-11">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-5 max-w-5xl text-center">
            <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-blue-800">The five-day journey</p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-[#102541] sm:text-4xl">Five Days. One Transformative AI Journey.</h2>
            <p className="mx-auto mt-2 max-w-5xl text-sm leading-relaxed text-slate-600 sm:text-base">From understanding AI to building, securing and presenting real-world solutions.</p>
          </header>

          <div className="mb-3 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            <div role="tablist" aria-label="Select a programme day" className="flex min-w-0 gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
              {schedule.map((item, index) => (
                <button key={item.day} id={`schedule-tab-${index}`} type="button" role="tab" aria-selected={activeScheduleDay === index} aria-controls="schedule-day-panel" onClick={() => setActiveScheduleDay(index)} className={`relative min-w-[145px] flex-1 overflow-hidden rounded-xl border px-3 py-2 text-left transition duration-200 md:min-w-0 md:px-3.5 ${activeScheduleDay === index ? "border-[#102541] bg-[#102541] text-white shadow-md shadow-slate-900/15" : `${scheduleThemes[index].tab} hover:-translate-y-0.5 hover:shadow-sm`}`}>
                  <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${scheduleThemes[index].dot}`} />
                  <span className="flex items-center gap-2">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${activeScheduleDay === index ? scheduleThemes[index].dot : scheduleThemes[index].dot}`} />
                    <span className={`text-[9px] font-black uppercase tracking-[0.14em] ${activeScheduleDay === index ? scheduleThemes[index].accent : "opacity-75"}`}>Day 0{index + 1}</span>
                  </span>
                  <span className="mt-1 block whitespace-nowrap pl-4 text-[11px] font-extrabold uppercase tracking-[0.06em]">{item.phase}</span>
                </button>
              ))}
            </div>
            <div aria-hidden="true" className="mt-2 flex gap-1.5 px-1">
              {schedule.map((item, index) => <span key={item.day} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${index < activeScheduleDay ? scheduleThemes[index].progress : index === activeScheduleDay ? scheduleThemes[index].dot : "bg-slate-200"}`} />)}
            </div>
          </div>

          <motion.article key={activeScheduleDay} id="schedule-day-panel" role="tabpanel" aria-labelledby={`schedule-tab-${activeScheduleDay}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: "easeOut" }} className={`overflow-hidden rounded-2xl border bg-white shadow-[0_12px_34px_rgba(16,37,65,0.08)] ${scheduleThemes[activeScheduleDay].border}`}>
            <header className={`relative overflow-hidden px-4 py-3.5 pl-5 text-white sm:px-5 sm:py-4 sm:pl-6 ${scheduleThemes[activeScheduleDay].header}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/80">{activeDay.day} <span className="mx-1 text-white/50">/</span> {activeDay.phase}</p>
                  <h3 className="mt-1.5 text-xl font-black uppercase leading-tight tracking-[0.02em] sm:text-2xl">{activeDay.title}</h3>
                </div>
                <span className="rounded-lg border border-white/15 bg-white/[0.07] px-2.5 py-1.5 text-[9px] font-bold tracking-[0.12em] text-blue-100">09:00–16:30</span>
              </div>
              <p className="mt-2.5 border-t border-white/10 pt-2.5 text-[11px] leading-relaxed text-slate-300"><span className="mr-2 font-black uppercase tracking-[0.12em] text-blue-200">Daily learning outcomes</span>{activeDay.output}</p>
            </header>

            <div className="divide-y divide-slate-100 px-4 sm:px-5">
              {activeDay.sessions.map(([time, type, title, copy]) => {
                const badgeTone = type === "Lecture" ? "bg-blue-50 text-blue-700" : type === "Hands-on lab" ? "bg-indigo-50 text-indigo-700" : type === "Workshop" || type === "Studio" ? "bg-amber-50 text-amber-800" : type === "Briefing" ? "bg-orange-50 text-orange-800" : type === "Break" || type === "Lunch" ? "bg-slate-100 text-slate-500" : type === "Showcase" || type === "Pitch forum" ? "bg-emerald-50 text-emerald-700" : type === "Peer review" ? "bg-cyan-50 text-cyan-800" : type === "Guest session (TBC)" ? "bg-violet-50 text-violet-700" : "bg-slate-100 text-slate-600";
                return (
                  <div key={`${time}-${title}`} className="grid grid-cols-[78px_minmax(0,1fr)] gap-x-2.5 gap-y-1 py-2.5 sm:grid-cols-[96px_116px_minmax(0,1fr)] sm:gap-x-3 sm:py-2.5">
                    <p className={`row-span-2 pt-0.5 text-[11px] font-extrabold tabular-nums sm:row-span-1 ${scheduleThemes[activeScheduleDay].time}`}>{time}</p>
                    <span className={`col-start-1 row-start-2 w-fit self-start rounded-md px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.1em] sm:col-start-2 sm:row-start-1 sm:text-[9px] ${badgeTone}`}>{type}</span>
                    <div className="col-start-2 row-span-2 sm:col-start-3 sm:row-span-1">
                      <h4 className="text-sm font-black uppercase leading-snug tracking-[0.015em] text-[#102541] sm:text-[15px]">{title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.article>

          <p className="mt-2 text-[10px] leading-relaxed text-slate-500">Indicative schedule: session details, venue arrangements and programme elements remain subject to final institutional confirmation.</p>
        </div>
      </section>

      <section className="bg-[#edf2f8] px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-6 max-w-4xl text-center">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-800">Programme design</p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#102541] sm:text-5xl">How the programme works</h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">Teams turn ideas into tested AI prototypes, then learn to explain their value and manage their risks.</p>
          </header>
          <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.9fr)]">
            <div>
              <div className="mb-3 rounded-xl border border-blue-200 bg-[#102541] px-4 py-3 text-center text-white shadow-sm">
                <h3 className="text-lg font-black uppercase tracking-[0.14em] sm:text-xl">Key Takeaways</h3>
                <p className="mt-1 text-[11px] text-blue-100">What each team works towards by the end of the week</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  [
                    { icon: Bot, title: "Agent backbone", copy: "Multi-step reasoning, tool use and memory, supporting a working AI prototype." },
                    { icon: ChartNoAxesCombined, title: "Evaluation harness", copy: "A test set that measures how well the agent performs." },
                    { icon: Rocket, title: "Deployed and green", copy: "A passing build pipeline and a live, deployed application." },
                    { icon: UserRoundCheck, title: "User-validated feature", copy: "At least one feature improved through structured user testing." },
                  ],
                  [
                    { icon: ShieldAlert, title: "Red-team findings, fixed", copy: "Issues are found, logged and addressed before the final demo; learners prepare a security audit and release checklist." },
                    { icon: FileCheck2, title: "Governance documents", copy: "A model card, risk assessment and release checklist." },
                    { icon: Presentation, title: "Recorded live demo", copy: "A demonstration the team can present and explain, with time for reflection and expert feedback." },
                    { icon: GraduationCap, title: "Portfolio-ready evidence", copy: "Evidence of a working prototype and how it was tested—not just a slide deck." },
                  ],
                ].map((group, groupIndex) => (
                  <article key={groupIndex} className={"rounded-xl border px-4 shadow-sm " + (groupIndex === 0 ? "border-orange-200 bg-[#fffaf3]" : "border-violet-200 bg-[#f8f7ff]")}>
                    {group.map(({ icon: Icon, title, copy }, itemIndex) => (
                      <div key={title} className={"flex gap-3 py-2.5 " + (itemIndex < group.length - 1 ? "border-b border-slate-200/70" : "")}>
                        <span className={"mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg " + (groupIndex === 0 ? "bg-orange-100 text-orange-700" : "bg-violet-100 text-violet-700")}><Icon className="h-4 w-4" /></span>
                        <div className="min-w-0"><h4 className="text-[13px] font-extrabold text-[#102541]">{title}</h4><p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">{copy}</p></div>
                      </div>
                    ))}
                  </article>
                ))}
              </div>
            </div>
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <header className="flex items-center justify-between gap-3 bg-[#102541] px-4 py-3.5 text-white">
                <div><h3 className="text-base font-black uppercase tracking-[0.08em]">Assessment &amp; Feedback</h3><p className="mt-0.5 text-[10px] text-blue-100">Four pillars, weighted to guide feedback</p></div>
                <span className="shrink-0 rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-orange-200">Indicative</span>
              </header>
              <div className="p-3.5">
                <p className="mb-2 text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">Indicative assessment weighting</p>
                {[
                  { name: "Build", percent: 30, bar: "bg-blue-600", tone: "bg-blue-50", copy: "Architecture, completeness, readiness and code quality." },
                  { name: "Innovate", percent: 25, bar: "bg-amber-500", tone: "bg-amber-50", copy: "Problem solving, user validation and feature quality." },
                  { name: "Secure", percent: 25, bar: "bg-emerald-600", tone: "bg-emerald-50", copy: "Threat identification, mitigation and governance." },
                  { name: "Present", percent: 20, bar: "bg-violet-600", tone: "bg-violet-50", copy: "Demo quality, technical explanation, reflection and peer feedback." },
                ].map((item, index, list) => (
                  <div key={item.name} className={"grid grid-cols-[90px_minmax(0,1fr)] items-center gap-x-3 gap-y-1.5 rounded-lg px-2.5 py-2.5 " + item.tone + (index < list.length - 1 ? " mb-2" : "")}>
                    <div className="flex items-center justify-between gap-2 text-[11px] font-extrabold text-[#102541]"><span>{item.name}</span><span>{item.percent}%</span></div>
                    <p className="text-[10px] leading-snug text-slate-700">{item.copy}</p>
                    <div className="col-span-2 h-1.5 overflow-hidden rounded-full bg-white/80"><span className={"block h-full rounded-full " + item.bar} style={{ width: item.percent + "%" }} /></div>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-slate-500">Capstone requirements, assessment weightings, staffing and showcase arrangements are indicative and subject to final programme approval.</p>
        </div>
      </section>

      <section className="bg-[#071426] px-5 py-14 text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-7 max-w-3xl text-center">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-orange-300">Find your crew</p>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">The House System</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">Four teams. One big idea. Take on a role, swap perspectives and build something together.</p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {houseTeams.map((house) => (
              <article key={house.name} className={"group relative overflow-hidden rounded-2xl border " + house.accent + " bg-white p-4 text-center text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"}>
                <div className={"pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full " + house.glow + " blur-2xl transition group-hover:scale-125"} />
                <div className="relative mx-auto mb-2 flex h-28 items-center justify-center rounded-xl bg-slate-50/80"><img src={house.image} alt={house.name + " house crest"} loading="lazy" decoding="async" className="h-[104px] w-[90px] object-contain transition duration-500 group-hover:scale-105" /></div>
                <p className={"relative text-lg font-black uppercase tracking-[0.12em] " + house.text}>{house.name}</p>
                <p className="relative mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Core role</p>
                <p className="relative mt-1 min-h-10 text-xs font-semibold leading-snug text-slate-700">{house.role}</p>
                <div className={"absolute inset-x-0 bottom-0 h-1 " + house.stripe} />
              </article>
            ))}
          </div>
          <p className="mt-4 text-[10px] italic leading-relaxed text-slate-400">Team roles rotate through architecture, engineering, data / ML, DevOps, security, product and research. Final team allocations are confirmed with programme arrangements.</p>
        </div>
      </section>

      <section aria-label="Programme fee and inclusions" className="bg-[#f7f3e9] px-5 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <header className="mb-6 text-center">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-blue-800">Fees &amp; inclusions</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Programme fee</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">A carefully curated, all-inclusive London learning experience for one cohort.</p>
          </header>
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(22,25,80,0.12)] ring-1 ring-slate-200/70 lg:grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative isolate overflow-hidden bg-[#1606d9] p-6 text-white sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute -bottom-36 -left-28 -z-10 h-80 w-80 rounded-full border-[28px] border-white/10" />
              <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-blue-400/20 blur-2xl" />
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-100">Total programme fee</p>
              <p className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">₹10,00,000 <span className="text-lg font-bold">+ GST</span></p>
              <p className="mt-3 text-sm font-semibold text-blue-100">Per student · all-inclusive (excluding airfare, visa &amp; insurance)</p>
              <div className="my-5 h-px bg-white/20" />
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {["Cohort of 25 students", "4–8 January 2027", "South Kensington, London"].map((tag) => <span key={tag} className="rounded-full border border-white/30 bg-white/5 px-3.5 py-2">{tag}</span>)}
              </div>
              <div className="mt-6 flex flex-col gap-2.5">
                <button type="button" onClick={() => setRequestMode("register")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-black text-blue-800 transition hover:bg-blue-50">Register Now <ArrowRight className="h-4 w-4" /></button>
                <button type="button" onClick={() => setRequestMode("brochure")} className="inline-flex items-center justify-center rounded-full border border-white/45 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Download Brochure</button>
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-7 lg:p-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-950">Included</h3>
                <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {[
                    "Imperial College London academic tuition",
                    "Residential accommodation in central London",
                    "Daily meals and snacks",
                    "All London local transport",
                    "Lab tools, software and prototyping hardware",
                    "Certificate and individual feedback",
                    "24/7 pastoral supervision",
                  ].map((item) => <div key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-slate-800"><Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />{item}</div>)}
                </div>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-800">Not included</p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                  {["International return flights", "UK Standard Visitor visa", "Travel & medical insurance (mandatory)", "Personal expenses"].map((item) => <span key={item} className="rounded-full bg-slate-100 px-3.5 py-2"><span className="mr-2 text-slate-400">×</span>{item}</span>)}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-[10px] leading-relaxed text-slate-500">Fee and inclusions are shown as programme information and remain subject to final confirmation.</p>
        </div>
      </section>

      <section aria-label="Programme eligibility and parent information" className="bg-[#edf2fb] px-5 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-blue-800">Programme eligibility</p>
              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">Designed for young innovators.</h2>
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm">
                <span className="text-5xl font-black tracking-tight text-blue-800 sm:text-6xl">25</span>
                <span className="text-sm font-black uppercase leading-snug tracking-wide text-slate-900">Curious minds.<br />One cohort.</span>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600">A curated cohort of 25 students from across India, preparing to lead in the era of artificial intelligence—selected for curiosity and ambition, not marks alone.</p>
              <button type="button" onClick={() => setRequestMode("register")} className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-900">Register Now <ArrowRight className="h-4 w-4" /></button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { number: "01", title: "Ages 12–17", copy: "Currently enrolled in a school in India across CBSE, ICSE, IB, Cambridge (A-Levels / IGCSE), or State Boards.", tone: "bg-[#e9e4f7] text-indigo-800" },
                { number: "02", title: "Coding helpful, not required", copy: "Prior coding is useful but not mandatory. Teams deliberately balance hardware engineers, coders, product leads and cybersecurity auditors.", tone: "bg-[#fff0c9] text-amber-700" },
                { number: "03", title: "A real interest in STEM", copy: "For students aiming toward Computer Science, Engineering, Robotics or Technology Entrepreneurship at leading global institutions.", tone: "bg-[#d9eadb] text-emerald-800" },
                { number: "04", title: "Valid Indian passport", copy: "Passport must be valid through July 2027. Official UK visa invitation and enrolment letter are provided on seat confirmation.", tone: "bg-[#dce6fb] text-blue-800" },
              ].map((item) => <article key={item.number} className={`relative min-h-[160px] overflow-hidden rounded-2xl p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${item.tone}`}><span className="text-2xl font-black">{item.number}</span><h3 className="mt-2 text-base font-extrabold text-slate-950">{item.title}</h3><p className="mt-1.5 text-xs leading-relaxed text-slate-700">{item.copy}</p><span aria-hidden="true" className="absolute -bottom-8 -right-8 h-24 w-24 rotate-45 bg-white/30" /></article>)}
            </div>
          </div>
          <aside className="mt-8 rounded-2xl border border-blue-200/80 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.07)] sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Users className="h-5 w-5" /></span>
              <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">For parents</p><h3 className="mt-1 text-2xl font-bold text-slate-950">Experience Imperial alongside your child</h3></div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Accompany your child and create memorable moments together during this once-in-a-lifetime learning experience.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Accommodation", "Stay arrangements for students and accompanying parents."],
                ["Programme meals", "Breakfast and lunch are provided during programme days."],
                ["Programme supervision", "Our team oversees students during scheduled classes and programme activities."],
                ["Travel & medical insurance", "Travel and medical insurance must be arranged for both the student and accompanying parent."],
              ].map(([title, copy]) => <div key={title} className="flex gap-3 border-t border-slate-100 pt-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800"><Check className="h-4 w-4" /></span><div><h4 className="text-sm font-extrabold text-slate-900">{title}</h4><p className="mt-1 text-xs leading-relaxed text-slate-600">{copy}</p></div></div>)}
            </div>
          </aside>
          <p className="mt-3 text-[10px] leading-relaxed text-slate-500">Eligibility, travel requirements and parent arrangements are subject to programme and visa confirmation.</p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-800">Your next step</p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">Ready to build what’s next?</h2>
            
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
            <details className="group py-5" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">Who is the programme for?<span className="text-xl text-blue-800 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">The experience is designed for young innovators aged 12–17 who are curious about artificial intelligence.</p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">When and where does it take place?<span className="text-xl text-orange-600 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">The in-person experience is scheduled for 4–8 January 2027 at Imperial College London in London, UK.</p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">How do I enrol?<span className="text-xl text-orange-600 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">Select <strong>Register Now</strong> and complete the details form. Our programme team will contact you within 24 hours; if you have a question, you can chat with us on WhatsApp.</p>
            </details>
          </div>
        </div>
      </section>
      <WhatsAppChatWidget />
      {requestMode && <AIProgramRequestModal mode={requestMode} onClose={() => setRequestMode(null)} />}
    </main>
  );
}
