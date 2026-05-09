import { GraduationCap, MapPin, BadgeCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const highlights = [
    { 
      label: "Education", 
      value: "B.Tech CSE", 
      subValue: "3rd Year",
      icon: GraduationCap,
      accent: "text-primary"
    },
    { 
      label: "Academic Merit", 
      value: "7.5 CGPA", 
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
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
                About <span className="gradient-text italic">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-accent glow-cyan rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              I am a dedicated <span className="text-foreground font-medium italic underline decoration-accent/30 decoration-2 underline-offset-4">Computer Science student</span> with a passion for building 
              intelligent, performant architectures. My journey involves exploring 
              generative AI models while maintaining a focus on pixel-perfect user experiences.
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
                className={`glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[220px] transition-all duration-300 ${i === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className={`p-4 bg-white/5 rounded-2xl ${item.accent}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-sans tracking-[0.4em] text-muted-foreground/90 uppercase">{item.label}</span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground font-semibold">{item.value}</h3>
                  <p className="text-xs text-muted-foreground/90">{item.subValue}</p>
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

