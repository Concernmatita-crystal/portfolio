import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
   {
    role: "Graduate Trainee",
    company: "Britam Insurance Malawi",
    period: "Jul 2025 – Present",
    location: "Malawi",
    description:
      "Rotated across ICT, Claims, Finance, and Underwriting departments, gaining broad operational exposure to business systems and end-to-end administrative processes.",
    achievements: [
      "Provided technical support including hardware/software installation, troubleshooting, and network connectivity across departments",
      "Assisted with system updates, routine maintenance, and data management within policy and claims administration systems",
      "Processed customer and intermediary payments and supported month-end account reconciliations",
      "Maintained ICT equipment and upheld the security and integrity of organisational data systems",
    ],
    tags: ["ICT Support", "Claims Administration", "Finance", "Underwriting", "Data Management", "Networking"],
  },

  {
    role: "ICT Intern",
    company: "Malawi Post Corporation",
    period: "Jan 2024 – Jun 2024",
    location: "Blantyre, Malawi",
    description:
      "Assisted in IT operations, system support, and data recovery, ensuring smooth digital operations for thousands of users nationwide.",
    achievements: [
      "Restored payroll systems after a critical virus attack",
      "Created comprehensive IT Risk Management documentation",
    ],
    tags: ["Windows Server", "Microsoft Office", "Kaspersky", "Networking"],
  },
  {
    role: "Business Development Associate",
    company: "Ntha Foundation",
    period: "May 2023 – Dec 2023",
    location: "Lilongwe, Malawi",
    description:
      "Led innovation programs and supported youth empowerment through technology initiatives, bridging the digital divide in underserved communities.",
    achievements: [
      "Managed Digital Skills for Africa LMS platform",
      "Supported community outreach programs reaching hundreds of youth",
    ],
    tags: ["WordPress", "Project Management", "Google Workspace"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Career</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10 pl-12 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.75rem] md:-left-[4.75rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm" />

                <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
