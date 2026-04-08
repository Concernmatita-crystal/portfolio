import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: MapPin, label: "Location", value: "Malawi, Africa" },
    { icon: Briefcase, label: "Current Role", value: "ICT Intern, Malawi Post Corp." },
    { icon: GraduationCap, label: "Education", value: "BSc Business IT, GPA 3.6" },
    { icon: Heart, label: "Passion", value: "Tech for social good" },
  ];

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base mb-5">
              I'm a <strong className="text-foreground">frontend developer and ICT professional</strong> with a heart for tech that changes lives. Over the past couple of years, I've worked with both startups and public institutions to build digital tools that actually matter — from websites for government services to innovative platforms for social good.
            </p>
            {/* <p className="text-muted-foreground leading-relaxed text-base mb-5">
              In my current role at <strong className="text-foreground">Malawi Post Corporation</strong>, I've been hands-on with everything from website management to troubleshooting complex IT issues, making sure systems run smoothly for thousands of users.
            </p> */}
            <p className="text-muted-foreground leading-relaxed text-base">
              Whether it's crafting responsive interfaces in React, managing websites, or mentoring others through digital skills programs — I'm all about <strong className="text-primary">using tech for good</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-colors group"
              >
                <item.icon
                  size={20}
                  className="text-primary mb-3 group-hover:scale-110 transition-transform"
                />
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-foreground text-sm">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
