import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Your message has been received. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Secure_Channel",
      value: "dilipkohar4320@gmail.com",
      href: "mailto:dilipkohar4320@gmail.com",
      accent: "text-primary"
    },
    {
      icon: Phone,
      label: "Direct_Line",
      value: "+91 7080779516",
      href: "tel:+917080779516",
      accent: "text-accent"
    },
    {
      icon: MapPin,
      label: "Origin_Node",
      value: "Gandhinagar, India",
      href: null,
      accent: "text-primary"
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary glow-cyan" />
              <span className="text-primary font-sans text-xs tracking-[0.4em] uppercase font-semibold">Ready to Sync</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Get in <span className="gradient-text italic">Touch</span>
            </h2>
          </div>
          <p className="text-muted-foreground/60 max-w-sm text-sm font-light leading-relaxed">
            Initialize correspondence for technical collaborations, architectural audits, or general inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-3xl border border-white/5 flex items-center gap-8 group hover:border-accent/30 transition-all duration-500"
                >
                   <div className="p-5 rounded-2xl bg-white/5 group-hover:bg-accent/10 transition-colors duration-500 shadow-2xl">
                      <info.icon className={`w-6 h-6 ${info.accent} group-hover:scale-110 transition-transform`} />
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground/40">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-serif font-bold text-foreground hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-serif font-bold text-foreground">{info.value}</p>
                      )}
                   </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 glass-card rounded-3xl border border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex gap-4">
                    {[
                        { icon: Github, href: "https://github.com/dilipprajapati432" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" }
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="p-4 bg-background border border-white/5 rounded-2xl text-muted-foreground hover:text-accent hover:border-accent/40 transition-all shadow-xl"
                        >
                            <social.icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mb-1">Social_Nodes</p>
                    <p className="text-xs text-foreground font-medium">@dilipprajapati</p>
                </div>
            </div>
          </div>

          {/* Right: Message Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-10 md:p-16 rounded-[3rem] border border-white/5 relative group"
          >
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-accent/60 ml-1">Identity</label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 focus:border-accent/40 focus:ring-accent/10 h-16 px-8 rounded-2xl text-foreground font-light placeholder:text-muted-foreground/30 transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-accent/60 ml-1">Relay_Path</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 focus:border-accent/40 focus:ring-accent/10 h-16 px-8 rounded-2xl text-foreground font-light placeholder:text-muted-foreground/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-accent/60 ml-1">Message_Buffer</label>
                <Textarea
                  placeholder="Sync your thoughts..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 focus:border-accent/40 focus:ring-accent/10 p-8 rounded-[2rem] resize-none text-foreground font-light placeholder:text-muted-foreground/30 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-background py-10 text-xs font-bold uppercase tracking-[0.5em] rounded-[2rem] shadow-[0_20px_40px_rgba(34,211,238,0.2)] hover:shadow-accent/40 transition-all duration-500 flex items-center justify-center gap-4 group/btn overflow-hidden relative"
              >
                <motion.div 
                    animate={isSubmitting ? { x: [0, 400], opacity: [1, 0] } : {}}
                    className="flex items-center gap-4"
                >
                    {isSubmitting ? "Transmitting..." : "Initialize Relay"} 
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.div>
                <div className="absolute top-0 right-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-shimmer" />
              </Button>
            </form>

            <div className="absolute top-4 right-8 opacity-10">
                <Sparkles className="w-12 h-12 text-accent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

