import Navigation from "@/components/Navigation";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const properties = [
  {
    name: "The Sunrise House",
    type: "Restaurant",
    image: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wlyzkjvm/65418d1a-901f-42da-800b-c2ba3b69d1dc.JPG",
    description: "Experience upscale breakfast and brunch in the heart of Montrose.",
    url: "https://www.thesunrisehouse.com/reservations",
  },
  {
    name: "Koya",
    type: "Restaurant",
    image: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/qkcathmy/961aaf9d-d577-4cc5-b7af-4e2f3b34212d.JPG",
    description: "A unique fusion of exceptional dining and immersive entertainment.",
    url: "https://www.koyahouston.com",
  },
  {
    name: "Gazebo",
    type: "Restaurant",
    image: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/edxqahiw/d8817ff8-4ff8-418a-bfbe-00fa0d182a2b.JPG",
    description: "A refind dining experience featuring fresh seafood and flavorful Cajun dishes.",
    url: "https://www.gazebohouston.com",
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
            src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white space-y-6 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold animate-fade-in">
            Strickland Hospitality Group
          </h1>
          <p className="text-xl md:text-2xl font-serif animate-slide-up">
            Crafting exceptional experiences in hospitality
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Our Restaurants
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