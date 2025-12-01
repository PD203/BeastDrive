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
        className="relative z-10 flex flex-col items-center justify-center h-full px-2 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          <motion.h1 
            className="mb-6 px-2 sm:px-4 py-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display tracking-wider bg-white/60 rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="gradient-text">India's First-Ever
BeastDrive Is Here!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 text-xl sm:text-2xl md:text-3xl font-body font-light text-foreground/90 max-w-3xl mx-auto"
          >
           10 Days - 3500 KM - 25 Cars - 1 Chance to Make History.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="btn-hero text-xl px-6 sm:px-10 py-7 hover:border-[0.5px] hover:border-white">
              Resigter Now
            </Button>
            <Button className="btn-her0 text-xl px-6 sm:px-10 py-7 hover:border-[0.5px] hover:border-white">
              Explore Events
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-0 right-0 flex flex-wrap justify-center gap-8 sm:gap-12 px-2 sm:px-6"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display text-primary">2M+</div>
            <div className="text-sm sm:text-base font-body text-muted-foreground">Digital Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display text-accent">80%</div>
            <div className="text-sm sm:text-base font-body text-muted-foreground">Audience Aged 21-40</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-display text-primary">20K+</div>
            <div className="text-sm sm:text-base font-body text-muted-foreground">Website visits</div>
          </div>
        </motion.div>
       
        
      </motion.div>
    </section>
  );
};

export default Hero;
