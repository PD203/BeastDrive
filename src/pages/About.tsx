import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { IconTarget, IconUsers, IconTrophy, IconShieldCheck } from "@tabler/icons-react";

const About = () => {
  const values = [
    {
      icon: IconTarget,
      title: "Mission",
      description: "To create India's largest adventure community where every member pushes boundaries, earns grit, and celebrates victory together.",
    },
    {
      icon: IconUsers,
      title: "Tribe > Ego",
      description: "We're not competitors—we're a tribe. Every event builds camaraderie, trust, and lifelong bonds through shared challenges.",
    },
    {
      icon: IconTrophy,
      title: "Real Rewards",
      description: "Over ₹2.5 crores in prizes awarded. Jeeps, Thars, BMW bikes, gold, MacBooks—your grit deserves real recognition.",
    },
    {
      icon: IconShieldCheck,
      title: "Safety First",
      description: "Professional medical teams, certified instructors, and rigorous safety protocols ensure every adventure is secure.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-card to-background hero-pattern">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-display tracking-wider mb-6">
            <span className="gradient-text">THE TRIBE</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed">
            We're not just an events company. We're a movement. A tribe of adventurers who believe that life's greatest moments happen outside your comfort zone.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Events Completed" },
              { number: "15K+", label: "Tribe Members" },
              { number: "₹2.5Cr+", label: "Prizes Won" },
              { number: "12", label: "States Covered" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl font-display text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-display tracking-wider mb-4">
              <span className="gradient-text">WHAT WE STAND FOR</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-grit p-8 hover-lift"
              >
                <value.icon size={48} className="text-primary mb-4" />
                <h3 className="text-2xl font-display tracking-wide mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-5xl sm:text-6xl font-display tracking-wider mb-8">
              <span className="gradient-text">OUR STORY</span>
            </h2>
            <p className="text-lg text-foreground/90 font-body leading-relaxed">
              BeastDrive started in 2020 with a simple belief: Indians deserve world-class adventure experiences without leaving their country.
            </p>
            <p className="text-lg text-foreground/90 font-body leading-relaxed">
              What began as a single obstacle course in Lonavala has grown into India's largest adventure movement. We've taken thousands across mountain passes, through mud pits, over walls, and into experiences they'll never forget.
            </p>
            <p className="text-lg text-foreground/90 font-body leading-relaxed">
              Every event is designed to strip away ego, build genuine community, and reward those who dare. From beginners taking their first leap to athletes chasing Wranglers—everyone earns their place in the tribe.
            </p>
            <p className="text-xl font-display tracking-wide text-primary mt-8">
              This isn't about competition. It's about transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-card to-background hero-pattern">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-wider mb-6">
            <span className="gradient-text">JOIN THE MOVEMENT</span>
          </h2>
          <p className="text-2xl text-foreground/90 font-body mb-12 max-w-3xl mx-auto">
            15,000 tribe members. 250 events. ₹2.5 crores in prizes. Your adventure starts now.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero text-2xl px-16 py-8"
          >
            BECOME A TRIBE MEMBER
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
