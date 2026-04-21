import { Code, Database, Brain, Users2, Cpu, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

const SkillProgressBar = ({ name, proficiency, accent }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center px-1">
      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground/80">{name}</span>
      <span className="text-[10px] font-sans font-bold text-accent">{proficiency}%</span>
    </div>
    <div className="h-1 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm relative group/skill">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
        viewport={{ once: true }}
        className={`h-full bg-gradient-to-r ${accent === 'text-primary' ? 'from-primary/40 to-primary' : 'from-accent/40 to-accent'} rounded-full relative group-hover/skill:brightness-125 transition-all outline outline-1 outline-white/5`}
      >
        <div className="absolute top-0 right-0 h-full w-2 shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-white/30 blur-[1px]" />
      </motion.div>
    </div>
  </div>
);

const SkillCategory = ({ category, index }) => {
  const Icon = category.icon;
  const isLarge = category.priority === "high";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card p-8 rounded-[2.5rem] border border-white/5 hover:border-accent/20 group transition-all duration-500 relative overflow-hidden flex flex-col"
    >
      {/* Background Decorative Element */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[80px] transition-opacity duration-500 ${category.accent === 'text-primary' ? 'bg-primary/10' : 'bg-accent/10'} opacity-0 group-hover:opacity-100`} />

      <div className="flex items-start justify-between mb-10 relative z-10">
        <div className="flex gap-5">
          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500 shadow-xl border border-white/5">
            <Icon className={`h-8 w-8 ${category.accent} group-hover:scale-110 transition-transform duration-500`} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-3">
              {category.title}
              {isLarge && <Zap className="w-4 h-4 text-accent animate-pulse" />}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-muted-foreground uppercase opacity-60">Technical Stack</span>
              <div className="h-[1px] w-4 bg-white/10" />
              <span className="text-[10px] font-sans text-accent font-bold tracking-widest uppercase">Expertise Level</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 relative z-10">
        {category.skills.map((skill, i) => (
          <SkillProgressBar
            key={i}
            name={skill.name}
            proficiency={skill.level}
            accent={category.accent}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Core Programming",
      icon: Code,
      accent: "text-primary",
      skills: [
        { name: "Java", level: 92 },
        { name: "Python", level: 95 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5/CSS3", level: 94 }
      ],
    },
    {
      title: "Full-Stack & Real-time",
      icon: Database,
      accent: "text-accent",
      skills: [
        { name: "React.js", level: 91 },
        { name: "Node.js / Express", level: 86 },
        { name: "Socket.io", level: 82 },
        { name: "Tailwind CSS", level: 89 }
      ],
    },
    {
      title: "Data Science & Matrix",
      icon: Brain,
      accent: "text-primary",
      skills: [
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 82 },
        { name: "Data Analysis", level: 90 }
      ],
    },
    {
      title: "Database & Tools",
      icon: Cpu,
      accent: "text-accent",
      skills: [
        { name: "MongoDB", level: 84 },
        { name: "MySQL", level: 88 },
        { name: "Git / GitHub", level: 92 },
        { name: "VS Code Architecture", level: 95 }
      ],
    },
    {
      title: "Soft Leadership",
      icon: Users2,
      accent: "text-primary",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 98 },
        { name: "Teamwork", level: 92 },
        { name: "Time Management", level: 90 }
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-transparent">
      {/* Dynamic Glow Background */}
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-0 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] bg-accent/10 blur-[120px] rounded-full -z-0 animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.5em] uppercase font-bold px-2 py-1 bg-accent/5 rounded-md border border-accent/10">Technical Matrix</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight leading-[1.1]">
              Engineering<br />
              <span className="gradient-text italic">The Future</span>
            </h2>
          </div>
          <div className="lg:max-w-md space-y-4">
            <p className="text-muted-foreground/80 text-lg font-light leading-relaxed">
              A precise synthesis of modern engineering capabilities, spanning from fundamental programming to complex full-stack systems and data-driven insights.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className={index === 0 ? "lg:col-span-2" : ""}>
               <SkillCategory category={category} index={index} />
            </div>
          ))}
        </div>

        {/* Global Statistics Grid */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Systems Built", value: "15+", icon: Cpu, desc: "End-to-End Architectures" },
              { label: "Global Reach", value: "India", icon: Globe, desc: "Strategic Development" },
              { label: "Startup Nodes", value: "3+", icon: Rocket, desc: "Active Ventures" },
              { label: "Performance", value: "95%", icon: Target, desc: "Code Accuracy Range" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="p-8 glass-card rounded-[2rem] flex flex-col items-center text-center space-y-4 group hover:bg-white/[0.02]"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:text-accent transition-all duration-500 group-hover:scale-110">
                  <stat.icon className="w-6 h-6 text-accent/60 group-hover:text-accent" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-serif font-black text-foreground group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-[10px] font-sans tracking-[0.3em] uppercase text-accent font-bold">{stat.label}</div>
                </div>
                <p className="text-[10px] text-muted-foreground/50 font-light">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import { Rocket, Target } from "lucide-react";
