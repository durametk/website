import { motion } from "framer-motion";
import { Award, Users, Clock, Building } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Building className="h-6 w-6" />, value: "2025", label: "Established" },
    { icon: <Users className="h-6 w-6" />, value: "5+", label: "Industries Served" },
    { icon: <Clock className="h-6 w-6" />, value: "Mon-Sat", label: "10AM - 6:30PM" },
    { icon: <Award className="h-6 w-6" />, value: "100%", label: "Quality Focus" },
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
              Your Specialized Partner for Advanced Materials
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Duramet Technologies is a specialized distributor and solution partner for advanced materials and electronic components serving the electronics industry. We focus on thermal management, circuit board protection, gasketing, bonding, and low-pressure molding solutions.
              </p>
              <p>
                By collaborating with globally recognized manufacturers, we help customers improve product reliability, efficiency, and longevity. Our technical expertise supports customers from material selection to production implementation across demanding applications.
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
