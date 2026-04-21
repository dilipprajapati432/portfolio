import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ChevronDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import profileImage from "@/assets/profile-dilip1.jpg";
import resumeFile from "@/assets/DilipKohar_Resume.pdf";

const roles = [
  "Data Scientist",
  "Web Developer",
  "AI Enthusiast",
];

const TypewriterRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 flex items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="text-xl md:text-2xl font-medium text-accent italic tracking-wide"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
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
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
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
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-8 bg-accent glow-cyan" />
                <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Available for Work</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
                Dilip<br />
                <span className="gradient-text italic">Kohar</span>
              </h1>
              
              <TypewriterRoles />
            </div>

            <p className="text-muted-foreground/90 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Crafting <span className="text-foreground font-medium italic">intelligent</span> digital experiences with 
              a focus on <span className="text-primary font-medium">Machine Learning</span> and <span className="text-accent font-medium">Modern Web Architectures</span>.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open(resumeFile, "_blank")}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl transition-all font-bold gap-3 glow-cyan border border-primary/20"
                >
                  <Download className="w-5 h-5" />
                  <span className="uppercase tracking-widest text-xs">Resume</span>
                </Button>
              </motion.div>

              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/dilipprajapati432" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" },
                  { icon: Mail, href: "mailto:dilipkohar4320@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, color: "#22D3EE", backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                    href={social.href}
                    target="_blank"
                    className="p-4 glass-card rounded-xl text-muted-foreground/80 border border-white/5 transition-all"
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
                className="relative z-10 w-full h-full rounded-3xl overflow-hidden glass-card p-2 group cursor-none"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={profileImage}
                    alt="Dilip Kohar"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Float Badge */}
              <motion.div
                style={{ transform: "translateZ(100px)" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-5 glass-card rounded-2xl border-accent/20 z-20"
              >
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground/80 hover:text-accent transition-colors cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-sans tracking-[0.6em] uppercase">Deep Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};

