import { motion } from "framer-motion";
import { GraduationCap, MapPin, Globe, ExternalLink, Users } from "lucide-react";

const education = [
  { degree: "PhD in Epidemiology", school: "UWI, Cave Hill Campus, Barbados", period: "2019 – Present", focus: "Spatial Epidemiology & Geoinformatics" },
  { degree: "MSc Epidemiology", school: "UWI, Mona Campus, Jamaica", period: "2013 – 2014", focus: "" },
  { degree: "BSc (Hons) Human Nutrition & Dietetics", school: "UWI, St. Augustine, Trinidad", period: "2010 – 2013", focus: "" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Caribbean Researcher & Data Scientist
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am Kern Rocke, born in the twin island republic of Trinidad and Tobago, now residing in Barbados. 
              I am a researcher working at the George Alleyne Chronic Disease Research Centre (GA-CDRC) as a Research Associate, 
              and an international consultant focusing on vaccine safety surveillance at the Pan American Health Organization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My career spans multiple Caribbean nations and international organizations including PAHO/WHO, CARICOM, 
              and the World Bank. I specialize in building interactive data dashboards and analytical tools using R Shiny 
              to transform complex health data into actionable insights.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I have worked across Barbados, Jamaica, Trinidad & Tobago, Guyana, the United States, and Switzerland — 
              bringing data-driven solutions to public health challenges throughout the region.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a member of the executive team of{" "}
              <a href="https://caribbean.cochrane.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Cochrane Caribbean <ExternalLink size={12} />
              </a>{" "}
              and a certified Cochrane Author Trainer (2015, 2020, 2022, 2024, 2026). I have facilitated 
              author-based workshops held with the UWI and CARPHA, supported by the Caribbean Branch of the 
              US Cochrane Centre.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-lg text-sm font-medium text-foreground">
                <MapPin size={14} className="text-accent" /> Barbados
              </span>
              <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-lg text-sm font-medium text-foreground">
                <Globe size={14} className="text-accent" /> 6 Countries
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg text-sm font-medium text-primary">
                <Users size={14} /> Cochrane Caribbean
              </span>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-4">
                  <p className="font-display font-semibold text-foreground text-sm">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                  <p className="text-muted-foreground text-xs">{edu.period}</p>
                  {edu.focus && <p className="text-accent text-xs mt-1">{edu.focus}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
