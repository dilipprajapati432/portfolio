import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Particle = ({ delay }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0, scale: 0.5 }}
    animate={{
      y: "-10vh",
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1.2, 0.8],
      x: ["0vw", `${Math.random() * 20 - 10}vw`]
    }}
    transition={{
      duration: Math.random() * 5 + 5,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute w-1 h-1 bg-accent/20 rounded-full blur-[1px] pointer-events-none"
    style={{ left: `${Math.random() * 100}vw` }}
  />
);

export const SplashScreen = ({ onFinish }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onFinish, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    exit: {
      scale: 1.1,
      opacity: 0,
      filter: "blur(20px)",
      transition: { duration: 0.8, ease: "circIn" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[180px]"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <Particle key={i} delay={i * 0.7} />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        {/* SVG Branding Animation */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-12">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
              {/* Mask workaround for iOS Safari gradient animation bug */}
              <mask id="d-mask">
                <motion.path
                  d="M30 25 V75 C30 75 70 75 70 50 C70 25 30 25 30 25"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </mask>
            </defs>

            {/* D (Rendered via Mask to guarantee 60fps on mobile) */}
            <rect 
              x="25" y="20" width="50" height="60" 
              fill="url(#accent-grad)" 
              mask="url(#d-mask)" 
            />

            {/* P */}
            <motion.path
              d="M72 25 V75 M72 25 C95 25 95 50 72 50"
              fill="transparent"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>

          {/* Orbital Rings */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0.1 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute inset-0 border border-white rounded-full blur-[2px]"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-10px] border-t border-accent/30 rounded-full"
          />
        </div>

        {/* Identity Reveal */}
        <div className="text-center space-y-6">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-serif font-black tracking-tight text-foreground uppercase"
            >
              DILIP <span className="gradient-text">PRAJAPATI</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 1.0, ease: "easeInOut" }}
            className="h-[1px] w-48 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-[10px] font-sans font-bold tracking-[0.6em] text-accent/60 uppercase"
          >
            Digital Experience // 2026
          </motion.p>
        </div>
      </div>

      {/* Modern Latency/Progress Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64">
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 right-10 flex items-center gap-4 text-[10px] font-sans font-bold tracking-widest text-white uppercase"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        Initializing_Sequence
      </motion.div>
    </motion.div>
  );
};

