import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Matrix", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Timeline", href: "#resume" },
  { label: "Connect", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section has reached the upper third of the screen
          if (rect.top <= 300) {
            currentSection = section;
          }
        }
      }

      // If scrolled to the absolute bottom, activate the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = sections[sections.length - 1];
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? "py-4"
        : "py-8"
        }`}
    >
      <div className="container mx-auto px-6 relative z-[110]">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${isScrolled
            ? "glass-card bg-[#050505]/60 border-white/5 shadow-2xl"
            : "bg-transparent"
            }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="text-2xl font-serif font-black flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background text-sm font-sans font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform">
              DP
            </div>
            <span className="gradient-text tracking-tighter">Dilip</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all relative group ${isActive ? "text-accent" : "text-muted-foreground/90 hover:text-foreground"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute inset-0 bg-accent/5 rounded-lg -z-10 blur-sm"
                    />
                  )}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300 ${isActive ? 'w-4' : 'w-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 rounded-xl px-6 font-sans text-[10px] font-bold uppercase tracking-widest transition-all"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-[110]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Full Screen Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md md:hidden"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed inset-x-6 top-24 z-[100] md:hidden"
            >
              <div className="glass-card bg-[#050505]/90 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center justify-between group"
                    >
                      <span className={`text-lg font-serif font-bold ${activeSection === item.href.substring(1) ? "text-accent" : "text-muted-foreground/90"
                        }`}>
                        {item.label}
                      </span>
                      <div className={`h-[1px] flex-1 mx-4 bg-white/5 transition-all ${activeSection === item.href.substring(1) ? "bg-accent/40 mr-0" : ""
                        }`} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

