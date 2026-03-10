import { motion } from "framer-motion";

const levelColor = (level: string) => {
  if (level.startsWith("Advance")) return "bg-primary/20 text-primary border-primary/30";
  if (level.startsWith("Intermediary")) return "bg-accent/15 text-accent border-accent/30";
  return "bg-muted text-muted-foreground border-border";
};

const skillCategories = [
  {
    title: "Statistical Analysis & Data Management",
    skills: [
      { name: "STATA", level: "Advance" },
      { name: "SPSS", level: "Intermediary" },
      { name: "R / R Shiny", level: "Intermediary" },
      { name: "Python", level: "Basic" },
      { name: "Azure Data Studio", level: "Basic" },
    ],
  },
  {
    title: "Spatial Management & Analysis",
    skills: [
      { name: "ArcGIS", level: "Advance" },
      { name: "QGIS", level: "Intermediary" },
      { name: "PostGRES", level: "Intermediary" },
    ],
  },
  {
    title: "Data Collection",
    skills: [
      { name: "REDCap", level: "Intermediary" },
      { name: "Survey123", level: "Advance" },
      { name: "EpiCollect", level: "Advance" },
      { name: "EpiInfo 7", level: "Advance" },
      { name: "Epi Data", level: "Intermediary" },
      { name: "QuestionPro", level: "Intermediary" },
    ],
  },
  {
    title: "Project Management",
    skills: [
      { name: "Microsoft Office Suite", level: "Advance" },
      { name: "Open Project", level: "Intermediary" },
      { name: "Project Libre", level: "Intermediary" },
    ],
  },
  {
    title: "Reference & Systematic Review",
    skills: [
      { name: "EndNote", level: "Advance" },
      { name: "Zotero", level: "Advance" },
      { name: "Reference Manager", level: "Intermediary" },
      { name: "RevMan", level: "Intermediary" },
      { name: "Archie", level: "Beginner" },
    ],
  },
  {
    title: "360 Imagery",
    skills: [
      { name: "Pano2VR", level: "Advance" },
      { name: "Google Data Studio", level: "Advance" },
    ],
  },
  {
    title: "Health Information Systems",
    skills: [
      { name: "DHIS2", level: "Intermediary" },
      { name: "Postman", level: "Beginner" },
    ],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
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
                  <span key={skill.name} className={`text-xs font-medium px-3 py-1.5 rounded-md border ${levelColor(skill.level)}`}>
                    {skill.name}
                    <span className="ml-1 opacity-70">• {skill.level}</span>
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
