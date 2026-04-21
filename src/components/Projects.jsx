import { Github, ExternalLink, ArrowUpRight, FolderCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ResumeIQ — ATS Resume",
    description: "AI-powered recruitment tool analyzing resumes against JDs with optimization scores and technical feedback.",
    tags: ["React", "Flask", "Python"],
    github: "https://github.com/dilipprajapati432/ResumeIQ-ATS-Resume-Checker",
    demo: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MedBot AI Assistant",
    description: "Medical chatbot designed for preliminary health diagnostics and automated consultations using NLP.",
    tags: ["Flask", "NLP", "Python"],
    github: "https://github.com/dilipprajapati432/MedBot-AI-medical-assistant",
    demo: "#",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Crop Disease Detector",
    description: "Deep Learning project utilizing image classification to detect plant diseases based on the PlantVillage dataset.",
    tags: ["AI", "Python", "CNN"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1530836361253-efad5cb2fe20?q=80&w=2070&auto=format&fit=crop",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Selected <span className="gradient-text italic">Works</span>
            </h2>
          </div>
          
          <Button variant="outline" className="rounded-xl border-white/5 bg-white/5 hover:bg-white/10 hover:border-accent/40 transition-all font-sans text-xs uppercase tracking-widest gap-2">
            View Archive <FolderCode className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card group rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-accent/30 flex flex-col shadow-2xl relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[2rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    className="p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-accent/20 hover:border-accent/50 transition-all"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    className="p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-accent/20 hover:border-accent/50 transition-all"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="px-8 pb-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-sans font-bold uppercase tracking-wider text-accent/80 bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-between group/link"
                  >
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-muted-foreground/50 group-hover/link:text-accent transition-colors">Project_Details</span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground/50 group-hover/link:text-accent group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full" />
    </section>
  );
};

