import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, TrendingDown, Shield, Cpu, Users, Zap } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "Zero Emissions", desc: "100% electric fleet eliminating tailpipe emissions from public transport." },
  { icon: TrendingDown, title: "Lower Costs", desc: "Up to 40% reduction in total cost of ownership versus diesel fleets." },
  { icon: Shield, title: "Proven Reliability", desc: "98% uptime with predictive maintenance and 24/7 support." },
  { icon: Cpu, title: "Smart Technology", desc: "AI-powered route optimization and real-time fleet analytics." },
  { icon: Users, title: "Better Experience", desc: "Quieter, smoother rides that passengers love." },
  { icon: Zap, title: "Fast Deployment", desc: "From planning to operation in as little as 6 months." },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Benefits</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why choose TO ZERO?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
