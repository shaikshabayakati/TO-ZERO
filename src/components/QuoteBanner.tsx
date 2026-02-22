import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QuoteBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-8">
            "The future of public transport is electric — and that future is{" "}
            <span className="text-primary">now.</span>"
          </p>
          <footer className="text-primary-foreground/60 text-sm md:text-base">
            — TO ZERO, driving change since 2020
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteBanner;
