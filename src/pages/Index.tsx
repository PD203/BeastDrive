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
      title: "The Survival Run",
      date: "August 1st, 2026",
      location: "India",
      image: eventObstacle,
      prize: 5500,
    },
    
  ];

  const prizes = [
    { title: "Jeep Wrangler", image: prizeJeep, value: "₹60 Lakh" },
    { title: "Mahindra Thar", image: prizeThar, value: "₹18 Lakh" },
    { title: "Adventure Bike", image: prizeBMW, value: "₹25 Lakh" },
    { title: "Macbook", image: "https://5.imimg.com/data5/SELLER/Default/2024/10/456578648/VA/XV/MN/76006626/mackbook-pro-500x500.jpg", value: "₹25 Lakh" },
    { title: "Gold Voucher", image: "https://img.freepik.com/free-vector/golden-gift-voucher-templates_52683-52750.jpg?semt=ais_hybrid&w=740&q=80", value: "₹25 Lakh" },
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
      
       <Gallery />

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
           
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <EventFormats />

      <Features />

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


        </div>
      </section>

      

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

     
     

      
     

      <Footer />
    </div>
  );
};

export default Index;
