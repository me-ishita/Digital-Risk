import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BookOpen, FileText, TrendingUp, Brain, Shield, Lock, ArrowRight } from "lucide-react";

const insights = [
  {
    type: "Whitepaper",
    icon: <FileText className="w-6 h-6" />,
    title: "Digital Risk Trends 2026",
    description: "Emerging patterns in cyber risk, governance, and digital resilience shaping the year ahead.",
    date: "March 2026",
    readTime: "15 min read",
  },
  {
    type: "Framework Guide",
    icon: <BookOpen className="w-6 h-6" />,
    title: "AI Risk Governance Framework",
    description: "Practical approaches to implementing responsible AI governance in your organization.",
    date: "February 2026",
    readTime: "20 min read",
  },
  {
    type: "Research",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Digital Trust in the Age of AI",
    description: "Building accountability and trust in AI-powered digital systems and services.",
    date: "February 2026",
    readTime: "12 min read",
  },
  {
    type: "Blog",
    icon: <Brain className="w-6 h-6" />,
    title: "The Rise of AI Risk Management",
    description: "Why every organization needs an AI risk strategy and how to get started.",
    date: "January 2026",
    readTime: "8 min read",
  },
  {
    type: "Guide",
    icon: <Shield className="w-6 h-6" />,
    title: "Cyber Resilience Planning Essentials",
    description: "A step-by-step guide to building organizational cyber resilience capabilities.",
    date: "January 2026",
    readTime: "18 min read",
  },
  {
    type: "Whitepaper",
    icon: <Lock className="w-6 h-6" />,
    title: "Privacy-First Digital Transformation",
    description: "Integrating privacy and trust into digital transformation initiatives.",
    date: "December 2025",
    readTime: "16 min read",
  },
];

export function Insights() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights & Research</h1>
            <p className="text-xl text-slate-300">
              Thought leadership on digital risk, governance, and emerging technology
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">
                    {insight.type}
                  </span>
                  <div className="text-blue-500">{insight.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{insight.description}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>

                <button className="text-blue-500 font-semibold inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-slate-300 mb-8">
              Subscribe to receive our latest insights on digital risk, governance, and emerging technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 flex-1"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Looking for Custom Research?</h2>
            <p className="text-xl mb-8 text-white/90">
              We conduct custom research and thought leadership initiatives for organizations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
