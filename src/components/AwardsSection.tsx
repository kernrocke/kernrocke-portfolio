import { motion } from "framer-motion";
import { Trophy, DollarSign, Calendar } from "lucide-react";

const awards = [
  {
    title: "Impact of a psychoeducational intervention on gender norms and mental health outcomes in Jamaican adolescents",
    funder: "International Development Research Centre (IDRC)",
    institution: "The University of the West Indies, Mona Campus",
    amount: "$597,400 CAD",
    role: "Co-PI",
    pis: "Abigail Harrison, Karen Carpenter, Caryl James, Kern Rocke, Georgiana Gordon-Strachan, Susan Chang, Susan Walker, Minerva Thame",
    type: "grant",
  },
  {
    title: "Paediatric Eastern Caribbean Health Outcomes Research Network (PECHORN) — Diversity Research Supplement",
    funder: "National Heart, Lung & Blood Institute (NHLBI)",
    amount: "$38,000 USD",
    role: "PI",
    pis: "Kern Rocke, Marcella Nunez-Smith",
    endDate: "June 2022",
    type: "grant",
  },
  {
    title: "Virtual Assessment of the walking environment in ECHORN neighbourhoods",
    funder: "UWI Graduate Studies and Research Campus Research Awards (Student)",
    institution: "The University of the West Indies, Cave Hill Campus, Barbados",
    amount: "$4,540 USD",
    role: "PI",
    pis: "Kern Rocke, Ian Hambleton, Christina Howitt",
    endDate: "September 2021",
    type: "grant",
  },
  {
    title: "WELCOME Trust Travel Grant",
    funder: "Wellcome Trust",
    institution: "CAHIR at 20 Research Symposium, Kingston Jamaica",
    endDate: "September 2019",
    type: "grant",
  },
  {
    title: "Best Final Year Project — Human Nutrition & Dietetics Year III",
    funder: "The Inter-American Institute For Cooperation On Agriculture (IICA)",
    institution: "The University of the West Indies, St. Augustine Campus",
    endDate: "2012/2013",
    type: "award",
  },
  {
    title: "Dean's Honor Roll — Semester GPA of 4.15",
    funder: "The University of the West Indies (UWI)",
    institution: "St. Augustine Campus",
    endDate: "2012/2013",
    type: "award",
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
            Awards & Grants
          </h2>
        </motion.div>

        <div className="space-y-5">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.08, 0.4) }}
              className="bg-card rounded-xl p-5 md:p-6 card-elevated border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  <Trophy size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${award.type === "grant" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      {award.type}
                    </span>
                    {award.role && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary/20 text-secondary-foreground">
                        {award.role}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm md:text-base leading-snug mb-1.5">
                    {award.title}
                  </h3>
                  <p className="text-primary font-medium text-xs mb-1">{award.funder}</p>
                  {award.institution && (
                    <p className="text-muted-foreground text-xs mb-1">{award.institution}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    {award.amount && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground">
                        <DollarSign size={12} className="text-accent" />
                        {award.amount}
                      </span>
                    )}
                    {award.endDate && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {award.endDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
