import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    "Red Bull", "Hero MotoCorp", "Mahindra Adventure", "Royal Enfield",
    "Jeep India", "GoPro", "Decathlon", "Trek & Hike"
  ];

  const mediaLogos = [
    "Times of India", "ESPN", "Discovery Channel", "National Geographic",
    "Adventure Plus", "Outdoor India", "The Hindu", "NDTV"
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-wider mb-4">
            <span className="gradient-text">PARTNERS & SPONSORS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Backed by India's leading adventure and lifestyle brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-grit p-6 flex items-center justify-center hover-lift"
            >
              <span className="font-display text-xl text-muted-foreground text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Press & Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-wider mb-4">
            <span className="gradient-text">AS FEATURED IN</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {mediaLogos.map((media, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-4 flex items-center justify-center"
            >
              <span className="font-body text-lg text-muted-foreground/60 text-center">
                {media}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
