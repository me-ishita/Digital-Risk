import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Shield,
  FileCheck,
  Lock,
  Brain,
  Users,
  School,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Cyber Risk & Resilience",
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=55&w=720",
    description:
      "Strengthen your organization's cyber posture and resilience capabilities",
    offerings: [
      "Cyber posture reviews and assessments",
      "Resilience planning and strategy",
      "Incident readiness preparation",
      "Security maturity support and roadmapping",
    ],
    outcomes: [
      "Enhanced security posture",
      "Improved incident response",
      "Resilient operations",
    ],
  },
  {
    icon: <FileCheck className="w-12 h-12" />,
    title: "Governance, Risk & Compliance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=55&w=720",
    description:
      "Build robust governance frameworks and risk oversight mechanisms",
    offerings: [
      "Governance framework design",
      "Internal controls development",
      "Risk oversight and management",
      "Compliance readiness support",
    ],
    outcomes: [
      "Effective governance",
      "Strong risk oversight",
      "Audit readiness",
    ],
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: "Digital Trust & Privacy",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=55&w=720",
    description:
      "Establish trust architecture and privacy accountability frameworks",
    offerings: [
      "Trust architecture design",
      "Privacy readiness assessments",
      "Accountability frameworks",
      "Data trust considerations",
    ],
    outcomes: [
      "Enhanced customer trust",
      "Privacy compliance",
      "Data accountability",
    ],
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Risk & Responsible Innovation",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=55&w=720",
    description:
      "Navigate AI governance and responsible AI deployment",
    offerings: [
      "AI governance frameworks",
      "AI policy development",
      "Risk oversight for AI systems",
      "Responsible AI readiness",
    ],
    outcomes: [
      "AI governance maturity",
      "Responsible innovation",
      "Risk-aware AI deployment",
    ],
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Security Awareness & Human Risk",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=55&w=720",
    description:
      "Build risk-aware culture and workforce capability",
    offerings: [
      "Workforce awareness programs",
      "Leadership awareness initiatives",
      "Role-based risk awareness",
      "Culture building and change management",
    ],
    outcomes: [
      "Security-aware workforce",
      "Risk-conscious culture",
      "Reduced human risk",
    ],
  },
  {
    icon: <School className="w-12 h-12" />,
    title: "Institutional / Academic Advisory",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=55&w=720",
    description:
      "Support educational institutions with digital risk strategy",
    offerings: [
      "Policy and safety advisory",
      "Digital literacy and risk strategy",
      "Academic program enablement",
      "Institution readiness assessments",
    ],
    outcomes: [
      "Enhanced digital safety",
      "Academic excellence",
      "Institutional readiness",
    ],
  },
];

export function Services() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advisory Services
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive digital risk solutions tailored to
              your organization's needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceDetail
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can support your digital risk
              objectives.
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

function ServiceDetail({ service, index }: any) {
  return (
    <motion.div
      className="relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-70 scale-105 blur-[1px] brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/60 to-slate-900/70" />{" "}
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
        {" "}
        <div className="lg:col-span-1">
          <div className="text-blue-500 mb-6">
            {service.icon}
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {service.title}
          </h2>
          <p className="text-slate-400">
            {service.description}
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">
              What We Offer
            </h3>
            <ul className="space-y-3">
              {service.offerings.map(
                (offering: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">
                      {offering}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Outcomes You Can Expect
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.outcomes.map(
                (outcome: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium"
                  >
                    {outcome}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}