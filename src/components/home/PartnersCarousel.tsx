import { motion } from "framer-motion";

const PartnersCarousel = () => {
  // Associated brands
  const partners = [
    { name: "PDC", logo: "PDC" },
    { name: "Henkel", logo: "HENKEL" },
    { name: "3M", logo: "3M" },
    { name: "Walsin", logo: "WALSIN" },
    { name: "Kamaya", logo: "KAMAYA" },
    { name: "Prosperity", logo: "PROSPERITY" },
    { name: "Frontier", logo: "FRONTIER" },
    { name: "Nitsuku", logo: "NITSUKU" },
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
            Associated with World-Class Manufacturers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We partner with globally recognized manufacturers to deliver reliable, high-performance material solutions
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
