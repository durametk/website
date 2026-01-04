import { motion } from "framer-motion";

const PartnersCarousel = () => {
  // Partner companies - using placeholder names for industrial companies
  const partners = [
    { name: "Bosch", logo: "BOSCH" },
    { name: "SKF", logo: "SKF" },
    { name: "Siemens", logo: "SIEMENS" },
    { name: "ABB", logo: "ABB" },
    { name: "Schneider", logo: "SCHNEIDER" },
    { name: "Honeywell", logo: "HONEYWELL" },
    { name: "Rockwell", logo: "ROCKWELL" },
    { name: "Parker", logo: "PARKER" },
  ];

  // Duplicate for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We partner with world-renowned manufacturers to bring you the best industrial solutions
          </p>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <div className="flex animate-marquee">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="bg-background rounded-lg px-10 py-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                <span className="font-heading font-bold text-xl text-steel tracking-wider">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-muted to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-muted to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default PartnersCarousel;
