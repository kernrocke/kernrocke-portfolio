import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data & Analytics",
    skills: ["R / R Shiny", "Stata", "SPSS", "Python", "SQL", "Statistical Modeling", "Survival Analysis", "SPC/QCC Charts"],
  },
  {
    title: "Geospatial & GIS",
    skills: ["ArcGIS", "QGIS", "Leaflet", "Spatial Epidemiology", "Shapefile Analysis", "Geocoding", "Survey123"],
  },
  {
    title: "Public Health",
    skills: ["Epidemiology", "Vaccine Safety (ESAVI)", "Cancer Registry", "NCDs", "HEARTS Programme", "PRISMA/Systematic Reviews"],
  },
  {
    title: "Tools & Platforms",
    skills: ["REDCap", "DHIS2", "CanReg5", "HL7 FHIR", "Git/GitHub", "shinydashboard", "Plotly", "Officer/PowerPoint"],
  },
];

const researchInterests = [
  "Chronic Non-Communicable Diseases",
  "Built Environment & Walkability",
  "Public Health Geoinformatics",
  "Vaccine Safety Surveillance",
  "Digital Health",
  "Geospatial Modelling",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
            Skills & Research Interests
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 card-elevated"
            >
              <h3 className="font-display font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-semibold text-xl text-foreground mb-6">Research Interests</h3>
          <div className="flex flex-wrap gap-3">
            {researchInterests.map((interest) => (
              <span key={interest} className="border border-border bg-muted/50 text-foreground text-sm font-medium px-4 py-2 rounded-full">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
