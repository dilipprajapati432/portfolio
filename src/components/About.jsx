import { GraduationCap, MapPin, BadgeCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const highlights = [
    {
      label: "Education",
      value: "B.Tech CSE",
      subValue: "Final Year",
      icon: GraduationCap,
      accent: "text-primary"
    },
    {
      label: "Academic Merit",
      value: "7.76 CGPA",
      subValue: "PDEU University",
      icon: BadgeCheck,
      accent: "text-accent"
    },
    {
      label: "Current Base",
      value: "Gandhinagar",
      subValue: "Gujarat, India",
      icon: MapPin,
      accent: "text-primary"
    },
  ];

  return (
    <section id="about" className="section-padding bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
                About <span className="gradient-text italic">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-accent glow-cyan rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Hi, I’m <span className="text-foreground font-medium italic underline decoration-accent/30 decoration-2 underline-offset-4">Dilip Kohar</span>, a Computer Engineering student and aspiring Full Stack Developer passionate about building modern web applications and exploring Artificial Intelligence.
              <br/>

              I enjoy turning ideas into real-world projects and creating clean, responsive, and user-friendly digital experiences. I’m continuously improving my skills in web development, problem-solving, and modern technologies while exploring the world of AI and Machine Learning.
              <br/>

              Beyond coding, I enjoy exploring new places, travelling, and reading religious and philosophical books, as these pursuits inspire deep thinking, groundedness, and continuous learning in both my personal and professional journey.
              <br/>

              I’m currently focused on growing as a software developer, building impactful projects, and preparing for exciting opportunities in the tech industry.
            </p>

            <div className="p-8 glass-card rounded-3xl border-white/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Sparkles className="w-12 h-12 text-accent" />
              </div>
              
              <p className="text-base text-foreground italic leading-relaxed relative z-10">
                "I thrive at the intersection of technical complexity and aesthetic simplicity,
                striving to turn abstract logic into seamless digital reality."
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards Grid */}
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden bg-white/[0.02] backdrop-blur-2xl p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between min-h-[220px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${i === 2 ? 'sm:col-span-2' : ''}`}
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex justify-between items-start relative z-10">
                  <div className={`p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.08] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-500 ${item.accent}`}>
                    <item.icon className="w-6 h-6 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-muted-foreground/50 uppercase mt-2 group-hover:text-muted-foreground transition-colors duration-500">{item.label}</span>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif text-white font-bold tracking-tight">{item.value}</h3>
                  <p className="text-[11px] font-sans tracking-[0.2em] text-accent/80 uppercase font-bold">{item.subValue}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-[-5%] w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full" />
    </section>
  );
};

