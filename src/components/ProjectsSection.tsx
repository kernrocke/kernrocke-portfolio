import { motion } from "framer-motion";
import { BarChart3, Heart, Activity, Map, FileSearch, Stethoscope } from "lucide-react";

const projects = [
  {
    title: "Barbados Cancer Registry Dashboard",
    description: "Comprehensive cancer surveillance dashboard with incidence/mortality analytics, geographic mapping by parish, survival analysis, and PowerPoint report generation for the Barbados National Registry.",
    tags: ["Cancer Surveillance", "Leaflet Maps", "Survival Analysis", "Plotly"],
    icon: BarChart3,
    color: "bg-primary",
  },
  {
    title: "BNR CVD Data Dashboard",
    description: "Real-time AMI and Stroke monitoring dashboard pulling data directly from REDCap API. Features case tracking, eligibility filtering, and temporal trend analysis for cardiovascular disease surveillance.",
    tags: ["REDCap API", "Real-time Data", "CVD Monitoring", "shinydashboard"],
    icon: Activity,
    color: "bg-accent",
  },
  {
    title: "Barbados Hypertension Dashboard",
    description: "Interactive dashboard for monitoring hypertensive patients under the Barbados HEARTS Programme. Includes SPC control charts, trend analytics, and clinical data upload capabilities.",
    tags: ["HEARTS Programme", "SPC Charts", "Clinical Data", "TTR"],
    icon: Heart,
    color: "bg-primary",
  },
  {
    title: "Geocoding & Address Mapping Tool",
    description: "Batch geocoding application for Barbados addresses using OpenStreetMap. Supports shapefile overlays, road network matching, and interactive Leaflet maps for spatial analysis.",
    tags: ["Geocoding", "Leaflet", "Shapefiles", "Spatial Analysis"],
    icon: Map,
    color: "bg-accent",
  },
  {
    title: "CanReg5 Death Data Import Tool",
    description: "Data quality and import preparation tool for merging REDCap death data into CanReg5 cancer registry. Features fuzzy matching, NRN validation, and automated record linkage.",
    tags: ["Data Linkage", "CanReg5", "Fuzzy Matching", "REDCap"],
    icon: Stethoscope,
    color: "bg-primary",
  },
  {
    title: "Systematic Review Support Dashboard",
    description: "Research tool assisting Caribbean researchers in developing systematic reviews. Includes PICO framework builder, search strategy generator, PRISMA flow diagrams, and study screening tools.",
    tags: ["Cochrane", "PRISMA", "Literature Search", "litsearchr"],
    icon: FileSearch,
    color: "bg-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            R Shiny Applications
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Interactive dashboards and tools built with R Shiny for public health surveillance, 
            data management, and research across the Caribbean.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 card-elevated group cursor-default"
            >
              <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mb-4`}>
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
                  <span key={tag} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-md font-medium">
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

export default ProjectsSection;
