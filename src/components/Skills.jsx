import { Database, Brain, Users2, Cpu, Globe, Rocket, Target, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

const SkillItem = ({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="group flex flex-col space-y-3 py-3 border-b border-white/5 hover:border-accent/30 transition-colors"
  >
    <div className="flex justify-between items-center">
      <span className="text-sm font-light text-foreground/90 group-hover:text-accent transition-colors">{name}</span>
      <span className="text-xs font-sans text-muted-foreground">{level}%</span>
    </div>
    <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 h-full bg-accent/40 group-hover:bg-accent transition-colors"
      />
    </div>
  </motion.div>
);

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
    >
      <div className="flex items-center gap-4 mb-8">
        <category.icon className="w-5 h-5 text-accent/60" />
        <h3 className="text-xl font-serif text-foreground">{category.title}</h3>
      </div>
      <div className="space-y-1">
        {category.skills.map((skill, i) => (
          <SkillItem key={i} name={skill.name} level={skill.level} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Core Programming",
      icon: TerminalSquare,
      skills: [
        { name: "Java", level: 92 },
        { name: "Python", level: 95 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5/CSS3", level: 94 }
      ],
    },
    {
      title: "Full-Stack System",
      icon: Database,
      skills: [
        { name: "React.js", level: 91 },
        { name: "Node.js / Express", level: 86 },
        { name: "Socket.io", level: 82 },
        { name: "Tailwind CSS", level: 89 }
      ],
    },
    {
      title: "Data Intelligence",
      icon: Brain,
      skills: [
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 82 },
        { name: "Data Analysis", level: 90 }
      ],
    },
    {
      title: "Database & Cloud",
      icon: Cpu,
      skills: [
        { name: "MongoDB", level: 84 },
        { name: "MySQL", level: 88 },
        { name: "Git / GitHub", level: 92 },
        { name: "Deployment", level: 85 }
      ],
    },
    {
      title: "Strategic Impact",
      icon: Users2,
      skills: [
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 98 },
        { name: "Team Leadership", level: 92 },
        { name: "Agile/Scrum", level: 90 }
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Consistent Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Technical Matrix</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Engineering <span className="gradient-text italic">Capabilities</span>
            </h2>
          </div>
          <p className="text-muted-foreground/90 max-w-sm text-sm font-light leading-relaxed">
            A precise synthesis of modern engineering capabilities and data-driven insights.
          </p>
        </div>

        {/* Clean Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Minimal Stats */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Systems Built", value: "15+", icon: Cpu, desc: "End-to-End Architectures" },
              { label: "Global Reach", value: "India", icon: Globe, desc: "Strategic Development" },
              { label: "Startup Nodes", value: "3+", icon: Rocket, desc: "Active Ventures" },
              { label: "Performance", value: "95%", icon: Target, desc: "Code Accuracy Range" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4 items-start md:items-center text-left md:text-center"
              >
                <stat.icon className="w-5 h-5 text-accent/50" />
                <div>
                  <div className="text-3xl font-serif font-light text-foreground">{stat.value}</div>
                  <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
