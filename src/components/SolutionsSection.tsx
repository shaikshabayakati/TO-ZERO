import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import solution1 from "@/assets/solution-1.jpg";
import solution2 from "@/assets/solution-2.jpg";
import solution3 from "@/assets/solution-3.jpg";

const solutions = [
  {
    title: "E-Bus Fleet",
    desc: "Modern, fully electric buses designed for urban and suburban routes with up to 350km range.",
    image: solution1,
    specs: ["350km Range", "150 Passengers", "Fast Charge"],
  },
  {
    title: "Charging Infrastructure",
    desc: "End-to-end depot and opportunity charging solutions tailored to your fleet's needs.",
    image: solution2,
    specs: ["150kW Chargers", "Smart Grid", "24/7 Uptime"],
  },
  {
    title: "Fleet Management",
    desc: "Real-time monitoring, route optimization, and predictive maintenance powered by AI.",
    image: solution3,
    specs: ["Live Tracking", "AI Analytics", "Predictive"],
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 md:py-32 bg-muted/30">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Solutions</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Complete e-mobility ecosystem
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to electrify your transit network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{sol.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{sol.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {sol.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-primary"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary p-0 h-auto font-semibold text-sm group/btn">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
