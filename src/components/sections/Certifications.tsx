import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "BSc Degree in Business IT",
    issuer: "Malawi University of Science and Technology",
    tags: ["Business", "Technology"],
  },
  {
    title: "ReactJS Certification",
    issuer: "Simplilearn",
    tags: ["React", "JavaScript"],
  },
  {
    title: "Data Analytics with Python",
    issuer: "Udemy",
    tags: ["Python", "Data Analytics"],
  },
  {
    title: "Aspire Leadership Certification",
    issuer: "Harvard Business School",
    tags: ["Leadership", "Public Speaking"],
  },
  {
    title: "Certificate of Excellence",
    issuer: "Huawei ICT Competition",
    tags: ["Computing"],
  },
  {
    title: "Data Analytics with PowerBI",
    issuer: "Great Learning",
    tags: ["Business Intelligence"],
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2">
            Certifications
          </h2>
          <p className="text-muted-foreground mt-3">A showcase of academic and professional milestones.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all hover:shadow-md flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award size={17} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-1">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-muted text-muted-foreground border border-border/50"
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
}
