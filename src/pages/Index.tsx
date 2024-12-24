import Navigation from "@/components/Navigation";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const properties = [
  {
    name: "Wave",
    type: "Exhibition",
    image: "/lovable-uploads/ff3c5312-2abc-47f5-a697-0f756ee91d6e.png",
    description: "A mesmerizing exploration of ocean waves and their dynamic movement.",
    url: "#",
  },
  {
    name: "Window",
    type: "Exhibition",
    image: "/lovable-uploads/266b0d6b-29a7-4f4d-b1f9-2cb87be07bf4.png",
    description: "A powerful black and white portrait capturing human resilience.",
    url: "#",
  },
  {
    name: "Pearman Said",
    type: "Exhibition",
    image: "/lovable-uploads/5eb4aa63-7866-4ead-88fa-2acc4226817b.png",
    description: "Contemporary art exhibition featuring abstract expressions.",
    url: "#",
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
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white space-y-6 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold animate-fade-in">
            Make your own style
          </h1>
          <p className="text-xl md:text-2xl font-serif animate-slide-up">
            A platform where art and culture converge to inspire creativity
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Exhibition
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
            <p className="text-lg text-muted-foreground mb-8 font-serif">
              Strickland Hospitality Group is dedicated to creating extraordinary experiences
              through our carefully curated collection of hotels, restaurants, and bars.
              Each property is thoughtfully designed to reflect its unique character while
              maintaining our commitment to exceptional service and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-serif">
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