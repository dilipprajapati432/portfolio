import { GraduationCap, Briefcase, Award, Download, ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import javaCert from "@/assets/Java_Certificate.pdf";
import aiCert from "@/assets/AI Essentials Workshop.jpeg";
import webCert from "@/assets/web development by ACM.pdf";
import hackCert from "@/assets/Ethical Hacking workshop.pdf";
import resumeFile from "@/assets/DilipKohar_Resume.pdf";

export const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Pandit Deendayal Energy University (PDEU)",
      location: "India",
      duration: "2023 — 2027",
      grade: "7.5 CGPA",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Siddhartha English Boarding School",
      location: "Nepal",
      duration: "2019 — 2021",
      grade: "3.19 GPA",
    },
  ];

  const experience = [
    {
      title: "Web Developer Intern",
      company: "InternPe",
      duration: "Aug 2024 — Sep 2024",
      details: "Engineered responsive frontend architectures and optimized cross-browser UI/UX dynamics.",
    },
  ];

  const coreCoursework = [
    "Object Oriented Programming",
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Organization",
    "AI Foundations",
  ];

  const certifications = [
    { name: "Java Programming", issuer: "LearnTube", year: "2024", link: javaCert },
    { name: "AI Essentials", issuer: "PDEU", year: "2024", link: aiCert },
    { name: "Web Development", issuer: "ACM-PDEU", year: "2023", link: webCert },
  ];

  return (
    <section id="resume" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Experience</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Career <span className="gradient-text italic">Timeline</span>
            </h2>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
                onClick={() => window.open(resumeFile, "_blank")}
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
                            <p className="text-accent text-sm font-medium uppercase tracking-widest">{exp.company}</p>
                            <p className="text-muted-foreground/90 text-sm leading-relaxed font-light">{exp.details}</p>
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
                    {certifications.map((cert, i) => (
                    <motion.a 
                        key={i} 
                        href={cert.link} 
                        target="_blank"
                        whileHover={{ x: 5 }}
                        className="glass-card p-6 rounded-2xl border border-white/5 flex items-center justify-between group"
                    >
                        <div className="space-y-1">
                            <h5 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{cert.name}</h5>
                            <p className="text-[10px] text-muted-foreground/75 uppercase tracking-widest">{cert.issuer} // {cert.year}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-all" />
                    </motion.a>
                    ))}
                </div>
            </div>

            {/* Coursework */}
            <div className="space-y-10">
                <div className="flex items-center gap-4 text-primary/60">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Coursework</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                    {coreCoursework.map((course, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                        <span className="text-xs font-sans text-muted-foreground group-hover:text-foreground transition-colors">{course}</span>
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


