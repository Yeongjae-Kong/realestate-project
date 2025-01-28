import { Card, CardContent } from "@/components/ui/card";

interface PropertyCardProps {
  name: string;
  type: string;
  image: string;
  description: string;
  url: string;
}

const PropertyCard = ({ name, type, image, description, url }: PropertyCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="overflow-hidden group cursor-pointer" 
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="link"
      aria-label={`Visit ${name}`}
    >
      <CardContent className="p-0 relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Enhanced gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium mb-1 text-white/90">{type}</p>
          <h3 className="text-xl font-serif mb-2 font-bold text-white drop-shadow-sm">{name}</h3>
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/95 drop-shadow">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;