import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to deploy an electric bus fleet?",
    a: "Depending on fleet size and infrastructure needs, typical deployments take 6–12 months from planning to operation.",
  },
  {
    q: "What is the range of your electric buses?",
    a: "Our standard e-buses achieve up to 350km on a single charge, suitable for most urban and suburban routes.",
  },
  {
    q: "Do you provide charging infrastructure?",
    a: "Yes. We offer complete depot and opportunity charging solutions, including hardware, installation, and smart grid integration.",
  },
  {
    q: "How does the fleet management platform work?",
    a: "Our AI-powered platform provides real-time tracking, route optimization, energy management, and predictive maintenance alerts.",
  },
  {
    q: "What regions do you currently serve?",
    a: "We operate across 25+ cities in Europe, with expansion plans for additional markets.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
