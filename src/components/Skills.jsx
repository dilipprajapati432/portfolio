import { Code, Database, Brain, Users2, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code,
      accent: "text-primary",
      skills: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Vite", "Framer Motion", "Responsive Design"],
      proficiency: 90,
    },
    {
      title: "Backend Engineering",
      icon: Database,
      accent: "text-accent",
      skills: ["Node.js", "Express", "Flask", "MongoDB", "MySQL", "Socket.io", "REST APIs", "Auth-Flow", "Architecture"],
      proficiency: 85,
    },
    {
      title: "AI & Data Science",
      icon: Brain,
      accent: "text-primary",
      skills: ["Generative AI", "LLMs (Gemini/Llama)", "NLP", "Machine Learning", "Python", "Data Analysis", "Computer Vision"],
      proficiency: 85,
    },
    {
      title: "Soft Skills",
      icon: Users2,
      accent: "text-accent",
      skills: ["Team Leadership", "Communication", "Agile", "Problem Solving", "Mentoring", "Git"],
      proficiency: 85,
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-transparent">
      {/* Decorative backdrop */}
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Technical <span className="gradient-text italic">Matrix</span>
            </h2>
          </div>
          <p className="text-muted-foreground/90 max-w-sm text-sm font-light leading-relaxed">
            Continuously evolving through high-impact research, development cycles, and technical exploration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/20 group transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex gap-5">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500">
                      <Icon className={`h-8 w-8 ${category.accent} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-sans tracking-[0.2em] text-muted-foreground uppercase">Expertise</span>
                        <div className="h-[1px] w-4 bg-white/10" />
                        <span className="text-[10px] font-sans text-accent font-bold">{category.proficiency}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.proficiency}%` }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 w-2 h-full bg-white/40 blur-[2px]" />
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-[10px] font-sans font-bold uppercase tracking-widest bg-white/[0.03] text-muted-foreground/80 rounded-xl border border-white/5 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { label: "Systems Built", value: "10+", icon: Cpu },
             { label: "Research Nodes", value: "3", icon: Brain },
             { label: "Global Reach", value: "India", icon: Globe },
             { label: "Code Coverage", value: "90%", icon: Code }
           ].map((stat, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center space-y-2 group"
             >
                <stat.icon className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
                <div className="text-xl font-serif font-black text-foreground">{stat.value}</div>
                <div className="text-[9px] font-sans tracking-[0.3em] uppercase text-muted-foreground/80">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};