import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Solutions", href: "#solutions" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-heading font-bold tracking-tight">
          <span className="text-primary">TO</span>{" "}
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>ZERO</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button className="hidden md:inline-flex rounded-full px-6" size="sm" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-foreground hover:text-primary py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full rounded-full" size="sm" asChild>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Get in Touch</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
