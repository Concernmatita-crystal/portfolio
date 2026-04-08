import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Business Information Technology",
    institution: "Malawi University of Science and Technology",
    period: "2020 – 2024",
    detail: "Graduated with Credit. GPA 3.6. Gained skills in programming, business analytics, and IT management.",
    badge: "GPA 3.6",
  },
  {
    degree: "High School Diploma",
    institution: "Chipasula Secondary School",
    period: "2013 – 2018",
    detail: "Completed MSCE with strong grades in Mathematics and Computer Studies. 15 Points — Top 10% of class.",
    badge: "Top 10%",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={22} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-foreground leading-snug">{edu.degree}</h3>
                    <span className="shrink-0 px-2.5 py-0.5 text-xs font-semibold bg-secondary/20 text-secondary-foreground rounded-full border border-secondary/30">
                      {edu.badge}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
