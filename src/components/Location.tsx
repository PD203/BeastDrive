import { motion } from "framer-motion";
import { IconMapPin, IconPhone, IconMail, IconClock } from "@tabler/icons-react";

const Location = () => {
  const locations = [
    { city: "Mumbai", address: "Andheri West, Mumbai - 400053", phone: "+91 98765 43210" },
    { city: "Delhi", address: "Connaught Place, New Delhi - 110001", phone: "+91 98765 43211" },
    { city: "Bangalore", address: "Koramangala, Bangalore - 560095", phone: "+91 98765 43212" },
  ];

  return (
    <section className="py-20 px-2 sm:px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-wider mb-4">
            <span className="gradient-text">FIND US</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Tribe headquarters across India. Visit us or reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-grit p-8 hover-lift"
            >
              <IconMapPin size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-display tracking-wide mb-4">{location.city}</h3>
              <p className="text-muted-foreground font-body mb-3">{location.address}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <IconPhone size={18} className="text-accent" />
                <span className="font-body text-sm">{location.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-grit p-8 max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-display tracking-wide mb-6">General Inquiries</h3>
          <div className="space-y-4 text-muted-foreground font-body">
            <div className="flex items-center justify-center gap-3">
              <IconMail size={24} className="text-primary" />
              <span>hello@beastdrive.in</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <IconPhone size={24} className="text-primary" />
              <span>+91 1800-BEAST-00</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <IconClock size={24} className="text-primary" />
              <span>Mon-Sat: 9:00 AM - 7:00 PM IST</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
