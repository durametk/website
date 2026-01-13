import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Plane, Droplet, Zap, Truck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { industries } from "@/data/industries";

import automotiveImg from "@/assets/industry-automotive.jpg";
import aerospaceImg from "@/assets/industry-aerospace.jpg";
import powerImg from "@/assets/industry-power.jpg";
import componentsImg from "@/assets/industry-components.jpg";
import railImg from "@/assets/industry-rail.jpg";

const iconMap: { [key: string]: React.ReactNode } = {
  car: <Car className="h-10 w-10" />,
  plane: <Plane className="h-10 w-10" />,
  droplet: <Droplet className="h-10 w-10" />,
  zap: <Zap className="h-10 w-10" />,
  truck: <Truck className="h-10 w-10" />,
};

const imageMap: { [key: string]: string } = {
  automotive: automotiveImg,
  "aerospace-defence": aerospaceImg,
  "power-industrial-automation": powerImg,
  components: componentsImg,
  rail: railImg,
};

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-14">
        {/* Hero Section */}
        <section id="industries-banner" className="py-32 md:py-40 gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block font-heading font-semibold text-primary text-sm uppercase tracking-widest mb-4">
                Our Expertise
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Industries We Serve
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Discover how Duramet Technologies provides tailored solutions across diverse industrial sectors with precision engineering and quality products.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={imageMap[industry.slug]}
                          alt={industry.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {iconMap[industry.icon]}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h2 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                          {industry.name}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {industry.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-heading font-semibold">
                          <span>Explore Products</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
