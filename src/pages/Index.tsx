import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import EventCard from "@/components/EventCard";
import EventFormats from "@/components/EventFormats";
import PrizeCard from "@/components/PrizeCard";
import SafetySection from "@/components/SafetySection";
import TestimonialCard from "@/components/TestimonialCard";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import eventObstacle from "@/assets/event-obstacle.jpg";
import eventDrive from "@/assets/event-drive.jpg";
import prizeJeep from "@/assets/prize-jeep.jpg";
import prizeThar from "@/assets/prize-thar.jpg";
import prizeBMW from "@/assets/prize-bmw.jpg";

const Index = () => {
  const upcomingEvents = [
    {
      title: "BEAST BASH: OBSTACLE FURY",
      date: "March 15, 2025",
      location: "Lonavala, Maharashtra",
      prize: "₹10 Lakh + Jeep Wrangler",
      image: eventObstacle,
      difficulty: "Advanced" as const,
    },
    {
      title: "HIMALAYAN DRIVE CONQUEST",
      date: "April 20, 2025",
      location: "Manali, Himachal Pradesh",
      prize: "₹8 Lakh + Mahindra Thar",
      image: eventDrive,
      difficulty: "Intermediate" as const,
    },
    {
      title: "WARRIOR CHALLENGE: BEGINNER",
      date: "May 5, 2025",
      location: "Bangalore, Karnataka",
      prize: "₹3 Lakh + Gold Vouchers",
      image: eventObstacle,
      difficulty: "Beginner" as const,
    },
  ];

  const prizes = [
    { title: "Jeep Wrangler", image: prizeJeep, value: "₹60 Lakh" },
    { title: "Mahindra Thar", image: prizeThar, value: "₹18 Lakh" },
    { title: "BMW Adventure Bike", image: prizeBMW, value: "₹25 Lakh" },
  ];

  const testimonials = [
    {
      quote: "BeastDrive changed my life. The tribe energy is real. I've never felt more alive than crossing that finish line covered in mud!",
      name: "Rahul Verma",
      location: "Mumbai",
    },
    {
      quote: "The Himalayan drive was epic. Incredible landscapes, challenging routes, and I won a Thar! Best adventure experience ever.",
      name: "Priya Sharma",
      location: "Delhi",
    },
    {
      quote: "Started as a beginner, now I'm conquering advanced courses. This tribe pushes you beyond your limits. Tribe over ego, always!",
      name: "Arjun Patel",
      location: "Ahmedabad",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />

      {/* Upcoming Events Section */}
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
              <span className="gradient-text">UPCOMING EVENTS</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Choose your challenge. Earn your rewards. Join the tribe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <EventFormats />

      {/* Prizes Section */}
      <section id="prizes" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-wider mb-4">
              <span className="gradient-text">LEGENDARY PRIZES</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Win vehicles worth crores, gold vouchers, MacBooks, and more. Your grit, your reward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <PrizeCard key={index} {...prize} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground font-body mb-6">
              + Gold Vouchers • MacBooks • Gear Kits • Cash Prizes
            </p>
          </motion.div>
        </div>
      </section>

      <SafetySection />

      {/* Testimonials Section */}
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
              <span className="gradient-text">TRIBE SPEAKS</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Real stories from real warriors. This is more than events—it's a movement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Partners />

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-card to-background hero-pattern relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-display tracking-wider mb-6">
            <span className="gradient-text">READY TO EARN IT?</span>
          </h2>
          <p className="text-2xl text-foreground/90 font-body mb-12 max-w-3xl mx-auto">
            Join 15,000+ adventurers. Push your limits. Win epic prizes. Be part of the tribe.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero text-2xl px-16 py-8 shadow-2xl"
          >
            JOIN THE TRIBE
          </motion.button>
        </motion.div>
      </section>

      <Location />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Index;
