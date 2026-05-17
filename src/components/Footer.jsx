import { Github, Linkedin, Mail, ArrowUp, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer className="relative py-6 md:py-8 border-t border-white/10 bg-[#050505] overflow-hidden font-sans">

      {/* Soft Background Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/5 via-[#050505]/50 to-transparent pointer-events-none z-0" />

      {/* Subtle Cyan Glow Behind Logo Area */}
      <div className="absolute top-0 left-0 w-[40%] h-[150px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full z-0" />

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 mb-6">
          
          {/* Identity & Mission */}
          <motion.div variants={itemVariants} className="max-w-md w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-foreground uppercase relative inline-block">
              <span className="relative z-10">DILIP<span className="gradient-text ml-2">KOHAR</span></span>
              {/* Extra text glow */}
              <span className="absolute inset-0 bg-cyan-400/20 blur-xl z-0 rounded-full mix-blend-screen opacity-0 hover:opacity-100 transition-opacity duration-700" />
            </h2>
            <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground/90 leading-relaxed font-medium mt-3">
              Building immersive digital experiences through modern engineering, elegant design, and intelligent technology.
            </p>
          </motion.div>

          {/* Social Links & Action Button Group */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10">
            {[
              { icon: Github, href: "https://github.com/dilipprajapati432", label: "Github" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/DilipPraja6787", label: "X" },
              { icon: Facebook, href: "https://www.facebook.com/dilipprajapati516/", label: "Facebook" },
              { icon: Mail, href: "mailto:dilipkohar4320@gmail.com", label: "Email" }
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                className="group flex flex-col items-center gap-3 relative"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/80 group-hover:text-accent transition-colors duration-500 uppercase text-center min-w-[32px]">
                  {s.label}
                </span>
                <div className="relative flex items-center justify-center w-8 h-8">
                  <div className="w-8 h-8 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500 z-10">
                    <s.icon className="w-4 h-4 text-muted-foreground/80 group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <div className="absolute left-full ml-3 h-[1px] w-0 group-hover:w-12 bg-accent/40 transition-all duration-700 ease-out" />
                </div>
              </a>
            ))}
            </div>

            {/* Scroll to Top (Inline with Socials on Desktop) */}
            <div className="hidden sm:block w-[1px] h-8 bg-white/10" />
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 w-14 rounded-2xl flex items-center justify-center border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white hover:border-white text-muted-foreground hover:text-black hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-500 group relative overflow-hidden"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </div>

        {/* Global Footer Marker */}
        <motion.div
          variants={itemVariants}
          className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-[10px] font-sans tracking-[0.2em] text-muted-foreground/60 uppercase">
            © {currentYear} Dilip Kohar. All rights reserved.
          </p>
          <p className="text-[10px] font-sans tracking-[0.2em] text-muted-foreground/60 uppercase flex items-center gap-2">
            Designed with Precision <span className="w-1 h-1 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
