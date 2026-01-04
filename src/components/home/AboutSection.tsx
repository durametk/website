import { motion } from "framer-motion";
import { Award, Users, Clock, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "25+", label: "Years Experience" },
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Happy Clients" },
    { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Support" },
    { icon: <Target className="h-6 w-6" />, value: "99%", label: "Quality Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-industrial-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-heading font-semibold text-accent text-sm uppercase tracking-widest mb-4">
              About Duramet Technologies
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Your Trusted Industrial Partner Since Day One
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Duramet Technologies is a premier industrial distributor and solutions provider based in Bengaluru, India. We specialize in delivering high-quality precision components and engineering solutions to manufacturers across diverse sectors.
              </p>
              <p>
                Founded by industry veterans with decades of experience in industrial supply chains, we understand the critical importance of quality, reliability, and timely delivery in manufacturing operations. Our extensive network of global manufacturers enables us to source the best products at competitive prices.
              </p>
              <p>
                Led by <strong className="text-foreground">Karthik Ramesh</strong>, our Managing Director, who brings extensive expertise in industrial distribution and customer relationship management, we are committed to being more than just a supplier – we aim to be your strategic partner in growth.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-border"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="font-heading font-bold text-3xl md:text-4xl text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
