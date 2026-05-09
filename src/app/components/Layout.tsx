import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import brandLogo from "@/assets/b402c8efd70b38e0d5cb2eef9fe01649b01c6575.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const academyRef = useRef<HTMLDivElement>(null);
  const labsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        academyRef.current && !academyRef.current.contains(event.target as Node) &&
        labsRef.current && !labsRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const location = useLocation();
  const getBrandName = () => {
    if (location.pathname.startsWith("/academy")) {
      return "Digital Risk Academy";
    }
    if (location.pathname.startsWith("/lab")) {
      return "Digital Risk Lab";
    }
    return "Digital Risk";
  };
  const isAcademy = location.pathname.startsWith("/academy");
const isLab = location.pathname.startsWith("/lab"); 

  const brandName = getBrandName();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const optimizeUnsplashUrl = (rawSrc: string) => {
      try {
        const url = new URL(rawSrc);
        if (!url.hostname.includes("images.unsplash.com")) {
          return rawSrc;
        }

        const width = Number(url.searchParams.get("w") ?? "0");
        if (width >= 1800) url.searchParams.set("w", "1024");
        else if (width >= 1200) url.searchParams.set("w", "800");
        else if (width >= 1000) url.searchParams.set("w", "720");
        else if (width >= 800) url.searchParams.set("w", "640");

        const quality = Number(url.searchParams.get("q") ?? "80");
        if (!Number.isFinite(quality) || quality > 55) {
          url.searchParams.set("q", "55");
        }

        if (!url.searchParams.get("auto")) {
          url.searchParams.set("auto", "format");
        }
        if (!url.searchParams.get("fit")) {
          url.searchParams.set("fit", "crop");
        }
        if (!url.searchParams.get("dpr")) {
          url.searchParams.set("dpr", "1");
        }

        return url.toString();
      } catch {
        return rawSrc;
      }
    };

    const optimizeImageElement = (img: HTMLImageElement, index: number) => {
      if (!img.getAttribute("loading")) {
        img.setAttribute("loading", index < 1 ? "eager" : "lazy");
      }
      if (!img.getAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
      if (!img.getAttribute("fetchpriority") && index > 1) {
        img.setAttribute("fetchpriority", "low");
      }

      const src = img.getAttribute("src");
      if (!src) return;

      const optimizedSrc = optimizeUnsplashUrl(src);
      if (optimizedSrc !== src) {
        img.setAttribute("src", optimizedSrc);
      }
    };

    const images = Array.from(document.querySelectorAll("img"));
    images.forEach((img, index) => optimizeImageElement(img, index));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            optimizeImageElement(node, 2);
            return;
          }

          if (node instanceof HTMLElement) {
            node.querySelectorAll("img").forEach((img) => optimizeImageElement(img, 2));
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${mobileMenuOpen
            ? "bg-slate-950/95 backdrop-blur-lg"
            : scrolled
              ? "bg-slate-950/80 backdrop-blur-lg"
              : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <img
                src={brandLogo}
                alt="Digital Risk"
                loading="eager"
                decoding="async"
                className="h-9 w-9 sm:h-11 sm:w-11 object-contain rounded-sm shrink-0"
              />
              <div className="flex flex-col leading-none min-w-0">
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-bold tracking-tight truncate">
                  <span className="logo-shine">
                    {brandName}
                  </span>
                </span>
                <span className="hidden sm:block text-[11px] font-bold tracking-[0.28em] text-slate-200 uppercase mt-1">
                  Trust · Resilience · Innovation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 text-sm font-medium font-display">

              <div className="relative group" ref={academyRef}>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "academy" ? null : "academy")}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-slate-700/60 text-slate-200 hover:border-orange-500/60 hover:text-white transition-all duration-200 bg-slate-900/40 backdrop-blur-sm"
                >
                  Academy <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "academy" ? "rotate-180" : ""}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-52 bg-slate-900 rounded-xl shadow-2xl transition-all duration-200 border border-slate-800 overflow-hidden ${activeDropdown === "academy" ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}>
                  <Link to="/academy" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Academy Home</Link>
                  <Link to="/academy/programs" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">All Programmes</Link>
                  <Link to="/academy/certifications" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Certifications</Link>
                  <Link to="/academy/resources" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Resources</Link>
                </div>
              </div>

              <div className="relative group" ref={labsRef}>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "labs" ? null : "labs")}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-slate-700/60 text-slate-200 hover:border-orange-500/60 hover:text-white transition-all duration-200 bg-slate-900/40 backdrop-blur-sm"
                >
                  Labs <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "labs" ? "rotate-180" : ""}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-52 bg-slate-900 rounded-xl shadow-2xl transition-all duration-200 border border-slate-800 overflow-hidden ${activeDropdown === "labs" ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}>
                  <Link to="/advisory" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Labs Home</Link>
                  <Link to="/advisory/services" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">All Services</Link>
                  <Link to="/advisory/how-we-work" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">How We Work</Link>
                  <Link to="/advisory/case-studies" onClick={() => setActiveDropdown(null)} target="_self" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Case Studies</Link>
                </div>
              </div>

              <Link to="/insights" className="px-4 py-2 rounded-full border border-slate-700/60 text-slate-200 hover:border-orange-500/60 hover:text-white transition-all duration-200 bg-slate-900/40 backdrop-blur-sm">
                Insights
              </Link>

              <Link to="/contact" className="px-4 py-2 rounded-full border border-slate-700/60 text-slate-200 hover:border-orange-500/60 hover:text-white transition-all duration-200 bg-slate-900/40 backdrop-blur-sm">
                Contact
              </Link>

              <Link to="/contact" className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-orange-500/40">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-3 p-4 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 space-y-1.5"
              >
                <Link
                  to="/academy"
                  className="block py-2 text-base text-slate-300 hover:text-orange-500"
                >
                  Academy
                </Link>
                <Link
                  to="/academy/programs"
                  className="block py-2 pl-4 text-sm text-slate-400 hover:text-orange-500"
                >
                  Programs
                </Link>
                <Link
                  to="/academy/certifications"
                  className="block py-2 pl-4 text-sm text-slate-400 hover:text-orange-500"
                >
                  Certifications
                </Link>
                <Link
                  to="/academy/resources"
                  className="block py-2 pl-4 text-sm text-slate-400 hover:text-orange-500"
                >
                  Resources
                </Link>
                <Link
                  to="/advisory"
                  className="block py-2 text-base text-slate-300 hover:text-orange-500"
                >
                  Advisory
                </Link>
                <Link
                  to="/advisory/services"
                  className="block py-2 pl-4 text-sm text-slate-400 hover:text-orange-500"
                >
                  Services
                </Link>
                <Link
                  to="/advisory/industries"
                  className="block py-2 pl-4 text-sm text-slate-400 hover:text-orange-500"
                >
                  Industries
                </Link>
                <Link
                  to="/advisory/how-we-work"
                  className="block py-2 pl-4 text-sm text-slate-400 hover:text-orange-500"
                >
                  How We Work
                </Link>
                <Link
                  to="/advisory/case-studies"
                  className="block py-2 pl-4 text-sm text-slate-400 hover:text-orange-500"
                >
                  Case Studies
                </Link>
                <Link
                  to="/insights"
                  className="block py-2 text-base text-slate-300 hover:text-orange-500"
                >
                  Insights
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 text-base text-slate-300 hover:text-orange-500"
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className="block mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-center font-semibold"
                >
                  Get Started
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <main className="px-1 sm:px-2">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={brandLogo}
                alt="Digital Risk Academy"
                loading="lazy"
                decoding="async"
                className="h-12 w-12 object-contain rounded-sm"
              />
              <div>
                <div className="font-display font-bold text-lg leading-none">
                  <span className="logo-shine">Digital</span>
                  {" "}
                  <span className="logo-shine">Risk</span>
                </div>
                <div className="text-xs text-slate-400">
                  Trust. Resilience. Innovation.
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Advisory, Capability Building, and Digital Risk
              Transformation. Helping organizations and
              professionals navigate cyber, compliance, and
              digital risk.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-orange-500">
              Academy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/academy"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Academy Home
                </Link>
              </li>
              <li>
                <Link
                  to="/academy/programs"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/academy/certifications"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/academy/resources"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-purple-500">
              Innovate
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/innovate"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Innovation Hub
                </Link>
              </li>
              <li>
                <Link
                  to="/innovate/ai-labs"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AI Labs
                </Link>
              </li>
              <li>
                <Link
                  to="/innovate/startups"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Startup Support
                </Link>
              </li>
              <li>
                <Link
                  to="/innovate/research"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Research & Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-blue-500">
              Accelerator
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/advisory"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Accelerator Home
                </Link>
              </li>
              <li>
                <Link
                  to="/advisory/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/advisory/industries"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/advisory/how-we-work"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  How We Work
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2026 Digital Risk Labs. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
