import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { IconQuote } from "@tabler/icons-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  index: number;
}

const TestimonialCard = ({ quote, name, location, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="card-grit p-8 h-full hover-lift">
        <IconQuote size={40} className="text-primary/30 mb-4" />
        <p className="text-foreground/90 font-body text-lg mb-6 leading-relaxed">
          "{quote}"
        </p>
        <div className="border-t border-border pt-4">
          <p className="font-display text-xl text-foreground">{name}</p>
          <p className="text-muted-foreground font-body text-sm">{location}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
