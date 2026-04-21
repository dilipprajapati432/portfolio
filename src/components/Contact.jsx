import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, Terminal, ShieldCheck, Activity } from "lucide-react";
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with a premium tech feel
    setTimeout(() => {
      toast({
        title: "TRANS_COMPLETE: Buffer Synced",
        description: "Your data has been successfully relayed through the secure node.",
        className: "bg-[#0F172A] border-[#22D3EE]/20 text-foreground shadow-[0_0_20px_rgba(34,211,238,0.1)]",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "secure_channel",
      value: "dilipkohar4320@gmail.com",
      href: "mailto:dilipkohar4320@gmail.com",
    },
    {
      icon: Phone,
      label: "direct_line",
      value: "+91 7080779516",
      href: "tel:+917080779516",
    },
    {
      icon: MapPin,
      label: "origin_node",
      value: "Gandhinagar, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[#0F172A] relative overflow-hidden min-h-screen flex items-center">
      {/* Premium Futuristic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Cursor Light - Balanced Blur */}
        <div
          className="fixed w-[500px] h-[500px] bg-[#22D3EE]/[0.02] blur-[150px] rounded-full opacity-40 mix-blend-screen transition-opacity duration-1000"
          style={{
            left: mousePos.x - 250,
            top: mousePos.y - 250,
          }}
        />

        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #22D3EE 1px, transparent 0)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-16 bg-[#22D3EE]/50 shadow-[0_0_10px_#22D3EE]" />
              <span className="text-[#22D3EE] font-sans text-xs tracking-[0.6em] uppercase font-bold">CONNECTIVITY_PROTOCOL</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter leading-tight">
              Get in <span className="gradient-text italic">Touch</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-sm text-base font-light leading-relaxed lg:border-l lg:border-white/10 lg:pl-10"
          >
            Initializing encrypted communication channel. Secure handshake established. Reach out for collaborations or technical inquiries.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* Left Panel: System Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <div className="glass-card flex-1 rounded-[2.5rem] border border-white/5 bg-slate-950/40 backdrop-blur-3xl overflow-hidden flex flex-col relative group transition-all duration-700 hover:border-[#22D3EE]/20 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]">
                {/* Visual Scanner Animation */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-scan" />

                {/* HUD Header / Mac-style window controls */}
                <div className="px-10 py-7 border-b border-white/5 flex items-center justify-between bg-white/[0.02] relative">
                  <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_12px_rgba(255,95,86,0.6)]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_12px_rgba(255,189,46,0.6)]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_12px_rgba(39,201,63,0.6)]" />
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 opacity-60">
                    <Terminal className="w-4 h-4 text-slate-500" />
                    <span className="text-[10px] font-sans font-black tracking-[0.4em] text-slate-400 uppercase">SYSTEM_CORE</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]"
                    />
                    <span className="text-[10px] font-sans font-bold text-[#22D3EE] uppercase tracking-widest">ONLINE</span>
                  </div>
                </div>

                {/* System Modules */}
                <div className="p-8 md:p-10 space-y-8 flex-1">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-6 group/node"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-500 group-hover/node:text-[#22D3EE] group-hover/node:bg-[#22D3EE]/5 group-hover/node:border-[#22D3EE]/20 transition-all duration-500 shadow-xl">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-slate-500">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-lg md:text-xl font-serif font-semibold text-white/90 hover:text-[#22D3EE] transition-colors tracking-tight block">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg md:text-xl font-serif font-semibold text-white/90 tracking-tight">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* HUD Footer */}
                <div className="p-8 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/dilipprajapati432" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        whileHover={{ y: -3, scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.05)", color: "#22D3EE" }}
                        className="p-3 bg-slate-900/60 border border-white/5 rounded-xl text-slate-500 transition-all shadow-xl hover:border-[#22D3EE]/20"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-[9px] font-sans font-black uppercase tracking-[0.3em] text-slate-500 mb-1 leading-none">NODE_REACH</p>
                    <p className="text-base text-white/80 font-medium tracking-tight">@dilipprajapati</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Panel: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="glass-card h-full rounded-[2.5rem] border border-white/5 bg-slate-950/40 backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl relative hover:border-[#22D3EE]/10 transition-all duration-700">
                {/* HUD Header / Mac-style window controls */}
                <div className="px-10 py-7 border-b border-white/5 flex items-center justify-between bg-white/[0.02] relative">
                  <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_12px_rgba(255,95,86,0.6)]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_12px_rgba(255,189,46,0.6)]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_12px_rgba(39,201,63,0.6)]" />
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 opacity-60">
                    <Send className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[10px] font-sans font-black tracking-[0.4em] text-slate-400 uppercase">COMMS_TERMINAL</span>
                  </div>

                  <div className="flex items-center gap-4 opacity-40">
                    <div className="w-1 h-3.5 bg-[#22D3EE]/40 rounded-full" />
                    <Activity className="w-5 h-5 text-[#22D3EE]/20" />
                  </div>
                </div>

                <div className="p-10 md:p-12 flex-1 flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10 flex-1 flex flex-col justify-center">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3 group/input">
                        <label className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-[#22D3EE]/60 ml-1 group-focus-within/input:text-[#22D3EE] transition-colors">identity</label>
                        <Input
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-white/[0.01] border-white/5 focus:border-[#22D3EE]/30 focus:ring-0 h-14 px-6 rounded-xl text-base font-light transition-all duration-500 shadow-[inset_0_0_15px_rgba(34, 211, 238, 0.05)] placeholder:text-slate-600 outline-none"
                        />
                      </div>
                      <div className="space-y-3 group/input">
                        <label className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-[#22D3EE]/60 ml-1 group-focus-within/input:text-[#22D3EE] transition-colors">relay_path</label>
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-white/[0.01] border-white/5 focus:border-[#22D3EE]/30 focus:ring-0 h-14 px-6 rounded-xl text-base font-light transition-all duration-500 shadow-[inset_0_0_15px_rgba(34, 211, 238, 0.05)] placeholder:text-slate-600 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 group/input">
                      <label className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-[#22D3EE]/60 ml-1 group-focus-within/input:text-[#22D3EE] transition-colors">message_buffer</label>
                      <Textarea
                        placeholder="Input communication parameters..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-white/[0.01] border-white/5 focus:border-[#22D3EE]/30 focus:ring-0 p-6 rounded-[1.5rem] resize-none text-base font-light transition-all duration-500 shadow-[inset_0_0_15px_rgba(34, 211, 238, 0.05)] min-h-[160px] placeholder:text-slate-600 outline-none"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-18 bg-gradient-to-r from-[#3B82F6]/80 to-[#22D3EE]/80 hover:from-[#3B82F6] hover:to-[#22D3EE] text-slate-950 font-bold uppercase tracking-[0.4em] rounded-[1.25rem] shadow-[0_15px_40px_-10px_rgba(34,211,238,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(34,211,238,0.4)] transition-all duration-500 flex items-center justify-center gap-4 group/btn overflow-hidden relative border border-white/10"
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                              <span className="text-sm uppercase tracking-widest">Relaying...</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="normal"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-4"
                            >
                              <span className="text-sm uppercase tracking-widest">Initialize Transmission</span>
                              <Send className="w-5 h-5 transition-transform group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="p-10 border-t border-white/5 flex justify-between items-center text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22D3EE]/30 animate-pulse" />
                    <span className="text-[11px] font-sans font-black uppercase tracking-[0.4em]">AES-256_STABLE</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em]">v1.2.0_Secure</span>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map(bit => (
                        <div key={bit} className="w-3 h-0.5 bg-slate-500/10 rounded-full" />
                      ))}
                    </div>
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

export default Contact;
