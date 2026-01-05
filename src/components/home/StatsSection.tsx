import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Users, Globe, Award } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <Factory className="h-8 w-8" />, endValue: 50, suffix: "+", label: "Industry Partners" },
  { icon: <Users className="h-8 w-8" />, endValue: 100, suffix: "+", label: "Happy Clients" },
  { icon: <Globe className="h-8 w-8" />, endValue: 15, suffix: "+", label: "Countries Served" },
  { icon: <Award className="h-8 w-8" />, endValue: 500, suffix: "+", label: "Products Delivered" },
];

const AnimatedCounter = ({ endValue, suffix, inView }: { endValue: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-accent-foreground mb-2">
                <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-accent-foreground/80 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
