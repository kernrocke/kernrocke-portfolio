import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Heart, Activity, Map, FileSearch, Stethoscope, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Barbados Cancer Registry Dashboard",
    description:
      "Comprehensive cancer surveillance dashboard with incidence/mortality analytics, geographic mapping by parish, survival analysis, and PowerPoint report generation for the Barbados National Registry.",
    tags: ["Cancer Surveillance", "Leaflet Maps", "Survival Analysis", "Plotly"],
    icon: BarChart3,
    color: "bg-primary",
    link: "",
  },
  {
    title: "BNR CVD Data Dashboard",
    description:
      "Real-time AMI and Stroke monitoring dashboard pulling data directly from REDCap API. Features case tracking, eligibility filtering, and temporal trend analysis for cardiovascular disease surveillance.",
    tags: ["REDCap API", "Real-time Data", "CVD Monitoring", "shinydashboard"],
    icon: Activity,
    color: "bg-accent",
    link: "",
  },
  {
    title: "Barbados Hypertension Dashboard",
    description:
      "Interactive dashboard for monitoring hypertensive patients under the Barbados HEARTS Programme. Includes SPC control charts, trend analytics, and clinical data upload capabilities.",
    tags: ["HEARTS Programme", "SPC Charts", "Clinical Data", "TTR"],
    icon: Heart,
    color: "bg-primary",
    link: "",
  },
  {
    title: "Geocoding & Address Mapping Tool",
    description:
      "Batch geocoding application for Barbados addresses using OpenStreetMap. Supports shapefile overlays, road network matching, and interactive Leaflet maps for spatial analysis.",
    tags: ["Geocoding", "Leaflet", "Shapefiles", "Spatial Analysis"],
    icon: Map,
    color: "bg-accent",
    link: "",
  },
  {
    title: "CanReg5 Death Data Import Tool",
    description:
      "Data quality and import preparation tool for merging REDCap death data into CanReg5 cancer registry. Features fuzzy matching, NRN validation, and automated record linkage.",
    tags: ["Data Linkage", "CanReg5", "Fuzzy Matching", "REDCap"],
    icon: Stethoscope,
    color: "bg-primary",
    link: "",
  },
  {
    title: "Systematic Review Support Dashboard",
    description:
      "Research tool assisting Caribbean researchers in developing systematic reviews. Includes PICO framework builder, search strategy generator, PRISMA flow diagrams, and study screening tools.",
    tags: ["Cochrane", "PRISMA", "Literature Search", "litsearchr"],
    icon: FileSearch,
    color: "bg-accent",
    link: "",
  },
];

const ShinyApps = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="hero-bg py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 font-medium text-sm"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm tracking-widest uppercase text-secondary font-display font-semibold mb-2">
              Interactive Dashboards
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              R Shiny Applications
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl text-lg">
              Interactive dashboards and tools built with R Shiny for public health surveillance, data management, and
              research across the Caribbean.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-8 card-elevated group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 ${project.color} rounded-lg flex items-center justify-center`}>
                  <project.icon size={28} className="text-primary-foreground" />
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-muted text-muted-foreground text-xs px-3 py-1.5 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShinyApps;
