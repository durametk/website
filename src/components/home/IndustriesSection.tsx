import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Plane, Droplet, Zap, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";

import automotiveImg from "@/assets/industry-automotive.jpg";
import aerospaceImg from "@/assets/industry-aerospace.jpg";
import powerImg from "@/assets/industry-power.jpg";
import componentsImg from "@/assets/industry-components.jpg";
import railImg from "@/assets/industry-rail.jpg";

const iconMap: { [key: string]: React.ReactNode } = {
  car: <Car className="h-8 w-8" />,
  plane: <Plane className="h-8 w-8" />,
  droplet: <Droplet className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
  truck: <Truck className="h-8 w-8" />,
};

const imageMap: { [key: string]: string } = {
  automotive: automotiveImg,
  "aerospace-defence": aerospaceImg,
  "power-industrial-automation": powerImg,
  components: componentsImg,
  rail: railImg,
};

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-heading font-semibold text-accent text-sm uppercase tracking-widest mb-4">
            Our Expertise
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From automotive to aerospace, we provide tailored solutions for diverse industrial sectors
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="relative">
          {/* Subtle white blur overlay effect */}
          <div className="absolute -inset-2 bg-white/10 backdrop-blur-[2px] rounded-2xl -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link
                to={`/industries/${industry.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/10">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imageMap[industry.slug]}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-14 h-14 bg-accent rounded-lg flex items-center justify-center text-accent-foreground shadow-lg">
                      {iconMap[industry.icon]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {industry.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                      <span>Explore Products</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/industries">
              View All Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
