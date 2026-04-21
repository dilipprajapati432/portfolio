import { Users, Trophy, Rocket, Code, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";

const teamProjects = [
  {
    title: "E-Form Management System",
    role: "Database Architect",
    description: "Spearheaded the integration of relational database nodes for a high-traffic E-Form management system, optimizing query performance and ensuring data integrity.",
    icon: Code,
    accent: "text-primary",
    highlights: ["Query Optimization", "Cross-team Liaison", "System Scalability"],
  },
  {
    title: "Innovation Cluster",
    role: "Lead Tech Strategist",
    description: "Coordinated technical brainstorming protocols for rapid prototyping sprints, bridging the gap between design research and implementation logic.",
    icon: Users,
    accent: "text-accent",
    highlights: ["Agile Protocols", "Strategic Syncs", "Asset Management"],
  },
];

const qualities = [
  { title: "Empathetic Connection", desc: "Understanding team bandwidth to optimize collective output.", icon: Target },
  { title: "Strategic Vision", desc: "Predicting system requirements ahead of operational demands.", icon: Trophy },
];

export const Leadership = () => {
  return (
    <section id="leadership" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Strategic Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Leadership <span className="gradient-text italic">& Logic</span>
            </h2>
          </div>
          <p className="text-muted-foreground/90 max-w-sm text-sm font-light leading-relaxed">
            Bridging technical excellence with collaborative strategy to drive project-critical results.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Content: Projects */}
          <div className="lg:col-span-8 space-y-8">
            {teamProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/20 group transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500">
                    <project.icon className={`h-8 w-8 ${project.accent} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">{project.title}</h3>
                    <span className="text-[10px] font-sans tracking-[0.2em] text-accent font-bold uppercase">{project.role}</span>
                  </div>
                </div>

                <p className="text-muted-foreground/80 text-sm leading-relaxed mb-10 max-w-2xl font-light">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                      <p className="text-[10px] font-sans font-bold text-muted-foreground/85 uppercase tracking-widest">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Content */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="glass-card p-10 rounded-[2.5rem] border border-white/5 space-y-10"
            >
               <div className="flex items-center gap-4 text-accent/60">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Core Traits</h3>
               </div>
               <div className="space-y-8">
                  {qualities.map((trait, i) => (
                    <div key={i} className="space-y-3 group">
                       <div className="flex items-center gap-3">
                          <trait.icon className="w-4 h-4 text-accent/40 group-hover:text-accent transition-colors" />
                          <p className="text-xs font-sans font-bold uppercase tracking-widest text-foreground">{trait.title}</p>
                       </div>
                       <p className="text-sm text-muted-foreground/90 leading-relaxed font-light border-l border-white/10 pl-4 group-hover:border-accent transition-colors">{trait.desc}</p>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-card p-10 rounded-[2.5rem] border border-accent/20 bg-accent/5 relative overflow-hidden group"
            >
               <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[10px] font-sans tracking-[0.3em] uppercase font-bold opacity-70">Velocity</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Actively seeking <span className="text-accent font-bold">Summer 2026</span> research roles in AI and Distributed Systems.
                    </p>
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

