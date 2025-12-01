import { motion } from "framer-motion";
import { IconRun, IconCar, IconParachute, IconSwimming } from "@tabler/icons-react";

const EventFormats = () => {
  const formats = [
    {
      icon: IconRun,
      title: "Obstacle Courses",
      description: "Mud pits, wall climbs, rope challenges, fire jumps. Test your endurance across 10-25 km of brutal terrain.",
      difficulty: "Beginner to Advanced",
      duration: "3-6 hours",
    },
    {
      icon: IconCar,
      title: "Off-Road Drives",
      description: "Epic convoy expeditions through mountains, deserts, and forests. Navigate extreme terrains in 4x4s.",
      difficulty: "Intermediate to Advanced",
      duration: "2-5 days",
    },
    {
      icon: IconSwimming,
      title: "Water Challenges",
      description: "River crossings, kayaking rapids, underwater obstacles. Conquer aquatic adventures.",
      difficulty: "All levels",
      duration: "4-8 hours",
    },
    {
      icon: IconParachute,
      title: "Aerial Adventures",
      description: "Paragliding, zip-lining, high-altitude treks. Experience breathtaking views with adrenaline rushes.",
      difficulty: "Beginner to Intermediate",
      duration: "Half-day to full-day",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-wider mb-4">
            <span className="gradient-text">EVENT FORMATS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Four ways to push your limits. Choose your path to victory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-grit p-8 hover-lift"
            >
              <format.icon size={48} className="text-secondary mb-4" />
              <h3 className="text-3xl font-display tracking-wide mb-3">{format.title}</h3>
              <p className="text-foreground/90 font-body text-lg mb-4 leading-relaxed">
                {format.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-body">
                <div className="px-3 py-1 bg-white/70 text-primary rounded-full border border-primary/30">
                  {format.difficulty}
                </div>
                <div className="px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                  {format.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventFormats;
