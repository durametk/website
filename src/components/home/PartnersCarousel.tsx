import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

interface Logo {
  name: string;
  id: number;
  img: string;
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);
  
  // Each column gets a differently shuffled copy of all logos
  for (let i = 0; i < columnCount; i++) {
    // Create a unique shuffle for each column with different starting points
    const shuffled = shuffleArray(allLogos);
    // Rotate the array by different amounts to ensure different logos show at the same time
    const rotated = [...shuffled.slice(i % shuffled.length), ...shuffled.slice(0, i % shuffled.length)];
    columns[i] = rotated;
  }

  return columns;
};

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2500;
    const columnDelay = index * 500; // Larger stagger between columns
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);

    const currentLogo = useMemo(() => logos[currentIndex], [logos, currentIndex]);

    return (
      <motion.div
        className="relative h-20 w-32 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLogo.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center bg-background rounded-lg shadow-sm border border-border"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <img
              src={currentLogo.img}
              alt={currentLogo.name}
              className={`h-12 w-auto max-h-[60%] max-w-[80%] object-contain ${
                currentLogo.name === "PDC" ? "brightness-0" : ""
              }`}
              style={currentLogo.name === "PDC" ? { filter: "brightness(0)" } : {}}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);

LogoColumn.displayName = "LogoColumn";

const PartnersCarousel = () => {
  const logos: Logo[] = [
    { name: "PDC", id: 1, img: partnerLogos.PDC },
    { name: "Henkel", id: 2, img: partnerLogos.Henkel },
    { name: "3M", id: 3, img: partnerLogos["3M"] },
    { name: "Walsin", id: 4, img: partnerLogos.Walsin },
    { name: "Kamaya", id: 5, img: partnerLogos.Kamaya },
    { name: "Frontier", id: 6, img: partnerLogos.Frontier },
    { name: "Nitsuku", id: 7, img: partnerLogos.Nitsuku },
  ];

  const columnCount = 5;
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount);
    setLogoSets(distributedLogos);
  }, []);

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

      {/* Animated Logo Columns */}
      <div className="flex justify-center items-center gap-4 md:gap-6 px-4">
        {logoSets.map((columnLogos, index) => (
          <LogoColumn
            key={index}
            logos={columnLogos}
            index={index}
            currentTime={currentTime}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersCarousel;
