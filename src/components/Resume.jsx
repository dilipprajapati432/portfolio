import { GraduationCap, Briefcase, Award, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Pandit Deendayal Energy University (PDEU)",
      location: "Gujarat,India",
      duration: "2023 — 2027",
      grade: "7.5 CGPA",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Siddhartha English Boarding Secondary School",
      location: "Lumbini, Nepal",
      duration: "2019 — 2021",
      grade: "3.19 GPA",
    },
  ];

  const experience = [
    {
      title: "Web Developer Intern",
      company: "InternPe",
      duration: "Aug 2025 — Sep 2025",
      details: "Architected and developed four key web applications, including a custom Calculator, a feature-rich E-commerce platform, a dynamic To-Do system, and a Connect 4 strategy game. Leveraged modern frontend technologies to master responsive UI/UX principles and professional project lifecycles.",
    },
  ];

  const certifications = [
    { name: "AWS SimuLearn: Protecting Data at Rest", issuer: "AWS", year: "2026", link: "/documents/Protecting Data at Rest.pdf" },
    { name: "Building a Serverless API", issuer: "AWS", year: "2026", link: "/documents/Lab- Building A serverless API.pdf" },
    { name: "Java (Basic)", issuer: "HackerRank", year: "2026", link: "/documents/java_basic certificate.pdf" },
    { name: "Ethical Hacking Workshop", issuer: "IEEE Student Chapter, PDEU", year: "2025", link: "/documents/Ethical Hacking workshop.pdf" },
    { name: "Mastering the Web", issuer: "ACM PDEU", year: "2025", link: "/documents/web development by ACM.pdf" },
    { name: "AI Essentials", issuer: "PDEU Workshop", year: "2025", link: "/images/AI Essentials Workshop.jpeg" },
  ];

  return (
    <section id="resume" className="section-padding bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Experience</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
              Career <span className="gradient-text italic">Timeline</span>
            </h2>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open("/documents/DILIP_KOHAR_RESUME.pdf", "_blank")}
              className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 rounded-xl px-8 py-6 gap-3 transition-all"
            >
              <Download className="w-5 h-5 text-accent" />
              <span className="text-xs uppercase tracking-widest font-bold">Download CV</span>
            </Button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Timeline */}
          <div className="lg:col-span-8 space-y-16">
            {/* Education Section */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 text-accent/60">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Education</h3>
              </div>
              <div className="space-y-12 border-l-2 border-white/5 pl-8 ml-2">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent glow-cyan" />
                    <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h4 className="text-2xl font-serif font-bold text-foreground">{edu.degree}</h4>
                        <span className="text-xs font-sans text-accent bg-accent/10 px-3 py-1 rounded-full">{edu.duration}</span>
                      </div>
                      <p className="text-muted-foreground/90 font-light">{edu.institution} // {edu.location}</p>
                      <div className="pt-4 border-t border-white/5">
                        <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground/80 font-bold">Grade: {edu.grade}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 text-primary/60">
                <Briefcase className="w-5 h-5" />
                <h3 className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Experience</h3>
              </div>
              <div className="space-y-12 border-l-2 border-white/5 pl-8 ml-2">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h4 className="text-2xl font-serif font-bold text-foreground">{exp.title}</h4>
                        <span className="text-xs font-sans text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.duration}</span>
                      </div>
                      <p className="text-accent text-xs font-medium uppercase tracking-widest">{exp.company}</p>
                      <p className="text-muted-foreground/90 text-xs leading-relaxed font-light">{exp.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-4 space-y-16">
            {/* Certifications */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 text-accent/60">
                <Award className="w-5 h-5" />
                <h3 className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, i) => {
                  const isPlaceholder = cert.link === "#";
                  return (
                    <motion.a
                      key={i}
                      href={cert.link}
                      target={isPlaceholder ? "_self" : "_blank"}
                      onClick={(e) => {
                        if (isPlaceholder) e.preventDefault();
                      }}
                      whileHover={isPlaceholder ? {} : { x: 5 }}
                      className={`glass-card p-6 rounded-2xl border border-white/5 flex items-center justify-between group ${
                        isPlaceholder ? "cursor-default opacity-80" : "cursor-pointer"
                      }`}
                    >
                      <div className="space-y-1">
                        <h5 className="text-xs font-bold text-foreground group-hover:text-accent transition-colors">{cert.name}</h5>
                        <p className="text-[10px] text-muted-foreground/75 uppercase tracking-widest">{cert.issuer} // {cert.year}</p>
                      </div>
                      {!isPlaceholder && (
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-all" />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


