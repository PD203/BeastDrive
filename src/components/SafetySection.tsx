import { motion } from "framer-motion";
import { IconFirstAidKit, IconCertificate, IconAmbulance, IconHeartbeat } from "@tabler/icons-react";

const SafetySection = () => {
  const safetyFeatures = [
    {
      icon: IconFirstAidKit,
      title: "On-Site Medical Teams",
      description: "Qualified doctors and paramedics stationed at every checkpoint.",
    },
    {
      icon: IconAmbulance,
      title: "Emergency Response",
      description: "Ambulances and rapid evacuation systems ready at all times.",
    },
    {
      icon: IconCertificate,
      title: "Certified Instructors",
      description: "Expert trainers with international safety certifications guide every event.",
    },
    {
      icon: IconHeartbeat,
      title: "Health Screening",
      description: "Pre-event fitness assessments and real-time health monitoring.",
    },
  ];

  return (
    <section className="py-20 px-2 sm:px-6 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-wider mb-4">
            <span className="gradient-text">SAFETY & MEDICAL</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Push your limits safely. Your well-being is our top priority.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-grit p-6 text-center hover-lift"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <feature.icon size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-display tracking-wide mb-2">{feature.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-body mb-4">
            All events are insured and comply with national adventure sports safety standards.
          </p>
          <button className="btn-secondary">View Safety Guidelines</button>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetySection;
