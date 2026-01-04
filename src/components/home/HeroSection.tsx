import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const keywords = [
    "PCB",
    "Thermal Interface Materials",
    "Potting",
    "Conformal Coating",
    "Low Pressure Molding",
    "Gasketing",
    "Industrial Adhesives",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Electronics Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-heading font-semibold text-primary-foreground/90 text-sm uppercase tracking-widest mb-4 bg-primary-foreground/10 px-4 py-2 rounded-full backdrop-blur-sm">
              High Performance Materials
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6"
          >
            Complete Material Solutions for{" "}
            <span className="text-accent">Electronics Manufacturing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-4 max-w-3xl"
          >
            Authorized distributors for electronic components, thermal interface materials, circuit board protection, and gasketing solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-3xl"
          >
            A complete solution for PCB and electronic manufacturing requirements — from components and thermal management to protection, gasketing, and low-pressure molding.
          </motion.p>

          {/* Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90 bg-primary-foreground/10 px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="font-medium text-sm">{keyword}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/industries">
                Explore Industries
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-foreground/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
