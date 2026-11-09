import { ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, BrainCircuit, Building2, Compass, Lightbulb, Mail, Network, Presentation, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { AdvisorSlideshow } from "./academy/AcademyHome";
import "./Collaboration.css";

const opportunities = [
  { title: "Expert-led guidance", text: "Learn with guidance from experienced academics, technical specialists and industry professionals.", image: "/images/Imperial/Expert-led guidance.jpeg", icon: BookOpen },
  { title: "Campus learning experience", text: "An opportunity to experience the Imperial campus through programme activities, where confirmed.", image: "/images/Imperial/Campus learning experience.jpeg", icon: Building2 },
  { title: "Exposure to innovation spaces", text: "Discover how research and emerging technologies are explored in specialist learning and laboratory environments, subject to access arrangements.", image: "/images/Imperial/Exposure to innovation spaces.jpeg", icon: Lightbulb },
  { title: "Project-based learning", text: "Apply your learning to practical challenges and develop a project you can demonstrate.", image: "/images/Imperial/Project-based learning.jpeg", icon: Workflow },
  { title: "Certificate of completion", text: "Receive formal recognition of programme completion, with the issuing institution and certificate status clearly stated.", image: "/images/Imperial/Certificate of Competion.png", icon: Award },
  { title: "A wider network", text: "Connect with fellow learners, mentors and professionals through programme activities.", image: "/images/Imperial/A wider network.jpeg", icon: Network },
];
const steps = [
  ["01", "Discover", "Understand AI, its possibilities and its impact on the world.", Compass],
  ["02", "Learn", "Build core knowledge with expert guidance and structured sessions.", BookOpen],
  ["03", "Create", "Work through practical exercises and develop an AI-based project.", Sparkles],
  ["04", "Present", "Demonstrate your work, explain your thinking and showcase what you have learned.", Presentation],
];
const stemPillars = [
  { initial: "S", title: "Science", detail: "Discovery, research and experimentation." },
  { initial: "T", title: "Technology", detail: "Emerging technologies shaping the future." },
  { initial: "E", title: "Engineering", detail: "Design, creativity and practical solutions." },
  { initial: "M", title: "Mathematics", detail: "Analytical thinking and problem-solving." },
];
export function Collaboration() {
  return <div className="collaboration-page bg-slate-950 text-white">
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 py-32 sm:px-10 lg:min-h-[860px] lg:px-16">
      <video className="absolute inset-0 -z-20 h-full w-full object-cover" src="/images/Imperial/Imperial Drone Shot.mp4" autoPlay muted loop playsInline poster="/images/Imperial/Imperial-College-London-Campus.jpg" aria-label="Aerial view of Imperial College London" />
      <div className="absolute inset-0 -z-10 bg-slate-950/20" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,23,.38)_0%,rgba(2,6,23,.18)_28%,rgba(2,6,23,.12)_58%,rgba(2,6,23,.48)_100%)]" />
      <div className="mx-auto w-full max-w-7xl text-center">
        <p className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-orange-300"><span className="h-px w-10 bg-orange-400" />Digital Risk Labs · Academic collaboration<span className="h-px w-10 bg-orange-400" /></p>
        <h1 className="mx-auto max-w-[1500px] text-[clamp(1.7rem,4.6vw,4.25rem)] font-black leading-[0.98] tracking-[-0.045em] text-white lg:whitespace-nowrap">Inspiring the Minds Behind What’s Next.<span className="logo-shine mt-3 block text-[clamp(1.1rem,2.7vw,2.25rem)] leading-tight tracking-[-0.02em] lg:whitespace-nowrap">Where Academic Excellence Meets Real-World Innovation.</span></h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">Bringing together the academic environment of Imperial College London and the innovation-driven approach of Digital Risk Labs to equip the next generation with the knowledge, skills and confidence to shape tomorrow.</p>
        <a href="#foundations" className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-950/40 transition hover:bg-orange-400">Explore Now <ArrowDown className="h-4 w-4" /></a>
        <div className="mt-12 flex items-center justify-center gap-6 border-t border-white/25 pt-6">
          <span className="text-xs uppercase tracking-[.22em] text-slate-300">In collaboration with</span>
          <img src="/images/imperial-white-wordmark.webp" alt="Imperial College London" className="h-7 w-auto object-contain" />
        </div>
      </div>
    </section>

    <section id="foundations" className="collab-trust px-5 py-16 sm:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl text-center"><p className="collab-eyebrow">Trust &amp; Credibility</p><h2 className="collab-section-title">An ambitious learning experience.<br /><em>Built on credible foundations.</em></h2><p className="collab-section-copy mx-auto mt-4 max-w-3xl">We believe the next generation deserves more than access to technology. They deserve the guidance, learning environment and practical opportunities to use it meaningfully. This programme is being developed around that ambition, bringing together digital education, academic expertise and hands-on application.</p>
        <div className="collab-stem-strip"><div className="collab-stem-intro"><p className="collab-stem-eyebrow">A World of Knowledge Across STEM</p><p>Through our collaboration with Imperial College London, via Digital Risk Labs, students can explore diverse STEM disciplines, gain insights from experts and discover how knowledge translates into real-world innovation.</p></div><div className="collab-stem-pillars">{stemPillars.map(({initial,title,detail})=><article key={initial}><b>{initial}</b><h4>{title}</h4><p>{detail}</p></article>)}</div></div>
        <figure className="collab-glance relative mx-auto mt-5 max-w-6xl"><img src="/images/Imperial/imperial-glance.png" alt="Imperial College London at a glance" className="w-full" /></figure>
      </div>
    </section>

    <section className="collab-opportunities px-5 py-16 sm:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl"><div className="collab-section-heading mb-8 text-center"><p className="collab-eyebrow">Student Opportunities</p><h2 className="collab-section-title">More than learning.<br /><em>An opportunity to experience what comes next.</em></h2><p className="collab-section-copy mx-auto mt-4 max-w-3xl">Go beyond watching lessons or experimenting with AI tools. Discover opportunities to learn, create and demonstrate what you can do.</p></div>
        <div className="collab-opportunity-grid grid gap-x-9 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{opportunities.map((item, i) => <article key={item.title} className="collab-opportunity group"><div className="collab-opportunity-image relative mb-4 h-52 overflow-hidden"><img src={item.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" /><span className="absolute bottom-4 left-4 text-sm font-bold tracking-[.18em] text-white/85">0{i + 1}</span><item.icon className="absolute bottom-4 right-4 h-5 w-5 text-amber-300" /></div><span className="collab-opportunity-icon"><item.icon className="h-5 w-5" /></span><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 leading-6">{item.text}</p></article>)}</div>
      </div>
    </section>

    <section className="collab-journey px-5 py-16 sm:px-10 lg:py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
      <div className="collab-journey-visual relative"><div className="collab-journey-image relative overflow-hidden"><img src="/images/Imperial/The learning experience.jpeg" alt="Students learning together" className="h-full w-full object-cover" /></div><div className="collab-journey-chip"><Sparkles className="h-5 w-5" />Curiosity <span>→</span> Capability</div></div>
      <div className="collab-journey-copy"><p className="collab-eyebrow">The Learning Experience</p><h2 className="collab-section-title mt-3">From curiosity <em>to capability.</em></h2><div className="collab-ornament"><i /><b /><i /></div><p className="collab-section-copy mb-6 max-w-xl">A structured learning journey designed to turn interest in AI into practical understanding, creative problem-solving and the confidence to present your ideas.</p><div className="collab-timeline">{steps.map(([n, title, body, Icon]) => <article key={n} className="collab-step"><span className="collab-step-node"><Icon className="h-5 w-5" /></span><div><small>STEP {n}</small><h3>{title}</h3><p>{body}</p></div></article>)}</div></div>
    </div></section>

    <section className="collab-featured px-5 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-7xl"><div className="collab-section-heading mb-8 text-center"><p className="collab-eyebrow">Featured Programme</p><h2 className="collab-section-title">Discover What’s Next <em>in Learning</em></h2><p className="collab-section-copy mx-auto mt-4 max-w-3xl">Step into learning experiences that go beyond traditional classrooms. Discover programmes that encourage you to explore emerging technologies, turn ideas into possibilities and build the confidence to contribute to tomorrow’s world.</p></div>
      <article className="collab-ticket relative mx-auto grid max-w-5xl overflow-hidden"><div className="collab-ticket-art relative min-h-64"><img src="/images/generation-z/ai-global-intelligence.png" alt="A glowing AI network globe illustrating machine learning, generative AI, robotics and cybersecurity" className="absolute inset-0 h-full w-full object-cover" /><span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[.2em] text-amber-200">Imperial College London × Digital Risk Labs</span></div><div className="collab-ticket-content relative px-7 py-8 sm:px-10 sm:py-10"><span className="collab-enrolment-badge"><i/>Enrolment Open</span><h3 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">AI for<br />Generation <span className="logo-shine">Z</span></h3><p className="mt-4 max-w-lg leading-7">Build, innovate and secure with AI. A hands-on programme for young people ready to explore what they can create with emerging technology.</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider"><span>Build</span><span>Innovate</span><span>Secure</span><span>Present</span></div><Link to="/programmes/ai-for-generation-z" className="collab-enrol-button mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold">Explore and Enrol <ArrowUpRight className="h-4 w-4" /></Link></div></article>
    </div></section>

    <section className="collab-campus px-5 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-7xl"><div className="collab-section-heading mb-8 text-center"><p className="collab-eyebrow">The Campus Experience</p><h2 className="collab-section-title">Step inside a world-class campus.<br /><em>Where ideas find their space.</em></h2><p className="collab-section-copy mx-auto mt-4 max-w-3xl">A glimpse of the learning environments, collaborative spaces and heritage architecture that define Imperial College London.</p></div><div className="collab-campus-gallery grid gap-3 md:grid-cols-[1.4fr_.8fr_.8fr] md:grid-rows-2"><img src="/images/Imperial/Imperial street campus.jpg" alt="Imperial College London street campus and historic facade" className="md:row-span-2" /><img src="/images/Imperial/classroom1.jpg" alt="A lecture theatre at Imperial" /><img src="/images/Imperial/interior.jpeg" alt="A collaborative learning space" /><img src="/images/Imperial/library.jpg" alt="A university library" /><img src="/images/Imperial/Imperial Campus.jpg" alt="Imperial campus architecture" /></div><p className="mt-3 text-center text-xs text-slate-400">Campus activities are subject to confirmation and access arrangements.</p></div></section>

    <section className="collab-mentors px-5 py-16 sm:px-10 lg:py-20"><div className="mx-auto max-w-7xl"><div className="collab-section-heading mb-8 text-center"><p className="collab-eyebrow">Our Mentors</p><h2 className="collab-section-title">Learn from Minds <em>That Shape the Future</em></h2><p className="collab-section-copy mx-auto mt-4 max-w-3xl">Gain insights from experienced educators, distinguished professionals and thought leaders who bring deep expertise and practical perspectives to the evolving world of technology and innovation.</p></div><AdvisorSlideshow compact/></div></section>

    <section className="collab-cta relative overflow-hidden px-5 py-12 sm:px-10 lg:py-16"><div className="collab-cta-card relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-6 py-8 sm:px-10 sm:py-10 md:flex-row md:items-center"><div><p className="collab-eyebrow">Get in touch</p><h2 className="collab-section-title mt-2">Your idea deserves <em>a bigger platform</em></h2><p className="mt-2">Explore the programme and discover how you can turn curiosity into capability.</p></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0b1945] px-8 py-4 font-bold tracking-wide text-white transition hover:bg-blue-900">Contact Us <Mail className="h-5 w-5" /></Link></div></section>
  </div>;
}



