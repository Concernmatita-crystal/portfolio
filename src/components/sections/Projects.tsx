import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Digital Skills for Africa",
    description:
      "An LMS platform built to equip youth across Africa with essential digital skills, bridging the gap between education and employment.",
    stack: ["WordPress", "LearnDash", "Elementor"],
    link: "#",
    featured: true,
  },
  {
    title: "Malawi Post Website",
    description:
      "A modern, responsive corporate website for Malawi Post Corporation, serving thousands of users seeking postal and financial services.",
    stack: ["WordPress", "Elementor"],
    link: "#",
    featured: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website — a showcase of my work, skills, and professional journey, built with a focus on performance and visual polish.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://concernmatitaportfolio.vercel.app",
    featured: false,
  },
  {
    title: "MBS Document Management System",
    description:
      "An internal document management system for organizing, retrieving, and tracking institutional documents efficiently.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2">
            Selected Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            A collection of projects built to make a real difference — from empowering youth digitally to modernizing government services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-lg flex flex-col"
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                  Featured
                </span>
              )}

              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
