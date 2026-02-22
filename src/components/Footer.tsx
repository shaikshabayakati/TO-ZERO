import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-2xl font-heading font-bold mb-4">
              <span className="text-primary">TO</span> <span className="text-primary-foreground">ZERO</span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Driving the transition to zero-emission public transport across Europe.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#mission" className="hover:text-primary transition-colors">Mission</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solutions" className="hover:text-primary transition-colors">E-Bus Fleet</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Charging</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Fleet Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="mailto:info@to-zero.de" className="hover:text-primary transition-colors">info@to-zero.de</a></li>
            </ul>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} TO ZERO. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
