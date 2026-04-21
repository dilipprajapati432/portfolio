import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, Terminal, ShieldCheck, Activity } from "lucide-react";
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
        title: "Protocol_Success: Message Transmitted",
        description: "Your correspondence has been securely logged. Awaiting response.",
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
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-accent glow-cyan" />
              <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-semibold">Connectivity_Protocol</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Get in <span className="gradient-text italic">Touch</span>
            </h2>
          </div>

          <p className="text-muted-foreground/90 max-w-sm text-sm font-light leading-relaxed">
            Initializing encrypted communication channel. Secure handshake established. Reach out for collaborations or technical inquiries.
          </p>
        </div>

        <div className="max-w-6xl mx-auto pb-10">
          <div className="grid lg:grid-cols-10 gap-12 lg:gap-24 items-stretch">

            {/* Left: Information Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex flex-col gap-4"
            >
              <div className="glass-card flex-1 rounded-[1.2rem] border border-white/5 overflow-hidden flex flex-col relative group shadow-xl">
                {/* Card Header */}
                <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-3 h-3 text-accent" />
                    <span className="text-[8px] font-sans font-bold tracking-[0.2em] text-foreground uppercase">SYSTEM_CORE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                    <span className="text-[7px] font-sans font-bold text-accent uppercase tracking-widest">Online</span>
                  </div>
                </div>

                {/* Contact Nodes */}
                <div className="p-5 space-y-5 flex-1">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group/node">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-muted-foreground/40 group-hover/node:text-accent group-hover/node:border-accent/20 transition-all duration-300">
                        <info.icon className="w-3.5 h-3.5 transition-transform group-hover/node:scale-110" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[7px] font-sans font-bold uppercase tracking-[0.4em] text-muted-foreground/50">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm font-serif font-bold text-foreground hover:text-accent transition-colors tracking-tight block">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-serif font-bold text-foreground tracking-tight">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-white/[0.03] border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2.5">
                      {[
                        { icon: Github, href: "https://github.com/dilipprajapati432" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" }
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.href}
                          target="_blank"
                          whileHover={{ y: -2, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                          className="p-2.5 bg-background border border-white/5 rounded-lg text-muted-foreground/90 hover:text-accent transition-all shadow-md"
                        >
                          <social.icon className="w-3.5 h-3.5" />
                        </motion.a>
                      ))}
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-[7px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/50 mb-0.5 leading-none">NODE_REACH</p>
                      <p className="text-[9px] text-foreground font-medium">@dilipprajapati</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card px-5 py-3 rounded-xl border border-white/5 bg-accent/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Activity className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[7px] font-sans font-bold text-accent uppercase tracking-widest leading-none mb-1">Status</p>
                    <p className="text-[9px] text-foreground font-medium leading-none">Low Latency Active</p>
                  </div>
                </div>
                <ShieldCheck className="w-3.5 h-3.5 text-accent/30" />
              </div>
            </motion.div>

            {/* Right: Message Terminal Interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="glass-card h-full rounded-[1.2rem] border border-white/5 flex flex-col overflow-hidden group hover:border-accent/10 transition-all duration-500 shadow-2xl">
                {/* Terminal Header */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-2.5 h-2.5 text-accent/40" />
                    <span className="text-[7px] font-sans font-bold tracking-[0.4em] text-muted-foreground/30 uppercase">COMMS_LINK: ACTIVE</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5 group/input">
                        <label className="text-[8px] font-sans font-bold uppercase tracking-[0.3em] text-accent/70 ml-1">IDENTITY</label>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-white/[0.03] border-white/10 focus:border-accent/30 focus:ring-accent/5 h-11 px-4 rounded-lg text-xs font-light transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-1.5 group/input">
                        <label className="text-[8px] font-sans font-bold uppercase tracking-[0.3em] text-accent/70 ml-1">RELAY_PATH</label>
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-white/[0.03] border-white/10 focus:border-accent/30 focus:ring-accent/5 h-11 px-4 rounded-lg text-xs font-light transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 group/input">
                      <label className="text-[8px] font-sans font-bold uppercase tracking-[0.3em] text-accent/70 ml-1">MESSAGE_BUFFER</label>
                      <Textarea
                        placeholder="Sync your thoughts..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-white/[0.03] border-white/10 focus:border-accent/30 focus:ring-accent/5 p-4 rounded-lg resize-none text-xs font-light transition-all duration-300 min-h-[120px]"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-background py-6 text-[9px] font-bold uppercase tracking-[0.4em] rounded-lg shadow-lg hover:shadow-accent/20 transition-all duration-500 flex items-center justify-center gap-3 group/btn overflow-hidden relative"
                      >
                        <motion.div
                          animate={isSubmitting ? { x: [0, 400], opacity: [1, 0] } : {}}
                          className="flex items-center gap-3 relative z-10"
                        >
                          {isSubmitting ? "Transmitting..." : "Initialize Transmission"}
                          <Send className="w-3 h-3 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Form Footer Meta */}
                <div className="px-6 py-3 border-t border-white/5 bg-white/[0.01] flex justify-between items-center bg-white/[0.03] transition-colors">
                  <p className="text-[6px] font-sans font-bold text-muted-foreground/20 uppercase tracking-[0.3em]">Encryption: AES-256 Enabled</p>
                  <div className="flex gap-1">
                    <div className="w-1 h-1.5 bg-accent/20 rounded-full" />
                    <div className="w-1 h-1.5 bg-accent/40 rounded-full" />
                    <div className="w-1 h-1.5 bg-accent/10 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

