import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

function TypewriterText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"wait" | "typing" | "pause" | "deleting">("wait");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "wait") {
      timer = setTimeout(() => setPhase("typing"), delay * 2000);
    } else if (phase === "typing") {
      if (displayed.length < text.length) {
        timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 80);
      } else {
        timer = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length - 1)), 45);
      } else {
        timer = setTimeout(() => setPhase("typing"), 400);
      }
    }

    return () => clearTimeout(timer);
  }, [phase, displayed, text, delay]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse opacity-70">|</span>
    </span>
  );
}

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, hsl(var(--primary) / 0.25), transparent)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Open to Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-foreground font-display mb-6"
            >
              Hi, I'm{" "}
              <TypewriterText text="Concern" className="text-primary" delay={0.8} />
              <br />
              <TypewriterText text="Matita" className="text-secondary" delay={2} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8"
            >
              Frontend Developer &amp; ICT Professional crafting beautiful, functional
              applications that solve real-world problems — with a heart for tech
              that changes lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                data-testid="button-view-projects"
              >
                View My Work
              </a>
              <a
                href="https://concernmatitaportfolio.vercel.app/GeneralCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
                data-testid="button-download-resume"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-5"
            >
              <a
                href="mailto:concernmatita@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </motion.div>
          </div>

          {/* Stats card — floating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg"
            >
              <p className="text-muted-foreground text-sm mb-1">Currently working on</p>
              <motion.p
                className="text-foreground font-semibold text-lg mb-6"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                My Portfolio ✦
              </motion.p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "2+", label: "Years Exp." },
                  { value: "3+", label: "Projects" },
                  { value: "5+", label: "Technologies" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/50"
                  >
                    <span className="text-3xl font-bold text-primary font-display">{stat.value}</span>
                    <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Frontend Dev", tag: "React · JS · TypeScript" },
                { label: "ICT Professional", tag: "Systems · Networks · Support" },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: i * 0.8 }}
                  className="bg-card border border-border/50 rounded-xl p-5 shadow-sm hover:border-primary/30 transition-colors"
                >
                  <p className="font-semibold text-foreground text-sm mb-1">{card.label}</p>
                  <p className="text-xs text-muted-foreground">{card.tag}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
