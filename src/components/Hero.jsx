import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ChevronDown, Download, Sparkles, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Cyber Security Analyst",
  "AI Enthusiast",
];

const TypewriterRoles = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 50))); // Typing speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="h-10 flex items-center">
      <p className="text-lg md:text-xl font-medium text-accent italic tracking-wide">
        {roles[index].substring(0, subIndex)}
        <span className={`inline-block w-[2px] h-5 bg-accent ml-1 align-middle transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
      </p>
    </div>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * 15);
    rotateY.set(-x * 15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-8 md:pt-16 md:pb-0 bg-background">
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                </span>
                <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-white/90">Available for Work</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
                Dilip<br />
                <span className="gradient-text">Prajapati</span>
              </h1>

              <TypewriterRoles />
            </div>

            <p className="text-muted-foreground/80 text-[13px] md:text-[15px] max-w-xl leading-[1.8] font-sans font-medium tracking-wide">
              Engineering <span className="text-white font-bold italic">intelligent systems</span> and premium digital experiences at the intersection of <span className="text-primary font-bold">Machine Learning</span> and <span className="text-accent font-bold">Modern Web Architecture</span>.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl transition-all font-bold gap-3 glow-cyan border border-primary/20 group"
                >
                  <span className="uppercase tracking-widest text-xs">Hire Me</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {[
                  { icon: Github, href: "https://github.com/dilipprajapati432" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" },
                  { icon: Twitter, href: "https://x.com/DilipPraja6787" },
                  { icon: Facebook, href: "https://www.facebook.com/dilipprajapati516/" },
                  { icon: Mail, href: "mailto:dilipkohar4320@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, color: "#22D3EE", backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                    href={social.href}
                    target="_blank"
                    className="p-3 md:p-4 glass-card rounded-xl text-muted-foreground/80 border border-white/5 transition-all"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:flex justify-center relative"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-[400px] h-[400px] flex items-center justify-center transition-all duration-300 ease-out"
            >
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-30px] rounded-full border border-primary/10 opacity-30 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-15px] rounded-full border border-accent/10 opacity-30 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
              />

              {/* Profile Wrapper */}
              <div
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 w-full h-full rounded-full glass-card p-2 group cursor-none"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="/images/profile-dilip1.jpg"
                    alt="Dilip Prajapati"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center gap-2 text-muted-foreground/80 hover:text-accent transition-colors cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[8px] md:text-[10px] font-sans tracking-[0.4em] md:tracking-[0.6em] uppercase pl-[0.4em]">Deep Scroll</span>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

