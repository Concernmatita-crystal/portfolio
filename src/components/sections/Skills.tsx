import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, GitBranch, Globe, Layout } from "lucide-react";

const technicalSkills = [
  { name: "HTML & CSS", level: 90 },
  { name: "ReactJS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 70 },
  { name: "PHP", level: 65 },
];

const capabilities = [
  { icon: Database, label: "Database Design" },
  { icon: GitBranch, label: "Version Control" },
  { icon: Globe, label: "Web App Development" },
  { icon: Layout, label: "Front-End Development" },
];

function SkillBar({ name, level, inView, delay }: { name: string; level: number; inView: boolean; delay: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-semibold text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Technical Proficiency</h3>
            {technicalSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                inView={inView}
                delay={0.3 + i * 0.12}
              />
            ))}
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cap.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{cap.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 p-5 bg-primary/10 border border-primary/20 rounded-xl"
            >
              <p className="text-sm text-foreground font-medium mb-2">Always Learning</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Continuously expanding my skills in modern web development, cloud technologies,
                and data analytics to stay current with the evolving tech landscape.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
