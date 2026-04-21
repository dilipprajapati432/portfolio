import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight, FolderCode, Sparkles, Code2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const featuredProjects = [
  {
    title: "ResumeIQ – AI ATS Optimizer",
    category: "Intelligence",
    description: "Full-stack ATS resume optimizer using React, Node.js, and Express. Integrated Gemini and Llama models for AI-based scoring, keyword analysis, and improvement tips.",
    tags: ["React", "Node.js", "Express", "AI", "Gemini"],
    github: "https://github.com/dilipprajapati432/ResumeIQ-AI-ATS-Optimizer.git",
    demo: "https://resumeiqscan.vercel.app",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "BizEngine – AI Decision Engine",
    category: "Intelligence",
    description: "AI-driven system using React and Python for business data analysis. Integrated Gemini and Groq LLMs for insights and applied linear regression for predictive analytics.",
    tags: ["React", "Python", "AI", "ML", "Business"],
    github: "https://github.com/dilipprajapati432/BizEngine-AI-Powered-Business-Decision-Engine.git",
    demo: "https://bizengine-ai.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "BeatChat – Real-Time Chat",
    category: "Communication",
    description: "Real-time chat application using React, Node.js, Express, MongoDB, and Socket.io. Implemented messaging, authentication, and user presence features.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    github: "https://github.com/dilipprajapati432/dilip-kohar-portfolio.git",
    demo: "https://beatchat.vercel.app",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
  },
];

const secondaryProjects = [
  {
    title: "BhatBhateni E-Commerce",
    category: "Web System",
    description: "A fully responsive e-commerce platform featuring product listings, shopping cart functionality, and dynamic user interface focusing on user experience.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    github: "https://github.com/dilipprajapati432/BhatBhateni-Ecommerce-Site",
    demo: "https://bhatbhateni-ecommerce-site.netlify.app/",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Spotify UI Clone",
    category: "Frontend UI",
    description: "Pixel-perfect recreation of Spotify's user interface to practice frontend development skills. Focus on component architecture and responsive layouts.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    github: "https://github.com/dilipprajapati432/Spotify-Clone",
    demo: "https://spotify-ui-clone-appfront.netlify.app/",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "To-Do List Web App",
    category: "System Tool",
    description: "Responsive task management app with Flask backend and MySQL database for user-specific task storage and authentication.",
    tags: ["Flask", "MySQL", "JavaScript", "CRUD"],
    github: "https://github.com/dilipprajapati432/My-To-Do-List",
    demo: "https://my-to-do-list-projec.netlify.app/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
  },
];

export const Projects = () => {
  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card group rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-accent/30 flex flex-col shadow-2xl relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[2rem] group/img">
        {/* Twinkling Sparkles on Image Corner */}
        <motion.div 
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-2 right-2 z-10 pointer-events-none"
        >
          <Sparkles className="w-4 h-4 text-accent/60" />
        </motion.div>

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
            target="_blank"
            className="p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-accent/20 hover:border-accent/50 transition-all"
          >
            <ExternalLink className="w-6 h-6 text-white" />
          </motion.a>
        </div>

        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md bg-accent/5 text-accent/90 border-accent/30">
            {project.category}
          </span>
        </div>
      </div>

      <div className="px-8 pb-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tIdx) => (
              <span key={tIdx} className="text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border text-accent/90 bg-accent/5 border-accent/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground/90 text-sm leading-relaxed font-light line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="pt-6 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center justify-between group/link"
          >
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-muted-foreground/90 group-hover/link:text-accent transition-colors">Project_Details</span>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground/90 group-hover/link:text-accent group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
          </a>
        </div>
      </div>
    </motion.div>
  );

  const SmallProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, borderColor: "rgba(34, 211, 238, 0.3)" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-[2rem] border border-white/5 flex flex-col justify-between gap-6 transition-all group"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="p-2.5 bg-white/5 rounded-xl text-primary group-hover:text-accent transition-colors">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex gap-3">
            <a href={project.github} target="_blank" className="p-2 bg-white/5 rounded-lg text-muted-foreground/60 hover:text-accent hover:bg-accent/20 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href={project.demo} target="_blank" className="p-2 bg-white/5 rounded-lg text-muted-foreground/60 hover:text-accent hover:bg-accent/20 transition-all">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors mb-2 leading-tight">
            {project.title}
          </h4>
          <p className="text-sm text-muted-foreground/90 leading-relaxed line-clamp-2 font-light">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
        {project.tags.map((tag, tIdx) => (
          <span key={tIdx} className="text-[9px] font-sans font-bold uppercase tracking-wider text-muted-foreground/90 bg-white/5 px-2 py-1 rounded-md border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Portfolios</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Featured <span className="gradient-text italic">Intelligence</span>
            </h2>
          </div>

          <p className="text-muted-foreground/90 max-w-sm text-sm font-light leading-relaxed">
            High-impact systems bridging AI research with production-grade engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-4">
            <FolderCode className="w-5 h-5 text-accent/90" />
            <h3 className="text-xs font-sans tracking-[0.4em] uppercase font-bold text-accent/90">Other Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project, index) => (
              <SmallProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full" />
    </section>
  );
};

