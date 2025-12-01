import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import eventObstacle from "@/assets/event-obstacle.jpg";
import eventDrive from "@/assets/event-drive.jpg";

const Events = () => {
  const allEvents = [
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
    {
      title: "DESERT STORM DRIVE",
      date: "June 10, 2025",
      location: "Jaisalmer, Rajasthan",
      prize: "₹5 Lakh + BMW Bike",
      image: eventDrive,
      difficulty: "Advanced" as const,
    },
    {
      title: "COASTAL OBSTACLE RUN",
      date: "July 22, 2025",
      location: "Goa",
      prize: "₹4 Lakh + MacBook Pro",
      image: eventObstacle,
      difficulty: "Intermediate" as const,
    },
    {
      title: "MOUNTAIN FIRE CHALLENGE",
      date: "August 15, 2025",
      location: "Rishikesh, Uttarakhand",
      prize: "₹6 Lakh + Gold Vouchers",
      image: eventObstacle,
      difficulty: "Advanced" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-card to-background hero-pattern">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-display tracking-wider mb-6">
            <span className="gradient-text">ALL EVENTS</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            From beginner challenges to extreme obstacle courses and epic drives. Find your next adventure.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display text-lg transition-all hover:scale-105">
              All Events
            </button>
            <button className="px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg font-display text-lg transition-all hover:border-primary">
              Obstacle Courses
            </button>
            <button className="px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg font-display text-lg transition-all hover:border-primary">
              Drives
            </button>
          </div>
        </motion.div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
