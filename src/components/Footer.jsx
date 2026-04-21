import { Github, Linkedin, Mail, Cpu, ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-24 border-t border-white/5 bg-background overflow-hidden font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          
          {/* Identity & Status */}
          <div className="space-y-8 max-w-sm">
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-background text-xs font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    DK
                  </div>
                  <h2 className="text-3xl font-serif font-black tracking-tight text-foreground uppercase">
                    DILIP<span className="gradient-text italic ml-2">KOHAR</span>
                  </h2>
               </div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground/80 leading-loose font-bold">
                Synthesizing high-performance architectures through precision engineering.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                   <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">System_Active</span>
                </div>
                <span className="text-[10px] text-muted-foreground/40 font-bold tracking-widest">© {currentYear} // v2.0.4</span>
            </div>
          </div>

          {/* Social Nodes */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
             {[
               { icon: Github, href: "https://github.com/dilipprajapati432", label: "Source" },
               { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293", label: "Connect" },
               { icon: Mail, href: "mailto:dilipkohar4320@gmail.com", label: "Relay" }
             ].map((s, i) => (
               <motion.a key={i} whileHover={{ x: 5 }} href={s.href} target="_blank"
                 className="group flex flex-col gap-3">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground/50 group-hover:text-accent transition-colors uppercase">{s.label}</span>
                  <div className="flex items-center gap-4">
                     <s.icon className="w-5 h-5 text-muted-foreground/80 group-hover:text-accent transition-colors" />
                     <div className="h-[1px] w-0 group-hover:w-10 bg-accent/40 transition-all duration-500" />
                  </div>
               </motion.a>
             ))}
          </div>

          {/* Precision Stats */}
          <div className="flex flex-col items-end gap-8">
             <div className="text-right space-y-3">
                <div className="flex items-center justify-end gap-3 text-accent font-bold text-[10px] uppercase tracking-[0.4em]">
                   <Cpu className="w-3 h-3" /> Technical_Verified
                </div>
                <div className="flex gap-4 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                    <span className="text-[10px] font-bold text-foreground">Playfair</span>
                    <span className="text-[10px] font-bold text-foreground">Inter</span>
                </div>
             </div>

             <motion.button 
               onClick={scrollToTop} 
               whileHover={{ y: -8, scale: 1.05 }} 
               whileTap={{ scale: 0.95 }}
               className="h-16 w-16 glass-card rounded-2xl flex items-center justify-center border border-white/5 hover:border-accent group transition-all duration-500"
             >
                <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
             </motion.button>
          </div>
        </div>

        {/* Global Footer Marker */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
               <span className="text-[9px] font-bold tracking-[0.6em] text-white/20 uppercase italic">Digital_Artifact_End // 2026</span>
               <div className="h-[1px] w-12 bg-white/10" />
               <Sparkles className="w-3 h-3 text-white/20" />
           </div>
           
           <p className="text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase">
             Designed with Precision & Intent
           </p>
        </div>
      </div>
    </footer>
  );
};


