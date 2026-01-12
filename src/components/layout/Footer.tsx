import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, hash: string) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      // Already on the page, just scroll
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to page first, then scroll after a delay
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Duramet Technologies" className="h-10 w-auto" />
              <span className="font-heading font-bold text-xl">Duramet Technologies</span>
            </Link>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Your trusted industrial distributor and solution partner for precision components and engineering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="/industries#industries-banner" 
                  onClick={(e) => handleAnchorClick(e, "/industries", "industries-banner")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                >
                  Industries
                </a>
              </li>
              <li>
                <a 
                  href="/#about" 
                  onClick={(e) => handleAnchorClick(e, "/", "about")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={(e) => handleAnchorClick(e, "/", "contact")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">
                  #39, Ejipura Main Road, Ejipura, Bangalore – 560047
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+919686118846" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  +91-9686118846
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:sales@duramettechnologies.com" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">
                  sales@duramettechnologies.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/duramet-performance-metals-130244235/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <h4 className="font-heading font-bold text-lg mb-6">Our Location</h4>
          <div className="rounded-lg overflow-hidden h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2772!2d77.6193!3d12.9526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c0d0a0b0a0%3A0x0!2sEjipura%2C%20Bengaluru%2C%20Karnataka%20560047!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Duramet Technologies Location"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Duramet Technologies. All rights reserved.
          </p>
          <p className="text-secondary-foreground/60 text-sm mt-2">
            <a href="https://www.duramettechnologies.com" className="hover:text-accent transition-colors">
              www.duramettechnologies.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
