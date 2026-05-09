import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

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

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you shortly.",
        className: "bg-black border-white/10 text-white",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dilipkohar4320@gmail.com",
      href: "mailto:dilipkohar4320@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7080779516",
      href: "tel:+917080779516",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gandhinagar, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Consistent Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Connect</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Get in <span className="gradient-text italic">Touch</span>
            </h2>
          </div>
          <p className="text-muted-foreground/90 max-w-sm text-xs font-light leading-relaxed">
            Reach out for collaborations, technical inquiries, or to discuss how we can build something extraordinary.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Panel: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 space-y-10"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  <div className="text-muted-foreground group-hover:text-accent transition-colors duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground/80 font-semibold">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-lg md:text-xl font-serif text-foreground hover:text-accent transition-colors block">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg md:text-xl font-serif text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground/80 font-semibold mb-6">Social Network</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/dilipprajapati432" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-[60%]"
          >
            <div className="pt-2 md:pt-4">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-12 text-foreground font-light placeholder:text-muted-foreground/30 text-base shadow-none focus-visible:ring-0 focus-visible:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-12 text-foreground font-light placeholder:text-muted-foreground/30 text-base shadow-none focus-visible:ring-0 focus-visible:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-foreground font-light placeholder:text-muted-foreground/30 text-base shadow-none focus-visible:ring-0 focus-visible:border-accent resize-none min-h-[140px] transition-colors"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 bg-transparent border border-white/20 text-white hover:bg-transparent hover:border-accent hover:text-accent rounded-none font-sans text-[10px] uppercase tracking-[0.3em] font-bold transition-colors flex items-center justify-center gap-4 group px-12"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
