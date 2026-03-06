import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import profileImg from "@/assets/kern-profile.png";

const HeroSection = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary-foreground/70 font-body text-sm tracking-widest uppercase mb-4">
              Epidemiologist · Data Analyst · R Shiny Developer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Kern Rocke
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Researcher and international consultant specializing in public health data science, 
              spatial epidemiology, and interactive dashboard development across the Caribbean.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <a href="#projects" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-display font-medium px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                Get In Touch
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/kern-rocke-168b5636/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/kernrocke" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Github size={22} />
              </a>
              <a href="mailto:kernrocke@gmail.com" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
                <img src={profileImg} alt="Kern Rocke" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-secondary/40 -z-10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors animate-bounce block">
            <ArrowDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
