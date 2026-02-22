import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Electric Buses" },
  { value: "12K", label: "Tons CO₂ Saved" },
  { value: "25+", label: "Cities Served" },
  { value: "98%", label: "Uptime Rate" },
];

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Driving the transition to zero-emission transport
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We partner with cities and transit agencies to electrify public transport — reducing emissions, lowering costs, and creating healthier urban environments for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary/50 border border-border"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
