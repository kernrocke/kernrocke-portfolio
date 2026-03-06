import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  { period: "Oct – Dec 2025", role: "International Consultant & Epidemiologist", org: "PAHO (Jamaica Country Office)", summary: "Health Labour Market Analysis including HRH policy desk review and stakeholder mapping." },
  { period: "Aug 2021 – Dec 2025", role: "International Consultant", org: "PAHO – Comprehensive Immunization Program", summary: "Regional focal point for vaccine safety surveillance (ESAVI/AESI) across 23 English-speaking Caribbean countries." },
  { period: "Mar 2023 – Dec 2025", role: "Data/Statistical Analyst", org: "Barbados National Registry", summary: "Data analysis and report generation for CVD and cancer registry data." },
  { period: "Apr 2020 – Jul 2021", role: "Consultant Trainer", org: "WHO GOARN, Switzerland", summary: "GIS/COVID-19 mapping training across Europe, Americas & Caribbean." },
  { period: "Jul 2019 – Jul 2021", role: "Epidemiologist / Research Analyst", org: "GA-CDRC, Barbados", summary: "Research on chronic conditions, census data and geographic analysis." },
  { period: "Feb 2017 – Aug 2019", role: "Statistical Consultant", org: "CARICOM Secretariat, Guyana", summary: "Statistical analysis of employment engagement and satisfaction surveys." },
  { period: "Sep 2014 – May 2017", role: "Lecturer & Researcher", org: "UWI, Trinidad", summary: "Development of research and epidemiology courses; health-related data analysis." },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-12"
              >
                <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase size={10} className="text-primary-foreground" />
                </div>
                <p className="text-xs text-muted-foreground font-medium mb-1">{exp.period}</p>
                <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                <p className="text-primary text-sm font-medium">{exp.org}</p>
                <p className="text-muted-foreground text-sm mt-1">{exp.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
