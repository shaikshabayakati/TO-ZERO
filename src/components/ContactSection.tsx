import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Let's build the future together
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to electrify your transit network? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your name" className="rounded-xl h-12" />
              <Input placeholder="Your email" type="email" className="rounded-xl h-12" />
            </div>
            <Input placeholder="Subject" className="rounded-xl h-12" />
            <Textarea placeholder="Your message..." className="rounded-xl min-h-[140px]" />
            <Button size="lg" className="rounded-full px-10 w-full sm:w-auto">
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">info@to-zero.de</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">+49 123 456 7890</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Office</h4>
                <p className="text-muted-foreground text-sm">Berlin, Germany</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
