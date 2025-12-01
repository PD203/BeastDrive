import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface PrizeCardProps {
  title: string;
  image: string;
  value: string;
  index: number;
}

const PrizeCard = ({ title, image, value, index }: PrizeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="card-grit overflow-hidden">
        <div className="relative h-64 sm:h-80 overflow-hidden bg-grit">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          />
          
        </div>
        <div className="p-6 text-center">
          <h3 className="text-2xl font-display tracking-wide text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </Card>
    </motion.div>
  );
};

export default PrizeCard;
