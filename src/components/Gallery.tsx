import { motion } from "framer-motion";
import eventObstacle from "@/assets/event-obstacle.jpg";
import eventDrive from "@/assets/event-drive.jpg";
import heroImage from "@/assets/hero-bg.jpg";

const Gallery = () => {
  const images = [
    { src: eventObstacle, title: "Obstacle Fury" },
    { src: eventDrive, title: "Himalayan Drive" },
    { src: heroImage, title: "Beast Bash" },
    { src: eventObstacle, title: "Warrior Challenge" },
    { src: eventDrive, title: "Desert Storm" },
    { src: heroImage, title: "Coastal Run" },
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
            <span className="gradient-text">HIGHLIGHTS REEL</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Witness the grit, the mud, the victory. This is what tribe looks like.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-xl text-foreground">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="btn-hero">View Full Gallery</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
