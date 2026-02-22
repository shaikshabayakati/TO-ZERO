import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-bus.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Building a cleaner tomorrow, one city at a time
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TO ZERO was founded with a single mission: to accelerate the transition to zero-emission public transport. We work alongside municipalities and transit operators across Europe to deploy electric bus fleets, charging infrastructure, and intelligent fleet management systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of engineers, urban planners, and sustainability experts ensures that every deployment is tailored to the unique needs of each city — delivering cleaner air, quieter streets, and a better quality of life for all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="TO ZERO electric bus fleet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
