import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding hero-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase text-primary-foreground/60 font-display font-semibold mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-12">
            Available for consultancy in epidemiology, data analysis, R Shiny development, 
            and public health informatics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
            <Mail size={24} className="text-secondary mx-auto mb-3" />
            <p className="text-primary-foreground text-sm font-medium">kernrocke@gmail.com</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
            <Phone size={24} className="text-secondary mx-auto mb-3" />
            <p className="text-primary-foreground text-sm font-medium">+1 (246) 838-8937</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
            <MapPin size={24} className="text-secondary mx-auto mb-3" />
            <p className="text-primary-foreground text-sm font-medium">Barbados, W.I.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="https://www.linkedin.com/in/kern-rocke-168b5636/" target="_blank" rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/kernrocke" target="_blank" rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Github size={28} />
          </a>
          <a href="mailto:kernrocke@gmail.com"
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Mail size={28} />
          </a>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Kern Rocke. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
