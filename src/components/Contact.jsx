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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "09e5aa64-07ed-42fe-8c16-d3aacf86665e",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for reaching out. I'll get back to you shortly.",
          className: "bg-black/90 border-accent/20 text-white backdrop-blur-xl",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Failed to Send",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not send the message. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dilipprajapati4320@gmail.com",
      href: "mailto:dilipprajapati4320@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone/WhatsApp",
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
    <section id="contact" className="section-padding bg-transparent relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Connect</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight drop-shadow-xl">
              Get in <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">Touch</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground/80 max-w-sm text-sm font-light leading-relaxed md:border-l border-white/5 md:pl-6"
          >
            Reach out for collaborations, technical inquiries, or to discuss how we can build something extraordinary together.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 items-start">

          {/* Left Panel: Contact Details (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="h-full rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-2xl py-12 px-8 flex flex-col justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="space-y-10 relative z-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-5 group/item cursor-default">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-foreground group-hover/item:text-accent group-hover/item:border-accent/40 group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover/item:scale-110 transition-all duration-500">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground/90 font-bold">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-lg md:text-xl font-serif text-foreground/90 hover:text-white transition-colors block drop-shadow-sm">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg md:text-xl font-serif text-foreground/90 drop-shadow-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </motion.div>

          {/* Right Panel: Immersive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-7/12"
          >
            <div className="h-full glass-card rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">

              {/* macOS Browser Header */}
              <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
                </div>
                <div className="flex-1 text-center mr-8">
                  <p className="text-[10px] font-sans text-muted-foreground/80 tracking-widest uppercase">Secure Connection</p>
                </div>
              </div>

              <div className="p-8 flex-1">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 group">
                      <label className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/90 ml-1 transition-colors group-focus-within:text-white">Name</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-black/30 border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent/60 rounded-xl px-5 h-14 text-white font-light placeholder:text-white/40 text-base shadow-inner transition-all duration-300 focus-visible:shadow-[0_0_15px_rgba(34,211,238,0.05)]"
                      />
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/90 ml-1 transition-colors group-focus-within:text-white">Email</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-black/30 border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent/60 rounded-xl px-5 h-14 text-white font-light placeholder:text-white/40 text-base shadow-inner transition-all duration-300 focus-visible:shadow-[0_0_15px_rgba(34,211,238,0.05)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/90 ml-1 transition-colors group-focus-within:text-white">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or inquiry..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-black/30 border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent/60 rounded-xl px-5 py-5 text-white font-light placeholder:text-white/40 text-base resize-none min-h-[160px] shadow-inner transition-all duration-300 focus-visible:shadow-[0_0_15px_rgba(34,211,238,0.05)]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 text-white rounded-xl font-sans text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 flex items-center justify-center gap-4 group hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-1"
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </motion.div>
                        ) : (
                          <motion.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:text-accent" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
