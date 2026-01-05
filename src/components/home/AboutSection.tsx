import { motion } from "framer-motion";
import { Award, Users, Clock, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "2025", label: "Established" },
    { icon: <Users className="h-6 w-6" />, value: "360°", label: "Solutions" },
    { icon: <Clock className="h-6 w-6" />, value: "Mon-Sat", label: "10 AM - 6:30 PM" },
    { icon: <Target className="h-6 w-6" />, value: "Global", label: "Partners" },
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
              About Duramet Technologies
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Duramet Technologies is a specialized distributor and solution partner for advanced materials and electronic components serving the electronics industry. We focus on thermal management, circuit board protection, gasketing, bonding, and low-pressure molding solutions. By collaborating with globally recognized manufacturers, we help customers improve product reliability, efficiency, and longevity. Our technical expertise supports customers from material selection to production implementation across demanding applications.
              </p>
              <p>
                <strong className="text-foreground">Karthik Ramesh</strong>, Founder & Managing Director, brings hands-on experience in electronic materials distribution and application-based solution selling. With strong exposure to thermal management, circuit protection, bonding, and component technologies, he has worked closely with OEMs, EMS providers, and design teams. His focus is on delivering reliable, cost-effective material solutions aligned with customer performance and production requirements.
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
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-card p-8 rounded-xl shadow-lg transition-shadow duration-300 text-center border border-border hover:shadow-xl hover:shadow-primary/5"
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
