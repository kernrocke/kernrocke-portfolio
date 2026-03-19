import { motion } from "framer-motion";
import { ArrowLeft, Shield, Globe, Database, GraduationCap, FileText, Activity, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const countries = [
  "Barbados", "Jamaica", "Trinidad & Tobago", "Guyana", "Suriname",
  "Belize", "Bahamas", "Antigua & Barbuda", "Dominica", "Grenada",
  "Saint Kitts & Nevis", "Saint Lucia", "Saint Vincent & the Grenadines",
];

const sections = [
  {
    title: "PAHO International Consultancy",
    icon: Globe,
    color: "bg-primary",
    content: `Since August 2021, serving as an International Consultant in Vaccine Safety Surveillance with the Pan American Health Organization (PAHO). Working with English-speaking Caribbean countries to strengthen national ESAVI (Events Supposedly Attributable to Vaccination or Immunization) surveillance systems, ensuring robust pharmacovigilance capacity across the region.`,
    highlights: [
      "Strengthening national ESAVI surveillance systems",
      "Supporting Caribbean countries in pharmacovigilance",
      "Aligning with WHO Global Vaccine Safety standards",
      "Collaborating with national immunization programmes",
    ],
  },
  {
    title: "DHIS2 Implementation",
    icon: Database,
    color: "bg-accent",
    content: `Led the implementation and configuration of DHIS2 (District Health Information Software 2) for vaccine safety reporting across Caribbean nations. This includes designing data capture forms, configuring analytics dashboards, and training national staff on the platform to enable real-time ESAVI case reporting and signal detection.`,
    highlights: [
      "DHIS2 platform configuration for ESAVI reporting",
      "Custom analytics dashboards for signal detection",
      "Real-time case reporting and data capture workflows",
      "Integration with existing national health information systems",
    ],
  },
  {
    title: "Training & Capacity Building",
    icon: GraduationCap,
    color: "bg-primary",
    content: `Facilitated multiple training workshops across the Caribbean region on vaccine safety surveillance, ESAVI case investigation, causality assessment, and the use of DHIS2 for pharmacovigilance. These workshops strengthen the capacity of national regulatory authorities and immunization programmes to detect, report, and respond to adverse events.`,
    highlights: [
      "ESAVI case investigation and causality assessment",
      "DHIS2 data entry, analysis, and reporting",
      "Vaccine safety signal detection methodologies",
      "National regulatory authority capacity strengthening",
    ],
  },
  {
    title: "Certifications & Training",
    icon: FileText,
    color: "bg-accent",
    content: `Completed specialized training in vaccine safety and health information systems to support evidence-based pharmacovigilance across the region.`,
    certs: [
      { name: "WHO Vaccine Safety Basics", link: "https://drive.google.com/file/d/19jRb3GHUcX47iHb8mdSsS2VzRszZPUK7/view?usp=share_link" },
      { name: "UMC Statistical Reasoning & Signal Detection", link: "https://drive.google.com/file/d/1UIEXiflJ-jbR-RpCMfL6VOankNXhhzsh/view?usp=share_link" },
      { name: "DHIS2 Introduction", link: "https://academy.dhis2.org/certificates/dd6de00c65004ef599b8bfaaa4b148e4" },
      { name: "DHIS2 Aggregate Data Capture & Validation", link: "https://academy.dhis2.org/certificates/2a2f94e37bac4d7eb71071a5e24975d9" },
      { name: "DHIS2 Planning & Budgeting Implementations", link: "https://academy.dhis2.org/certificates/ace0c475337e4e519b43a5a0a030c31f" },
      { name: "DHIS2 Aggregate Data Analysis", link: "https://academy.dhis2.org/certificates/8165a33a302c44bfb0a15f91d60b6a95" },
      { name: "HL7 FHIR Fundamentals", link: "https://drive.google.com/file/d/1wImcuByGqXFbpWrzy5p_cSYXeb6ucPXW/view?usp=share_link" },
    ],
  },
];

const VaccineSafety = () => {
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Shield size={24} className="text-secondary-foreground" />
              </div>
              <p className="text-sm tracking-widest uppercase text-secondary font-display font-semibold">
                PAHO · Pharmacovigilance
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Vaccine Safety Surveillance
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl text-lg">
              Strengthening ESAVI surveillance systems across the English-speaking Caribbean through DHIS2 implementation, 
              training, and capacity building with the Pan American Health Organization.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Countries */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Activity size={20} className="text-primary" />
            Countries Supported
          </h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {countries.map((country) => (
              <span
                key={country}
                className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-lg font-medium border border-primary/20"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (i + 3) }}
              className="bg-card rounded-xl p-8 card-elevated"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center shrink-0`}>
                  <section.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground">{section.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">{section.content}</p>

              {section.highlights && (
                <ul className="space-y-2">
                  {section.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.certs && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {section.certs.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-muted rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                    >
                      <FileText size={14} className="text-muted-foreground group-hover:text-primary shrink-0" />
                      <span className="flex-1">{cert.name}</span>
                      <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaccineSafety;
