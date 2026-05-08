import { motion } from "motion/react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import {
  Shield,
  Brain,
  Lock,
  Users,
  FileCheck,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Building2,
  DollarSign,
  Heart,
  School,
  Laptop,
  Globe,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*+-?";

function ScrambleTitle({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 32;
    const intervalId = setInterval(() => {
      frame += 1;
      const revealCount = Math.floor((frame / totalFrames) * text.length);
      const nextText = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < revealCount) return text[index];
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");

      setDisplayText(nextText);

      if (frame >= totalFrames) {
        setDisplayText(text);
        clearInterval(intervalId);
      }
    }, 52);

    return () => clearInterval(intervalId);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}

export function AdvisoryHome() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900" />
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBhZHZpc29yeSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1MjM2MDU5fDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral"
            alt="Advisory services"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 pt-10 sm:pt-14 md:pt-16 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-7"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  animate={{ opacity: [1, 0.78, 1, 0.9, 1] }}
                  transition={{ duration: 0.45, repeat: 2, ease: "easeInOut" }}
                >
                  <ScrambleTitle
                    text="Digital Risk Labs"
                    className="text-xl md:text-2xl font-extrabold tracking-[0.04em] text-blue-400"
                  />
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Navigate Digital Risk{" "}
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                  with Confidence
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Advisory for Cyber Risk, Governance, AI Risk, and Digital Trust. Helping organizations build resilience, accountability, and trust in a digital world.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link
                  to="/advisory/services"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Consultation</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Subheadline */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <motion.p
            className="text-center text-lg text-slate-300 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Digital Risk Labs Advisory helps organizations assess, strengthen, and operationalize digital risk, trust, governance, and resilience through practical, forward-looking advisory services.
          </motion.p>
        </div>
      </section>

      {/* Problems We Help Solve */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Problems We Help Solve</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Addressing the most critical digital risk challenges facing organizations today
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ProblemCard
              icon={<AlertCircle className="w-8 h-8" />}
              title="Unclear Cyber Risk Posture"
              description="Limited visibility into vulnerabilities and threat exposure"
            />
            <ProblemCard
              icon={<FileCheck className="w-8 h-8" />}
              title="Weak Governance & Controls"
              description="Inadequate frameworks and risk oversight mechanisms"
            />
            <ProblemCard
              icon={<Brain className="w-8 h-8" />}
              title="AI Adoption Without Risk Oversight"
              description="Deploying AI without proper governance or risk management"
            />
            <ProblemCard
              icon={<CheckCircle className="w-8 h-8" />}
              title="Compliance Readiness Gaps"
              description="Struggling to meet regulatory requirements and audit standards"
            />
            <ProblemCard
              icon={<Users className="w-8 h-8" />}
              title="Workforce Awareness Weaknesses"
              description="Insufficient security awareness and risk culture"
            />
            <ProblemCard
              icon={<Lock className="w-8 h-8" />}
              title="Digital Trust Concerns"
              description="Lack of trust architecture and accountability frameworks"
            />
          </motion.div>
        </div>
      </section>

      {/* Service Lines */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Service Lines</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive advisory services across the digital risk spectrum
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<Shield className="w-10 h-10" />}
              title="Cyber Risk & Resilience"
              description="Strengthen your cyber posture, resilience planning, and incident readiness"
              link="/advisory/services"
            />
            <ServiceCard
              icon={<FileCheck className="w-10 h-10" />}
              title="Governance, Risk & Compliance"
              description="Build robust governance frameworks, internal controls, and risk oversight"
              link="/advisory/services"
            />
            <ServiceCard
              icon={<Lock className="w-10 h-10" />}
              title="Digital Trust & Privacy"
              description="Establish trust architecture, privacy readiness, and accountability"
              link="/advisory/services"
            />
            <ServiceCard
              icon={<Brain className="w-10 h-10" />}
              title="AI Risk & Responsible Innovation"
              description="Navigate AI governance, policy development, and responsible AI practices"
              link="/advisory/services"
            />
            <ServiceCard
              icon={<Users className="w-10 h-10" />}
              title="Security Awareness & Human Risk"
              description="Build workforce awareness, leadership capability, and risk culture"
              link="/advisory/services"
            />
            <ServiceCard
              icon={<School className="w-10 h-10" />}
              title="Institutional / Academic Advisory"
              description="Support institutions with policy, digital literacy, and academic enablement"
              link="/advisory/services"
            />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/advisory/services"
              className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 font-semibold group text-lg"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A structured, repeatable approach to digital risk transformation
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <PhaseCard number="1" title="Diagnose" description="Assess current state and gaps" />
              <PhaseCard number="2" title="Assess" description="Evaluate risks and priorities" />
              <PhaseCard number="3" title="Design" description="Develop frameworks and solutions" />
              <PhaseCard number="4" title="Enable" description="Implement and build capability" />
              <PhaseCard number="5" title="Embed" description="Operationalize and sustain" />
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/advisory/how-we-work"
              className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 font-semibold group"
            >
              <span>Learn About Our Approach</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Contextual digital risk expertise across sectors
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <IndustryCard icon={<Laptop className="w-8 h-8" />} name="Startups & Digital" />
            <IndustryCard icon={<DollarSign className="w-8 h-8" />} name="Financial Services" />
            <IndustryCard icon={<Heart className="w-8 h-8" />} name="Healthcare" />
            <IndustryCard icon={<School className="w-8 h-8" />} name="Education" />
            <IndustryCard icon={<Building2 className="w-8 h-8" />} name="Technology / SaaS" />
            <IndustryCard icon={<Globe className="w-8 h-8" />} name="Public Sector" />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/advisory/industries"
              className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 font-semibold group"
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Strengthen Your Digital Risk Posture?</h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a consultation to discuss your organization's digital risk needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-all"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProblemCard({ icon, title, description }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </motion.div>
  );
}

function ServiceCard({ icon, title, description, link }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center space-x-2 text-blue-500 font-semibold group"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

function PhaseCard({ number, title, description }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center border-2 border-blue-500">
        <span className="text-2xl font-bold text-blue-500">{number}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}

function IndustryCard({ icon, name }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all text-center"
    >
      <div className="text-blue-500 mx-auto mb-3">{icon}</div>
      <div className="text-sm font-semibold">{name}</div>
    </motion.div>
  );
}
