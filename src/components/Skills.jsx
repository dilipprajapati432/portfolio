import { Database, Brain, Users2, Cpu, Globe, Rocket, Target, TerminalSquare, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const SkillItem = ({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="group/skill flex flex-col space-y-2 py-3"
  >
    <div className="flex justify-between items-center">
      <span className="text-[13px] font-sans font-medium text-muted-foreground/90 group-hover/skill:text-white transition-colors duration-300">{name}</span>
      <span className="text-[10px] font-sans tracking-widest text-accent font-bold">{level}%</span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-900 to-accent rounded-full"
      >
        {/* Glowing Head */}
        <div className="absolute right-0 top-0 w-2 h-full bg-white opacity-50 rounded-full blur-[1px]" />
      </motion.div>
    </div>
  </motion.div>
);

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden h-full p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/5 hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col"
    >
      {/* Subtle Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="flex items-center gap-5 mb-8 relative z-10">
        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.08] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-500">
          <category.icon className="w-6 h-6 text-accent drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">{category.title}</h3>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        {category.skills.map((skill, i) => (
          <SkillItem key={i} name={skill.name} level={skill.level} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: TerminalSquare,
    skills: [
      { name: "Java", level: 82 },
      { name: "Python", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "HTML5/CSS3", level: 88 }
    ],
  },
  {
    title: "Web Development",
    icon: Database,
    skills: [
      { name: "React.js", level: 82 },
      { name: "Node.js / Express", level: 75 },
      { name: "Socket.io", level: 70 },
      { name: "Tailwind CSS", level: 84 }
    ],
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    skills: [
      { name: "Pandas", level: 76 },
      { name: "NumPy", level: 74 },
      { name: "Matplotlib", level: 72 },
      { name: "Data Analysis", level: 80 }
    ],
  },
  {
  title: "Cloud, Database & Tools",
  icon: Cpu,
  skills: [
    { name: "AWS Cloud", level: 72 },
    { name: "MongoDB", level: 72 },
    { name: "MySQL", level: 82 },
    { name: "Git / GitHub", level: 84 },
    { name: "Deployment", level: 70 }
  ],
},

  {
    title: "Soft Skills",
    icon: Users2,
    skills: [
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 88 },
      { name: "Teamwork", level: 82 },
      { name: "Leadership", level: 78 }
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-transparent">
      <div className="container mx-auto px-6">

        {/* Consistent Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Technical Matrix</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
              Engineering <span className="gradient-text italic">Capabilities</span>
            </h2>
          </div>
          <p className="text-muted-foreground/90 max-w-sm text-sm font-light leading-relaxed">
            A precise synthesis of modern engineering capabilities and data-driven insights.
          </p>
        </div>

        {/* Centered Wrap Grid for exactly 5 items */}
        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <CategoryCard category={category} index={index} />
            </div>
          ))}
        </div>

        {/* Minimal Stats */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Built", value: "10+", icon: Cpu, desc: "Full-Stack Applications" },
              { label: "LeetCode & Codeforces Solved", value: "80+", icon: Target, desc: "Algorithmic Challenges", href: "https://leetcode.com/u/dilipprajapati4320/" },
              { label: "Current CGPA", value: "7.76", icon: Brain, desc: "Academic Performance" },
              { label: "Academic Year", value: "Final", icon: Globe, desc: "B.Tech Undergrad" }
            ].map((stat, i) => {
              const CardContent = (
                <>
                  <stat.icon className={`w-5 h-5 ${stat.href ? 'text-accent group-hover:scale-110 transition-transform' : 'text-accent/50'}`} />
                  <div>
                    <div className="flex items-start justify-center md:justify-center gap-2">
                      <div className="text-3xl font-serif font-light text-foreground">{stat.value}</div>
                      {stat.href && <ExternalLink className="w-3 h-3 text-accent/70 -mt-1 group-hover:text-accent transition-colors" />}
                    </div>
                    <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.href ? (
                    <a 
                      href={stat.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex flex-col space-y-4 items-start md:items-center text-left md:text-center cursor-pointer hover:bg-white/[0.02] p-4 rounded-2xl transition-colors -m-4"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div className="flex flex-col space-y-4 items-start md:items-center text-left md:text-center">
                      {CardContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
