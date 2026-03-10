import { motion } from "framer-motion";
import { MapPin, Globe2, Navigation, Users, Bus, Footprints, Baby, Landmark, Pill, FlaskConical } from "lucide-react";

const gisProjects = [
  {
    title: "ESAVI Surveillance Mapping – Americas",
    description: "Regional geographic mapping of ESAVI (Events Supposedly Attributable to Vaccination or Immunization) surveillance indicators across the Americas for PAHO/WHO.",
    icon: Pill,
    tags: ["PAHO/WHO", "ESAVI", "Regional Mapping"],
  },
  {
    title: "Geographic Metabolomic Mapping – ECHORN Cohort",
    description: "Spatial visualization of metabolomic profiles by diabetes status across ECHORN Adult Cohort participants in Barbados, Puerto Rico, and US Virgin Islands.",
    icon: FlaskConical,
    tags: ["ECHORN", "Metabolomics", "Multi-site"],
  },
  {
    title: "Built Environment & Physical Activity – Eastern Caribbean",
    description: "Evaluation of the built environment's influence on physical activity across the Eastern Caribbean Region using geospatial analysis and walkability metrics.",
    icon: Footprints,
    tags: ["Walkability", "Built Environment", "Physical Activity"],
  },
  {
    title: "COVID-19 Case Mapping & Contact Tracing – Trinidad",
    description: "Real-time mapping of COVID-19 confirmed cases and contact tracing networks in Trinidad to support public health response.",
    icon: Navigation,
    tags: ["COVID-19", "Contact Tracing", "Real-time"],
  },
  {
    title: "Community Mobility During COVID-19 – Caribbean & Latin America",
    description: "Spatial analysis of community mobility patterns during the COVID-19 pandemic across Caribbean and Latin American countries.",
    icon: Globe2,
    tags: ["Mobility", "Pandemic", "Regional Analysis"],
  },
  {
    title: "Public Transportation Access – Barbados",
    description: "Comprehensive mapping of public transportation stops across Barbados to assess transit accessibility and coverage.",
    icon: Bus,
    tags: ["Transit", "Accessibility", "Barbados"],
  },
  {
    title: "Elderly Access to Essential Services – Barbados",
    description: "Geospatial assessment of elderly population access to essential services including healthcare, groceries, and social support in Barbados.",
    icon: Users,
    tags: ["Elderly Care", "Service Access", "Equity"],
  },
  {
    title: "Adolescent Pregnancies During COVID-19 – Kenya",
    description: "Historical comparison analysis of child and adolescent pregnancies in Kenya during the COVID-19 pandemic using spatial epidemiological methods.",
    icon: Baby,
    tags: ["Kenya", "Maternal Health", "Historical Comparison"],
  },
  {
    title: "Walkability Assessment – UNESCO Bridgetown & Garrison",
    description: "Assessment of walkability for the UNESCO World Heritage site of Bridgetown and the Garrison, Barbados, combining 360° imagery and GIS analysis.",
    icon: Landmark,
    tags: ["UNESCO", "Walkability", "360° Imagery"],
  },
];

const GISSection = () => {
  return (
    <section id="gis-projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">
            Spatial Epidemiology
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            GIS & Geospatial Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Geospatial analysis and mapping projects spanning public health surveillance,
            built environment research, and pandemic response across the Caribbean, Americas, and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gisProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card rounded-xl p-6 card-elevated group cursor-default border border-border/50"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <project.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GISSection;
