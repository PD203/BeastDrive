import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconCalendar, IconMapPin} from "@tabler/icons-react";
import { BsCurrencyRupee } from "react-icons/bs";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  prize: string;
  image: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  index: number;
}

const EventCard = ({ title, date, location, prize, image, difficulty, index }: EventCardProps) => {
  const difficultyColors = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-grit hover-lift"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border ${difficultyColors[difficulty]} text-xs font-display`}>
          {difficulty}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-display tracking-wide text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="space-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <IconCalendar size={18} className="text-primary" />
            <span className="font-body text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconMapPin size={18} className="text-primary" />
            <span className="font-body text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsCurrencyRupee size={18} className="text-accent" />
            <span className="font-body text-sm font-semibold">{prize}</span>
          </div>
        </div>

        <Button className="w-full btn-hero">
          View Event
        </Button>
      </div>
    </motion.div>
  );
};

export default EventCard;
