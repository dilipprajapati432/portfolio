import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, Terminal, ShieldCheck, Activity, Cpu, Globe, Database } from "lucide-react";
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

    setTimeout(() => {
      toast({
        title: "TRANS_COMPLETE: Buffer Synced",
        description: "Your data has been successfully relayed through the secure node.",
        className: "bg-[#020617] border-cyan-500/20 text-white shadow-[0_0_20px_rgba(34,211,238,0.1)]",
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
    <section id="contact" className="section-padding bg-transparent relative overflow-hidden min-h-[70vh] flex items-center selection:bg-cyan-500/30">
      {/* Premium Futuristic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="fixed w-[600px] h-[600px] bg-cyan-500/[0.04] blur-[150px] rounded-full opacity-40 mix-blend-screen transition-opacity duration-1000"
          style={{
            left: mousePos.x - 300,
            top: mousePos.y - 300,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-radial-at-t from-cyan-500/5 via-transparent to-transparent opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-cyan-500 shadow-[0_0_10px_#22D3EE]" />
              <span className="text-cyan-400 font-sans text-[10px] tracking-[0.8em] uppercase font-black">CONNECTIVITY_PROTOCOL</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter leading-tight drop-shadow-2xl">
              Get in <span className="text-cyan-400 italic">Touch</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-sm text-sm font-light leading-relaxed lg:border-l lg:border-white/10 lg:pl-8"
          >
            Initializing encrypted communication channel. Secure handshake established. Reach out for collaborations or technical inquiries.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 items-stretch">
            {/* Left Panel: System Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 lg:max-w-[500px]"
            >
              <div className="glass-card flex-1 rounded-3xl border border-white/10 bg-slate-900/10 backdrop-blur-3xl overflow-hidden flex flex-col relative group transition-all duration-1000">
                {/* Visual Scanner */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-40 group-hover:animate-scan z-20" />

                {/* HUD Header */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.03] relative z-10">
                  <div className="flex gap-2.5">
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_12px_rgba(255,95,86,0.6)] cursor-pointer" />
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_12px_rgba(255,189,46,0.6)] cursor-pointer" />
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_12px_rgba(39,201,63,0.6)] cursor-pointer" />
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 opacity-60">
                    <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                    <span className="text-[10px] font-sans font-black tracking-[0.4em] text-slate-300 uppercase">SYSTEM_CORE</span>
                  </div>

                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]"
                  />
                </div>

                {/* System Modules */}
                <div className="p-8 space-y-6 flex-1">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 group/node"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center text-slate-500 group-hover/node:text-cyan-400 group-hover/node:bg-cyan-500/10 group-hover/node:border-cyan-500/30 transition-all duration-700 shadow-inner">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 fle-1">
                        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-cyan-500/50">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-lg md:text-xl font-serif font-bold text-white/90 hover:text-cyan-300 transition-colors tracking-tight block">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg md:text-xl font-serif font-bold text-white/90 tracking-tight">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* HUD Footer */}
                <div className="p-6 bg-slate-950/40 border-t border-white/5 flex items-center justify-between backdrop-blur-xl">
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/dilipprajapati432" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        whileHover={{ y: -4, scale: 1.1, color: "#22D3EE" }}
                        className="p-3 bg-slate-900 border border-white/5 rounded-xl text-slate-500 transition-all"
                      >
                        <social.icon className="w-5 h-5 shadow-2xl" />
                      </motion.a>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-sans font-black uppercase tracking-[0.3em] text-cyan-500/40 mb-1 leading-none">NODE_REACH</p>
                    <p className="text-base text-white/80 font-serif italic tracking-tighter">@dilipprajapati</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Panel: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 lg:max-w-[500px]"
            >
              <div className="glass-card h-full rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl relative hover:border-cyan-500/20 transition-all duration-1000 group">
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.03] relative">
                  <div className="flex gap-2.5">
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_12px_rgba(255,95,86,0.6)] cursor-pointer" />
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_12px_rgba(255,189,46,0.6)] cursor-pointer" />
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_12px_rgba(39,201,63,0.6)] cursor-pointer" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 opacity-60">
                    <Send className="w-3.5 h-3.5 text-cyan-500" />
                    <span className="text-[10px] font-sans font-black tracking-[0.4em] text-slate-300 uppercase">COMMS_TERMINAL</span>
                  </div>
                  <Activity className="w-5 h-5 text-cyan-500/20 group-hover:text-cyan-500 transition-colors" />
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10 flex-1 flex flex-col justify-center">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3 group/input">
                        <div className="flex items-center justify-between ml-1">
                          <label className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-slate-500 group-focus-within/input:text-cyan-400 transition-colors italic">identity</label>
                          <Cpu className="w-3 h-3 text-slate-800 group-focus-within/input:text-cyan-500/40" />
                        </div>
                        <Input
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-slate-950 border-white/5 focus:border-cyan-500/50 focus:ring-0 h-12 px-6 rounded-xl text-white font-light transition-all duration-500 shadow-[inset_0_2px_15px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(34,211,238,0.05)] placeholder:text-slate-600 outline-none"
                        />
                      </div>
                      <div className="space-y-3 group/input">
                        <div className="flex items-center justify-between ml-1">
                          <label className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-slate-500 group-focus-within/input:text-cyan-400 transition-colors italic">relay_path</label>
                          <Globe className="w-3 h-3 text-slate-800 group-focus-within/input:text-cyan-500/40" />
                        </div>
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-slate-950 border-white/5 focus:border-cyan-500/50 focus:ring-0 h-12 px-6 rounded-xl text-white font-light transition-all duration-500 shadow-[inset_0_2px_15px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(34,211,238,0.05)] placeholder:text-slate-600 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 group/input">
                      <div className="flex items-center justify-between ml-1">
                        <label className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-slate-500 group-focus-within/input:text-cyan-400 transition-colors italic">message_buffer</label>
                        <Database className="w-3 h-3 text-slate-800 group-focus-within/input:text-cyan-500/40" />
                      </div>
                      <Textarea
                        placeholder="Input communication parameters..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-slate-950 border-white/5 focus:border-cyan-500/50 focus:ring-0 p-6 rounded-[1.5rem] resize-none text-white font-light transition-all duration-500 shadow-[inset_0_2px_15px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(34,211,238,0.05)] min-h-[160px] placeholder:text-slate-600 outline-none"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-18 bg-gradient-to-r from-cyan-600/90 to-blue-700/90 hover:from-cyan-500 hover:to-blue-600 text-slate-950 font-black uppercase tracking-[0.4em] rounded-2xl shadow-[0_20px_50px_-10px_rgba(34,211,238,0.3)] hover:shadow-[0_25px_60px_-10px_rgba(34,211,238,0.5)] transition-all duration-700 flex items-center justify-center gap-4 group/btn overflow-hidden relative"
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                              <span className="text-xs uppercase tracking-widest font-black">Syncing...</span>
                            </motion.div>
                          ) : (
                            <motion.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
                              <span className="text-xs uppercase tracking-[0.2em] font-black">Execute Transmission</span>
                              <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="p-8 bg-slate-950/60 border-t border-white/5 flex justify-between items-center text-slate-600">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-60 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    <span className="text-[11px] font-sans font-black uppercase tracking-[0.4em]">AES-256_STABLE</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">V1.5.0_PRO</span>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map(bit => (
                        <div key={bit} className="w-3.5 h-0.5 bg-slate-800 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
