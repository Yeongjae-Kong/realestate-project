import Navigation from "@/components/Navigation";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const properties = [
  {
    name: "The Grand Hotel",
    type: "Luxury Hotel",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
    description: "Experience unparalleled luxury in the heart of the city.",
  },
  {
    name: "Bistro 73",
    type: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    description: "Modern French cuisine in an intimate setting.",
  },
  {
    name: "Sky Lounge",
    type: "Rooftop Bar",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80",
    description: "Craft cocktails with breathtaking city views.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white space-y-6 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold animate-fade-in">
            Strickland Hospitality Group
          </h1>
          <p className="text-xl md:text-2xl animate-slide-up">
            Crafting exceptional experiences in hospitality
          </p>
          <Button size="lg" className="animate-slide-up" variant="outline">
            Explore Our Properties
          </Button>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Our Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.name} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Strickland Hospitality Group is dedicated to creating extraordinary experiences
              through our carefully curated collection of hotels, restaurants, and bars.
              Each property is thoughtfully designed to reflect its unique character while
              maintaining our commitment to exceptional service and attention to detail.
            </p>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're planning an event or interested in learning more about our
            properties, we'd love to hear from you.
          </p>
          <Button variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;