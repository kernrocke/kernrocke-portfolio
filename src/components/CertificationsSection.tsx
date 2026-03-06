import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Introduction to DHIS2",
    issuer: "HISP Centre, University of Oslo",
    date: "February 2026",
    verifyUrl: "https://academy.dhis2.org/certificates/06b90fdc4db44490a1d07c86d87fc1ac",
    category: "DHIS2",
  },
  {
    name: "Aggregate Data Capture and Validation Fundamentals",
    issuer: "HISP Centre, University of Oslo",
    date: "June 2025",
    verifyUrl: "https://academy.dhis2.org/certificates/2a2f94e37bac4d7eb71071a5e24975d9",
    category: "DHIS2",
  },
  {
    name: "Aggregate Data Analysis Fundamentals",
    issuer: "HISP Centre, University of Oslo",
    date: "June 2025",
    verifyUrl: "https://academy.dhis2.org/certificates/8165a33a302c44bfb0a15f91d60b6a95",
    category: "DHIS2",
  },
  {
    name: "Planning and Budgeting DHIS2 Implementations",
    issuer: "HISP Centre, University of Oslo",
    date: "February 2026",
    verifyUrl: "https://academy.dhis2.org/certificates/ace0c475337e4e519b43a5a0a030c31f",
    category: "DHIS2",
  },
  {
    name: "HL7 FHIR Fundamentals Course",
    issuer: "HL7 International",
    date: "November 2022",
    category: "Health Informatics",
  },
  {
    name: "Vaccine Safety Basics",
    issuer: "World Health Organization (OpenWHO)",
    date: "March 2023",
    verifyUrl: "https://openwho.org/verify/xicic-fedih-vasif-cokys-benam",
    category: "Public Health",
  },
];

const categoryColors: Record<string, string> = {
  "DHIS2": "bg-primary/10 text-primary",
  "Health Informatics": "bg-secondary/20 text-secondary-foreground",
  "Public Health": "bg-accent/10 text-accent",
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
            Professional Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 card-elevated border border-border/50 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${categoryColors[cert.category] || "bg-muted text-muted-foreground"}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-2 flex-1">
                {cert.name}
              </h3>
              <p className="text-muted-foreground text-xs mb-1">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                <span className="text-muted-foreground text-xs">{cert.date}</span>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-xs font-medium hover:opacity-80 transition-opacity"
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
