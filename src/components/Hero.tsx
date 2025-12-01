import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { IconChevronDown } from "@tabler/icons-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden hero-pattern">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          <motion.h1 
            className="mb-6 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display tracking-wider text-shadow-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="gradient-text">EARN YOUR GRIT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 text-xl sm:text-2xl md:text-3xl font-body font-light text-foreground/90 max-w-3xl mx-auto"
          >
            High-octane obstacle races, convoys, and prizes — mud, fire, grit, and a tribe that backs you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="btn-hero text-xl px-10 py-7">
              Join the Next Run
            </Button>
            <Button className="btn-secondary text-xl px-10 py-7">
              See Prizes & Route
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-0 right-0 flex flex-wrap justify-center gap-8 sm:gap-12 px-6"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display text-primary">250+</div>
            <div className="text-sm sm:text-base font-body text-muted-foreground">Events Held</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display text-accent">₹2.5Cr+</div>
            <div className="text-sm sm:text-base font-body text-muted-foreground">Prizes Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display text-primary">15K+</div>
            <div className="text-sm sm:text-base font-body text-muted-foreground">Tribe Members</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IconChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
