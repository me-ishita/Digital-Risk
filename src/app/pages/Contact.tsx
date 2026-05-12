import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "advisory",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("submitting");

    await new Promise((r) => setTimeout(r, 900));

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      organization: "",
      interest: "advisory",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  const inputBase =
    "w-full px-4 py-3.5 text-[15px] bg-white/70 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 backdrop-blur-sm";

  return (
    <div className="pt-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-20 sm:pt-10 pb-40 sm:pb-48">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=eGJEyQjNyo6O0JLPeW1w_vHth1vC4mvKOAoz5HXhPQo="
            alt="Contact Background"
            className="w-full h-full object-cover"
          />

          

        </div>

        <div className="container relative z-10 mx-auto px-4 pt-16 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.22em] mb-6 shadow-sm">
              Contact Digital Risk
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-white">
        Get in{" "}
        <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-white bg-clip-text text-transparent">
          Touch
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
        Ready to strengthen your digital risk capability? Let&apos;s start
        a conversation.
      </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT SECTION
      ════════════════════════════════════════ */}
<section className="relative bg-[#07112b] pt-16 sm:pt-24 pb-20 sm:pb-24">
            <div className="container mx-auto px-4 sm:px-6">

          {/* Added proper spacing + pushed cards downward */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* FORM */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                {/* Top Accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-slate-800" />

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      Send Us a Message
                    </h2>

                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                      Share your requirements and our team will connect with you
                      shortly.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 sm:space-y-7"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold mb-2 text-slate-700"
                        >
                          Name *
                        </label>

                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputBase}
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold mb-2 text-slate-700"
                        >
                          Email *
                        </label>

                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputBase}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-semibold mb-2 text-slate-700"
                      >
                        Organization
                      </label>

                      <input
                        id="organization"
                        type="text"
                        name="organization"
                        autoComplete="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder="Your organization"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-semibold mb-2 text-slate-700"
                      >
                        I&apos;m interested in *
                      </label>

                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="advisory">
                          Advisory Services
                        </option>

                        <option value="academy">
                          Academy Programmes
                        </option>

                        <option value="partnership">
                          Partnership Opportunities
                        </option>

                        <option value="speaking">
                          Speaking Engagements
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-2 text-slate-700"
                      >
                        Message *
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`${inputBase} resize-none`}
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group w-full min-h-[56px] px-6 py-4 rounded-xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-700 text-white font-semibold shadow-xl shadow-blue-900/20 hover:shadow-blue-900/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending…</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* SUCCESS */}
                    <AnimatePresence>
                      {status === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          role="status"
                          className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm p-4"
                        >
                          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />

                          <span>
                            Thanks — we&apos;ve received your message and will
                            reply within 24 hours on business days.
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* CONTACT INFO */}
              <div className="rounded-[26px] border border-slate-200/80 bg-white/90 backdrop-blur-xl p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-700" />
                    </div>

                    <div className="min-w-0">
                      <div className="font-semibold text-slate-900 mb-1">
                        Email
                      </div>

                      <a
                        href="mailto:info@digitalrisklabs.com"
                        className="text-blue-700 hover:text-blue-800 text-sm break-all font-medium"
                      >
                        info@digitalrisklabs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-indigo-700" />
                    </div>

                    <div>
                      <div className="font-semibold text-slate-900 mb-1">
                        Phone
                      </div>

                      <a
                        href="tel:+1234567890"
                        className="text-indigo-700 hover:text-indigo-800 text-sm font-medium"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-slate-700" />
                    </div>

                    <div>
                      <div className="font-semibold text-slate-900 mb-1">
                        Location
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Global operations with advisory teams worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* OFFICE HOURS */}
              <div className="rounded-[26px] border border-slate-200/80 bg-white/90 backdrop-blur-xl p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-bold text-slate-900 mb-5">
                  Office Hours
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-700 font-semibold">
                      Monday - Friday
                    </span>

                    <span className="text-slate-500 font-medium">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-700 font-semibold">
                      Saturday
                    </span>

                    <span className="text-slate-500 font-medium">
                      By Appointment
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-700 font-semibold">
                      Sunday
                    </span>

                    <span className="text-slate-500 font-medium">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* QUICK RESPONSE */}
              <div className="relative overflow-hidden rounded-[26px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-[0_12px_40px_rgba(59,130,246,0.08)]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Quick Response
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════ */}
      <section className="pb-20 sm:pb-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto rounded-[34px] overflow-hidden border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 text-white shadow-[0_25px_80px_rgba(15,23,42,0.25)]">
            <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Prefer to Schedule a Call?
              </h2>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Book a consultation directly with our advisory team.
              </p>

              <a
                href="mailto:info@digitalrisklabs.com?subject=Consultation%20Request"
                className="inline-flex items-center gap-2 min-h-[54px] px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Schedule a Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}