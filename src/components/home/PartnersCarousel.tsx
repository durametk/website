import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Partner logos - using public folder paths
const partnerLogos = [
  { name: "PDC", img: "/logo/PDC_byBrady_Logo_white_RGB.svg", invert: true },
  { name: "Henkel", img: "/logo/Henkel-Logo.svg", invert: false },
  { name: "3M", img: "/logo/3m-2.svg", invert: false },
  { name: "Walsin", img: "/logo/Walsin-logo-1140x570.jpg_1.svg", invert: false },
  { name: "Kamaya", img: "/logo/Kamaya_600x600_1.svg", invert: false },
  { name: "Frontier", img: "/logo/Frontier_communications_logo_2023.svg", invert: false },
  { name: "Nitsuku", img: "/logo/nisstuko1.svg", invert: false },
];

const PartnersCarousel = () => {
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

      {/* Infinite Slider */}
      <InfiniteSlider gap={24} duration={20} durationOnHover={40}>
        {partnerLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center h-20 w-40 md:h-24 md:w-48 bg-background rounded-lg shadow-sm border border-border px-4"
          >
            <img
              src={logo.img}
              alt={logo.name}
              className={`h-12 w-auto max-h-[60%] max-w-[80%] object-contain ${
                logo.invert ? "brightness-0" : ""
              }`}
            />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
};

export default PartnersCarousel;
