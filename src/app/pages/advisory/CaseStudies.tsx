import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    title: "University Digital Awareness Program",
    category: "Education",
    challenge: "A leading university needed to strengthen digital risk awareness across 2,500+ students and faculty.",
    solution: "Developed role-based awareness program with interactive modules and measurable outcomes.",
    results: ["2,500+ participants trained", "92% knowledge improvement", "Sustainable awareness culture"],
    image: "https://images.unsplash.com/photo-1540575467537-7cbdeb1140e7?q=55&w=720",
  },
  {
    title: "Startup Governance Readiness",
    category: "Technology",
    challenge: "Fast-growing startup needed governance frameworks before Series A funding.",
    solution: "Implemented lightweight GRC framework aligned with investor expectations and regulatory requirements.",
    results: ["Series A ready in 90 days", "Investor confidence secured", "Scalable governance foundation"],
    image: "https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBhZHZpc29yeSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1MjM2MDU5fDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Enterprise Cyber Risk Awareness",
    category: "Financial Services",
    challenge: "250-person team lacked consistent cyber risk awareness and role-specific training.",
    solution: "Designed and delivered role-based cyber awareness program with continuous reinforcement.",
    results: ["95% engagement rate", "60% reduction in risk incidents", "Strong risk culture"],
    image: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YSUyMHByb3RlY3Rpb24lMjBzaGllbGR8ZW58MXx8fHwxNzc1MjM2MDU4fDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  },
  {
    title: "AI Governance Framework Implementation",
    category: "Technology",
    challenge: "SaaS company deploying AI features without governance or risk oversight.",
    solution: "Built comprehensive AI governance framework with policy, oversight, and responsible AI practices.",
    results: ["AI governance maturity achieved", "Responsible deployment process", "Customer trust enhanced"],
    image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGNpcmN1aXR8ZW58MXx8fHwxNzc1MjA0OTkwfDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Healthcare Privacy Readiness",
    category: "Healthcare",
    challenge: "Healthcare provider needed privacy framework for expanding digital services.",
    solution: "Designed privacy-first architecture with compliance readiness and trust mechanisms.",
    results: ["HIPAA compliance achieved", "Patient trust strengthened", "Digital services launched"],
    image: "https://images.unsplash.com/photo-1636797581198-1bb1f2d961b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwY29tcGxpYW5jZSUyMGRvY3VtZW50fGVufDF8fHx8MTc3NTIzNjA1OXww&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  },
];

export function CaseStudies() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies & Impact Stories</h1>
            <p className="text-xl text-slate-300">
              Real results from organizations we've partnered with
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
                  </div>

                  <div className="p-8 lg:pr-12">
                    <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full mb-4">
                      {study.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-orange-500 mb-2">Challenge</h4>
                        <p className="text-slate-400">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-500 mb-2">Solution</h4>
                        <p className="text-slate-400">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span>Results</span>
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result: string, i: number) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
