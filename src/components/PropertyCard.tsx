import { Card, CardContent } from "@/components/ui/card";

interface PropertyCardProps {
  name: string;
  type: string;
  image: string;
  description: string;
}

const PropertyCard = ({ name, type, image, description }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <CardContent className="p-0 relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium mb-1">{type}</p>
          <h3 className="text-xl font-serif mb-2">{name}</h3>
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;