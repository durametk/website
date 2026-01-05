import { motion } from "framer-motion";

// Partner logos - using public folder paths
const partnerLogos: { [key: string]: string } = {
  PDC: "/logo/PDC_byBrady_Logo_white_RGB.svg",
  Henkel: "/logo/Henkel-Logo.svg",
  "3M": "/logo/3m-2.svg",
  Walsin: "/logo/Walsin-logo-1140x570.jpg_1.svg",
  Kamaya: "/logo/Kamaya_600x600_1.svg",
  Frontier: "/logo/Frontier_communications_logo_2023.svg",
  Nitsuku: "/logo/nisstuko1.svg",
};

const PartnersCarousel = () => {
  // Partner companies - Associated Brands with logo images
  const partners = [
    { name: "PDC", logo: partnerLogos.PDC },
    { name: "Henkel", logo: partnerLogos.Henkel },
    { name: "3M", logo: partnerLogos["3M"] },
    { name: "Walsin", logo: partnerLogos.Walsin },
    { name: "Kamaya", logo: partnerLogos.Kamaya },
    { name: "Frontier", logo: partnerLogos.Frontier },
    { name: "Nitsuku", logo: partnerLogos.Nitsuku },
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
              <div className="bg-background rounded-lg px-10 py-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`h-12 w-auto object-contain max-w-[150px] ${
                    partner.name === "PDC" ? "brightness-0" : ""
                  }`}
                  style={partner.name === "PDC" ? { filter: "brightness(0)" } : {}}
                  loading="lazy"
                />
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
