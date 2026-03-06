import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const publications = [
  {
    authors: "Rocke KD, Howitt C, Panter J, Tully M, Hambleton I.",
    title: "Neighbourhood Walkability and Its Influence on Physical Activity and Cardiometabolic Disease: A Cross-Sectional Study in a Caribbean Small Island Developing State",
    journal: "Cureus",
    year: 2023,
    details: "2023 Aug 24;15(8)",
  },
  {
    authors: "Harrison A, Tyrill C, Cousins S, Rocke K, Gossell-Williams M.",
    title: "Disparity between adolescents' health information needs and the information received in a middle-income country",
    journal: "Journal of Tropical Pediatrics",
    year: 2023,
    details: "2023 Apr;69(2):fmad018",
  },
  {
    authors: "Augustus EH, George C, Rocke KD.",
    title: "Preexposure Prophylaxis in Latin America and the Caribbean—The Barbados Experience",
    journal: "Journal of Health Care for the Poor and Underserved",
    year: 2023,
    details: "2023;34(1):58-73",
  },
  {
    authors: "Thomas-Chen R, Smith J, Rocke K, James-Bateman C, Harrison A.",
    title: "Adolescent connectedness and its impact on substance use in Jamaican adolescents",
    journal: "Current Psychology",
    year: 2022,
    details: "2022 Dec 8. 1-11",
  },
  {
    authors: "Rocke K, Howitt C, Hambleton I.",
    title: "Understanding the relationship between built environment features and physical activity in the Caribbean: A scoping review",
    journal: "Dialogues in Health",
    year: 2022,
    details: "2022 Dec 5;100088",
  },
  {
    authors: "Brown CR, Rocke K, Murphy MM, Hambleton IR.",
    title: "Interventions and policies aimed at improving nutrition in Small Island Developing States: a rapid review",
    journal: "Rev Panam Salud Publica",
    year: 2022,
    details: "46, ago. 2022. Special Issue",
  },
  {
    authors: "Howitt C, Henry F, Rocke KD, Brown CR, Jones W, Dunn L, Samuels T.",
    title: "COVID-19 and the social distribution of hunger in three Caribbean Small Island Developing States",
    journal: "Rev Panam Salud Publica",
    year: 2022,
    details: "46, ago. 2022. Special Issue",
  },
  {
    authors: "Augustus E, Francis-Granderson I, Rocke KD.",
    title: "The Impact of a Ketogenic Dietary Intervention on the Quality of Life of Stage II & III Cancer Patients: A Randomized Controlled Trial in the Caribbean",
    journal: "Nutrition and Cancer",
    year: 2021,
    details: "Vol 73:9. 1590-1600",
  },
  {
    authors: "Harrison AN, Rocke KD, James C, Bateman A.",
    title: "Physical activity and disordered eating behaviours: Are Caribbean adolescents at risk?",
    journal: "International Journal of Psychology",
    year: 2021,
  },
  {
    authors: "Granderson I, Webb M, McDonald A, Buckmire D, Rocke KD, Archer W.",
    title: "The Six Caribbean Food Groups Curriculum: An Evaluation of Different Teaching Methods at Primary Schools in Trinidad and Tobago",
    journal: "Caribbean Journal of Home Economics",
    year: 2021,
    details: "Vol 8",
  },
  {
    authors: "Harrison AN, James-Bateman CCB, Younger-Coleman NOM, Williams MC, Rocke KD, Clato-Day Scarlett SC & Chang SM.",
    title: "Disordered eating behaviours and attitudes among adolescents in a middle-income country",
    journal: "Eating and Weight Disorders",
    year: 2020,
  },
  {
    authors: "Rocke KD & Roopchand X.",
    title: "Predictors for Depression and Perceived Stress among a Small Island Developing State University Population",
    journal: "Psychology Health and Medicine",
    year: 2020,
  },
  {
    authors: "Murphy MM, Jeyaseelan SM, Howitt C, Greaves N, Harewood H, Quimby KR, Sobers N, Landis RC, Rocke KD & Hambleton IR.",
    title: "COVID-19 containment in the Caribbean: the experience of Small Island Developing States",
    journal: "Research in Globalization",
    year: 2020,
  },
  {
    authors: "Rocke KD.",
    title: "Competitive balance within CONCACAF: a longitudinal and comparative descriptive review of the seasons 2002/2003–2017/2018",
    journal: "Managing Sport and Leisure",
    year: 2019,
    details: "Vol 24:6, p445-460",
  },
  {
    authors: "Rocke KD.",
    title: "Colorectal Cancer Knowledge and Awareness Among University Students in a Caribbean Territory: a Cross-sectional Study",
    journal: "Journal of Cancer Education",
    year: 2019,
  },
  {
    authors: "Smith JA, Rocke KD, Charles SM, Chang SM, Walker SP, Taveras EM, Tulloch-Reid.",
    title: "The role of fathers in overweight prevention: An analysis of a Caribbean Cohort",
    journal: "Global Health, Epidemiology and Genomics",
    year: 2018,
    details: "3:e15",
  },
  {
    authors: "Rocke KD, Nichols S, Dalrymple N, Ramcharitar-Bourne A.",
    title: "Associations between Colorectal Cancer Risk Perception and Dietary Patterns among University Students in the Caribbean: A Cross-Sectional Analysis",
    journal: "Nutrition & Food Science",
    year: 2018,
    details: "Vol 3(2): 1-9",
  },
  {
    authors: "Rocke KD, Ferguson TS, Younger-Coleman NO, Tulloch-Reid MK, Knight-Madden JM, Samms-Vaughan M, Ashley D, McCaw-Binns A, Wilks RJ.",
    title: "Relationship between Early Life Factors and Renal Function in Afro-Caribbean Young Adults: Analysis from the Jamaica 1986 Birth Cohort Study",
    journal: "West Indian Medical Journal",
    year: 2018,
    details: "67(2):165",
  },
  {
    authors: "Ragoobar T, Ganpat W, Rocke KD.",
    title: "The Impact of Malodour Exposure on the Psychological Well-Being of A Community in Trinidad",
    journal: "Asian Journal of Microbiology, Biotechnology and Environmental Science",
    year: 2016,
    details: "Vol 18(3) 715-723",
  },
  {
    authors: "Ragoobar T, Ganpat W, Rocke KD.",
    title: "Physical Well-Being and Malodour Exposure: The Impact of an Intensive Pig Farming Operation on a Community in Trinidad",
    journal: "International Journal of Science, Environment and Technology",
    year: 2016,
    details: "Vol 5(2)",
  },
  {
    authors: "Rocke KD, Ramkissoon BI, Iton A, Khan M.",
    title: "The Global Trend of Competitive Balance of Domestic Twenty20 Cricket Competitions: A Survey of the 2010-2015 Seasons",
    journal: "International Journal of Sport Studies",
    year: 2016,
    details: "Vol 6(2). pg 81-89",
  },
  {
    authors: "Abdulkadri AO, Tulloch-Reid MK, Francis DK, Gordon-Strachan GM, Younger NO, Rocke KD, McFarlane SR, Cunningham-Myrie CA, Ferguson TS, Wilks RJ, Anderson SG.",
    title: "Differential cost implications of approaches to primary prevention of cardiovascular disease on women and the elderly",
    journal: "Journal of Clinical Epidemiology",
    year: 2014,
  },
];

const INITIAL_COUNT = 6;

const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? publications : publications.slice(0, INITIAL_COUNT);

  return (
    <section id="publications" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase text-accent font-display font-semibold mb-2">Research</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Peer-Reviewed Publications
          </h2>
          <p className="text-muted-foreground mb-10">
            {publications.length} publications spanning epidemiology, nutrition, public health, and data science.
          </p>
        </motion.div>

        <div className="space-y-4">
          {displayed.map((pub, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              className="bg-card rounded-xl p-5 md:p-6 card-elevated border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  <BookOpen size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-foreground text-sm md:text-base leading-snug mb-1.5">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-1">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-primary font-medium text-xs">{pub.journal}</span>
                    {pub.details && <span className="text-muted-foreground text-xs">· {pub.details}</span>}
                    <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-md font-medium">{pub.year}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {publications.length > INITIAL_COUNT && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>Show All {publications.length} Publications <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
