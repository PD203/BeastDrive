import { motion } from "framer-motion";
import { IconTrophy, IconUsers, IconShieldCheck, IconMapPin } from "@tabler/icons-react";

const Features = () => {
  const features = [
    {
      icon: IconTrophy,
      title: "Epic Prizes",
      description: "Win Jeeps, Thars, BMW bikes, gold vouchers, MacBooks, and massive cash rewards.",
    },
    {
      icon: IconUsers,
      title: "Tribe Community",
      description: "Join 15,000+ adventurers. Build lifelong bonds through shared challenges.",
    },
    {
      icon: IconShieldCheck,
      title: "Safety First",
      description: "Professional medical teams and certified instructors at every event.",
    },
    {
      icon: IconMapPin,
      title: "Pan-India Events",
      description: "From Himalayan peaks to coastal beaches—adventure across 12 states.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-wider mb-4">
            <span className="gradient-text">WHY BEASTDRIVE?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            More than events—it's a lifestyle. It's a movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-grit p-8 text-center hover-lift"
            >
              <feature.icon size={56} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-display tracking-wide mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
